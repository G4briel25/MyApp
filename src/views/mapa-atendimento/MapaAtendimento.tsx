import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
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
import { ButtonRenderProps, CardRenderProps, TipoFiltro } from "../../types";
import { COLORS } from '../../types/colors';
import { useMapaAtendimento } from '../../hooks/useMapaAtendimento';
import { useResponsiveColumns } from '../../hooks/useResponsiveColumns';
import SkeletonMapaAtendimento from '../../components/Skeleton/SkeletonMapaAtendimento';

const otherButtons: TipoFiltro[] = [
  'Em atendimento',
  'Ociosas',
  'Disponíveis',
  'Sem pedidos',
  'Meus atendimentos'
];

export default function MapaAtendimento() {
  const navigation = useNavigation<any>();
  const flatListRef = useRef<FlatList>(null);
  const filterScrollRef = useRef<FlatList>(null);

  const spacing = 16; // espaçamento entre os cards
  const { numColumns, cardWidth } = useResponsiveColumns(115, spacing);

  const {
    isReady,
    mesasFiltradas,
    loading,
    activeButton,
    searchText,
    setSearchText,
    setActiveButton,
    loadMoreMesas,
    hasMore
  } = useMapaAtendimento();

  const handlerFilterPress = (filtro: TipoFiltro) => {
    setActiveButton(filtro);

    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }

    if (filtro !== 'Visão Geral' && filterScrollRef.current) {
      const index = otherButtons.indexOf(filtro);
      if (index !== -1) {
        filterScrollRef.current.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5
        });
      }
    }
  };

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
    <CardMesa mesa={item} largura={cardWidth} />
  );

  if (!isReady) {
    return (
      <SkeletonMapaAtendimento />
    );
  }

  const renderFooter = () => {
    if (!loading || !hasMore) return null;

    return (
      <View style={{ padding: 16, alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.COLOR_PIGZ} />
      </View>
    );
  };

  // Função para lidar com o onEndReached
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      loadMoreMesas();
    }
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
          placeholderTextColor={'#616161'}
          value={searchText}
          onChangeText={setSearchText}
        />
      </MapaAtendimentoPesquisa>

      <MapaAtendimentoBotoes>
        <MapaAtendimentoTouchableOpacity
          isActive={activeButton === 'Visão Geral'}
          onPress={() => handlerFilterPress('Visão Geral')}
        >
          <MapaAtendimentoTouchTitle isActive={activeButton === 'Visão Geral'}>
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
          onScrollToIndexFailed={() => { }}
        />
      </MapaAtendimentoBotoes>

      <MapaAtendimentoMesa>
        {loading && mesasFiltradas.length === 0 ? (
          <ActivityIndicator
            size="large"
            color={COLORS.COLOR_PIGZ}
            style={{ marginTop: 40 }}
          />
        ) : (
          <FlatList
            key={numColumns}
            numColumns={numColumns}
            data={mesasFiltradas}
            ref={flatListRef}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              paddingTop: 8,
              paddingHorizontal: spacing,
            }}
            columnWrapperStyle={{
              gap: spacing,
              marginBottom: spacing,
            }}
            showsVerticalScrollIndicator={false}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={
              !loading ? (
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                  <View style={{ height: 8 }} />
                  <MapaAtendimentoTouchTitle isActive={false}>
                    Nenhum item encontrado
                  </MapaAtendimentoTouchTitle>
                </View>
              ) : null
            }
          />
        )}
      </MapaAtendimentoMesa>
    </MapaAtendimentoContainer>
  );
}