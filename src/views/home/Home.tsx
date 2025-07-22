import React, { useState } from 'react';
import {
  HomeContainer,
  BodyTitle,
  BodySubTitle,
  CardContainer,
  HomeContainerTitle,
  BodyContainerHeader
} from '../../styles/styleCss';
import CardsHome from '../../components/CardsHome/CardsHome';
import { useNavigation } from '@react-navigation/native';
import ModalNovoPedido from '../modal-novo-pedido/ModalNovoPedido';
import { FlatList } from 'react-native';
import { useResponsiveColumns } from '../../hooks/useResponsiveColumns';
import PigzLogo from '../../components/PigzLogo/PigzLogo';

export default function HomeScreen() {

  const navigation = useNavigation<any>();
  const spacing = 16; // espaçamento entre os cards
  const { numColumns, cardWidth } = useResponsiveColumns(156, spacing);

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const cardData = [
    {
      key: 'novo',
      iconName: 'add',
      title: 'Novo Pedido',
      onPress: openModal,
    },
    {
      key: 'mapa',
      iconName: 'grid-view',
      title: 'Mapa de atendimento',
      onPress: () => navigation.navigate('MapaAtendimento'),
    },
    {
      key: 'config',
      iconName: 'settings',
      title: 'Configurações'
    },
    {
      key: 'skeleton',
      iconName: 'dawdawd',
      title: 'Skeleton',
      onPress: () => navigation.navigate('SkeletonMapaAtendimento'),
    }
  ]

  return (
    <HomeContainer>
      <HomeContainerTitle>
        <PigzLogo />
      </HomeContainerTitle>

        <FlatList
          key={`flatlist-${numColumns}`}
          data={cardData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            paddingHorizontal: 16
          }}
          ListHeaderComponent={
            <BodyContainerHeader>
              <BodyTitle>Joaquim</BodyTitle>
              <BodySubTitle>Zigpi Restaurante</BodySubTitle>
            </BodyContainerHeader>
          }
          numColumns={numColumns}
          {...(numColumns > 1 && {
              columnWrapperStyle: {
              justifyContent: 'flex-start',
              marginBottom: spacing,
              gap: spacing
            }
          })}
          {...(numColumns === 1 && {
            contentContainerStyle: {
              paddingHorizontal: 16,
              gap: spacing
            }
          })}
          renderItem={({ item }) => (
            <CardContainer>
              <CardsHome
                largura={cardWidth}
                iconName={item.iconName}
                title={item.title}
                iconSize={32}
                onPress={item.onPress}
              />
            </CardContainer>
          )}
        />
      

      <ModalNovoPedido
        isVisible={isModalVisible}
        onClose={closeModal}
      />
      
    </HomeContainer>
  );
}