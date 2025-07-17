import { useEffect, useState } from "react";
import { Mesa, TipoFiltro } from "../types";
import { Alert } from "react-native";
import mesaService from "../services/mesaService";

export function useMapaAtendimento() {
    // Estados
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesasFiltradas, setMesasFiltradas] = useState<Mesa[]>([]);
    const [loading, setLoading] = useState(false);
    const [activeButton, setActiveButton] = useState<TipoFiltro>('Visão Geral');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMesas = async (pageNumber: number = 1, isRefresh: boolean = false) => {
        if (loading && !isRefresh) return;

        try {
            setLoading(true);
            const response = await mesaService.getMesasAll();

            if (isRefresh || pageNumber === 1) {
                setMesas(response);
                setPage(1);
                setHasMore(response.length === 20);
            } else {
                setMesas(prev => [...prev, ...response]);
                setHasMore(response.length === 20);
            }
        } catch {
            Alert.alert('Erro', 'Não foi possível carregar as mesas.')
        } finally {
            setLoading(false);
        }
    };

    const loadMoreMesas = () => {
        if (hasMore && !loading) {
            const nextPage = page + 1;
            setPage(nextPage);
            loadMesas(nextPage);
        }
    };

    const applyFilters = () => {
        let filtered = [...mesas];

        if (searchText.trim()) {
            filtered = filtered.filter(mesa =>
                mesa.cliente?.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
                mesa.numero?.toString().includes(searchText) ||
                mesa.atendente?.toLocaleLowerCase().includes(searchText.toLowerCase())
            );
        }

        switch (activeButton) {
            case 'Em atendimento':
                filtered = filtered.filter(mesa => mesa.status === 'ocupada');
                break;
            case 'Ociosas':
                filtered = filtered.filter(mesa => mesa.tempoEmAberto > 10 );
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
    };

    useEffect(() => {
        loadMesas();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [mesas, activeButton, searchText]);

    return {
        mesasFiltradas,
        loading,
        activeButton,
        searchText,
        setSearchText,
        setActiveButton,
        loadMoreMesas,
        setMesas,
        page,
        hasMore,
    };
}