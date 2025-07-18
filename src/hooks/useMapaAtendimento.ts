import { useEffect, useState, useCallback } from "react";
import { Mesa, TipoFiltro } from "../types";
import { Alert } from "react-native";
import mesaService from "../services/mesaService";

export function useMapaAtendimento() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesasFiltradas, setMesasFiltradas] = useState<Mesa[]>([]);
    const [loading, setLoading] = useState(false);
    const [activeButton, setActiveButton] = useState<TipoFiltro>('Visão Geral');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    // Configuração de paginação
    const PER_PAGE = 10;

    const loadMesas = useCallback(async (pageNumber: number, isRefresh: boolean = false) => {
        // Previne múltiplas requisições simultâneas
        if ((loading || loadingMore) && !isRefresh) return;
        
        if (!hasMore && !isRefresh && pageNumber > 1) return;

        try {
            if (pageNumber === 1 || isRefresh) {
                if (isRefresh) {
                    setRefreshing(true);
                } else {
                    setLoading(true);
                }
            } else {
                setLoadingMore(true);
            }

            const response = await mesaService.getMesasAll(pageNumber, PER_PAGE);
            const { data, pagination } = response;

            if (isRefresh || pageNumber === 1) {
                setMesas(data);
                setPage(pageNumber);
            } else {
                setMesas(prev => [...prev, ...data]);
                setPage(pageNumber);
            }

            setHasMore(pagination.hasMore);

        } catch (error) {
            console.log('Erro ao carregar mesas:', error);
            Alert.alert('Erro', 'Não foi possível carregar as mesas.');
        } finally {
            setLoading(false);
            setLoadingMore(false);
            setRefreshing(false);
        }
    }, [loading, loadingMore, hasMore]);

    const loadMoreMesas = useCallback(() => {
        if (hasMore && !loading && !loadingMore) {
            const nextPage = page + 1;
            loadMesas(nextPage);
        }
    }, [hasMore, loading, loadingMore, page, loadMesas]);

    const applyFilters = useCallback(() => {
        let filtered = [...mesas];

        // Aplicar filtro de busca
        if (searchText.trim()) {
            const searchLower = searchText.toLowerCase();
            filtered = filtered.filter(mesa =>
                mesa.cliente?.toLowerCase().includes(searchLower) ||
                mesa.numero?.toString().includes(searchText) ||
                mesa.atendente?.toLowerCase().includes(searchLower)
            );
        }

        // Aplicar filtro por categoria
        switch (activeButton) {
            case 'Em atendimento':
                filtered = filtered.filter(mesa => mesa.status === 'ocupada');
                break;
            case 'Ociosas':
                filtered = filtered.filter(mesa => mesa.tempoEmAberto > 10);
                break;
            case 'Disponíveis':
                filtered = filtered.filter(mesa => mesa.status === 'livre');
                break;
            case 'Sem pedidos':
                filtered = filtered.filter(mesa => mesa.valorTotal === 0 && mesa.status === 'ocupada');
                break;
            case 'Meus atendimentos':
                filtered = filtered.filter(mesa => mesa.atendente === 'Joaquim');
                break;
            case 'Visão Geral':
            default:
                break;
        }

        setMesasFiltradas(filtered);
    }, [mesas, activeButton, searchText]);

    const refreshMesas = useCallback(() => {
        setPage(1);
        setHasMore(true);
        loadMesas(1, true);
    }, [loadMesas]);

    // Função para resetar filtros e voltar ao topo
    const resetFilters = useCallback(() => {
        setSearchText('');
        setActiveButton('Visão Geral');
    }, []);

    // Carregar dados iniciais
    useEffect(() => {
        loadMesas(1);
    }, []);

    // Aplicar filtros quando dados ou filtros mudarem
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    return {
        mesas,
        mesasFiltradas,
        loading,
        loadingMore,
        refreshing,
        activeButton,
        searchText,
        page,
        hasMore,
        setSearchText,
        setActiveButton,
        loadMoreMesas,
        refreshMesas,
        resetFilters,
        totalMesas: mesas.length,
        totalMesasFiltradas: mesasFiltradas.length,
        isFiltering: activeButton !== 'Visão Geral' || searchText.trim() !== '',
    };
}