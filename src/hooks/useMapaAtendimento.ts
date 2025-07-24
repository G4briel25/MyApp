import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { AppDispatch, RootState } from '../redux/store';
import { fetchMesas, clearMesas } from '../redux/slices/mesaSlice';
import { Mesa, TipoFiltro } from '../types';
import { Alert } from 'react-native';
import { InteractionManager } from 'react-native';

export function useMapaAtendimento() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: mesas = [], loading } = useSelector((state: RootState) => state.mesas);

  const [mesasFiltradas, setMesasFiltradas] = useState<Mesa[]>([]);
  const [activeButton, setActiveButton] = useState<TipoFiltro>('Visão Geral');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadingFiltro, setLoadingFiltro] = useState(false);

  const PER_PAGE = 20;

  const loadMesas = useCallback(async (
    pageNumber: number,
    isRefresh: boolean = false,
    isLoadMore: boolean = false
  ) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
        // Limpar dados existentes quando faz refresh
        dispatch(clearMesas());
      } else if (isLoadMore) {
        setLoadingMore(true);
      }

      const result = await dispatch(fetchMesas({
        page: pageNumber,
        perPage: PER_PAGE,
        isLoadMore
      }));

      if (fetchMesas.rejected.match(result)) {
        Alert.alert('Erro', 'Não foi possível carregar as mesas.');
        return;
      }

      // Atualiza paginação se necessário
      if (fetchMesas.fulfilled.match(result)) {
        const response = result.payload;
        setHasMore(response.pagination?.hasMore ?? false);
        setPage(pageNumber);
      }
    } catch (err) {
      console.log('Erro ao carregar mesas:', err);
      Alert.alert('Erro', 'Erro inesperado ao carregar mesas.');
    } finally {
      setLoadingMore(false);
      setRefreshing(false);
    }
  }, [dispatch]);

  const loadMoreMesas = useCallback(() => {
    if (hasMore && !loading && !loadingMore) {
      const nextPage = page + 1;
      loadMesas(nextPage, false, true); // isLoadMore = true
    }
  }, [hasMore, loading, loadingMore, page, loadMesas]);

  const applyFilters = useCallback(() => {
    let filtered = [...mesas];

    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(mesa =>
        mesa.cliente?.toLowerCase().includes(searchLower) ||
        mesa.numero?.toString().includes(searchText) ||
        mesa.atendente?.toLowerCase().includes(searchLower)
      );
    }

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
    loadMesas(1, true, false); // isRefresh = true
  }, [loadMesas]);

  const resetFilters = useCallback(() => {
    setSearchText('');
    setActiveButton('Visão Geral');
  }, []);

  // Quando muda filtro, reinicia a paginação
  const handleFilterChange = useCallback((newFilter: TipoFiltro) => {
    setActiveButton(newFilter);
    // Se mudou o filtro, pode querer recarregar do zero
    // ou aplicar apenas nos dados existentes (como está fazendo)
  }, []);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(async () => {
      await loadMesas(1, false, false);
      setIsReady(true);
    });

    return () => task.cancel();
  }, []);

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
    setActiveButton: handleFilterChange,
    loadMoreMesas,
    refreshMesas,
    resetFilters,
    loadingFiltro,
    setLoadingFiltro,
    totalMesas: mesas.length,
    totalMesasFiltradas: mesasFiltradas.length,
    isFiltering: activeButton !== 'Visão Geral' || searchText.trim() !== '',
    isReady,
  };
}