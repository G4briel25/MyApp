import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardMesa from '../../components/CardMesa/CardMesa';
import HeaderGlobal from '../../components/HeaderGlobal/HeaderGlobal';
import {
    MapaAtendimentoBotoes,
    MapaAtendimentoContainer,
    MapaAtendimentoInput,
    MapaAtendimentoMesa,
    MapaAtendimentoPesquisa,
    MapaAtendimentoTouchableOpacity,
    MapaAtendimentoTouchTitle
} from "../../styles/styleCss";
import { ButtonRenderProps, CardRenderProps, Mesa, TipoFiltro } from "../../types";
import { COLORS } from '../../types/colors';
import mesaService from '../../services/mesaService';

const otherButtons: TipoFiltro[] = [
    'Em antendimento',
    'Ociosas',
    'Disponíveis',
    'Sem pedidos',
    'Meus atendimentos'
];

export default function MapaAtendimento() {

    const navigation = useNavigation<any>();
    const flatListRef = useRef<FlatList>(null);
    const filterScrollRef = useRef<FlatList>(null);

    // Estados
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [mesasFiltradas, setMesasFiltradas] = useState<Mesa[]>([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [activeButton, setActiveButton] = useState<TipoFiltro>('Visão Geral');
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // loadMesas iniciais
    useEffect(() => {
        loadMesas();
    }, []);

    // Aplicar filtros quando mudarem
    useEffect(() => {
        
    }, [mesas, activeButton, searchText]);

    const loadMesas = async (pageNumber: number = 1, isRefresh: boolean = false) => {
        if(loading && !isRefresh) return;

        try {
            setLoading(true);
            const response = await mesaService.getMesasAll();
            
            if(isRefresh || pageNumber === 1) {
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
            setRefreshing(false);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setPage(1);
        loadMesas(1, true);
    }, []);

    const loadMoreMesas = () => {
        if (hasMore && !loading) {
            const nextPage = page + 1;
            setPage(nextPage);
            loadMesas(nextPage);
        }
    };

    const applyFilters = () => {
        let filtered = [...mesas];

        if(searchText.trim()) {
            filtered = filtered.filter(mesa => 
                mesa.cliente?.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
                mesa.numero?.toString().includes(searchText) ||
                mesa.atendente?.toLocaleLowerCase().includes(searchText.toLowerCase())
            );
        }

        switch (activeButton) {
            case 'Em antendimento':
                filtered = filtered.filter(mesa => mesa.status === 'ocupada');
                break;
            case 'Ociosas':
                filtered = filtered.filter(mesa => mesa.status === 'livre');
                break;
            case 'Disponíveis':
                filtered = filtered.filter(mesa => mesa.status === 'livre');
                break;
            case 'Sem pedidos':
                filtered = filtered.filter(mesa => mesa.valorTotal === 0 && mesa.status === 'ocupada');
                break;
            case 'Meus atendimentos':
                filtered = filtered.filter(mesa => mesa.atendente === 'Ghabrichelso');
                break;
            case 'Visão Geral':
                default:
                    break;
        }

        setMesasFiltradas(filtered);
    };

    const handlerFilterPress = (filtro: TipoFiltro) => {
        setActiveButton(filtro);

        if(flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
        }

        if(filtro != 'Visão Geral' && filterScrollRef.current) {
            const index = otherButtons.indexOf(filtro);
            if(index != -1) {
                filterScrollRef.current.scrollToIndex({
                    index,
                    animated: true,
                    viewPosition: 0.5
                })
            }
        }
    }

    const renderButton = ({ item }: ButtonRenderProps) => (
        <MapaAtendimentoTouchableOpacity
            isActive={activeButton === item}
            onPress={() => handlerFilterPress(item as TipoFiltro)}
        >
            <MapaAtendimentoTouchTitle isActive={activeButton === item}>
                {item}
            </MapaAtendimentoTouchTitle>
        </MapaAtendimentoTouchableOpacity>
    );

    const renderCard = ({ item }: CardRenderProps) => (
        <CardMesa mesa={item} />
    );

    const renderFooter = () => {
        if(!loading) return null;

        return (
            <View style={{ padding: 16, alignItems: 'center' }}>
                <ActivityIndicator size="small" color={COLORS.COLOR_PIGZ} />
            </View>
        );
    };

    return (
        <MapaAtendimentoContainer>
            <HeaderGlobal
                title='Mapa de atendimento'
                onBackPress={() => navigation.goBack()}
            />

            <MapaAtendimentoPesquisa>
                <Icon name="search" size={32} color={COLORS.COLOR_PIGZ} />
                <MapaAtendimentoInput 
                    placeholder="Cliente, mesa, comanda, atendente"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </MapaAtendimentoPesquisa>

            <MapaAtendimentoBotoes>
                <MapaAtendimentoTouchableOpacity
                    isActive={activeButton === 'Visão Geral'}
                    onPress={() => handlerFilterPress('Visão Geral')}
                >
                    <MapaAtendimentoTouchTitle
                        isActive={activeButton === 'Visão Geral'}
                    >
                        Visão Geral
                    </MapaAtendimentoTouchTitle>
                </MapaAtendimentoTouchableOpacity>

                <FlatList<TipoFiltro>
                    ref={filterScrollRef}
                    data={otherButtons}
                    renderItem={renderButton}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                    onScrollToIndexFailed={() => {}}
                />
            </MapaAtendimentoBotoes>

            <MapaAtendimentoMesa>
                <FlatList<Mesa>
                    ref={flatListRef}
                    data={mesasFiltradas}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={{
                        paddingVertical: 8,
                        paddingBottom: 20,
                    }}
                    columnWrapperStyle={{
                        justifyContent: 'space-around',
                        marginBottom: 8,
                    }}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    onEndReached={loadMoreMesas}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                />
            </MapaAtendimentoMesa>
        </MapaAtendimentoContainer>
    );
}