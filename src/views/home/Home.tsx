import React, { useState } from 'react';
import {
  HomeContainer,
  HomeTitle,
  BodyTitle,
  BodySubTitle,
  CardContainer,
  HomeContainerTitle,
  BodyContainerHeader
} from '../../styles/styleCss';
import CardsHome from '../../components/CardsHome/CardsHome';
import { useNavigation } from '@react-navigation/native';
import ModalNovoPedido from '../modal-novo-pedido/ModalNovoPedido';
import PigzLogo from '../../components/PigzLogo/PigzLogo';
import { FlatList } from 'react-native';
import { useResponsiveColumns } from '../../hooks/useResponsiveColumns';

export default function HomeScreen() {

  const navigation = useNavigation<any>();
  const spacing = 16; // espaçamento entre os cards
  const { numColumns, cardWidth } = useResponsiveColumns(160, spacing);

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
    }
  ]

  return (
    <HomeContainer>
      <HomeContainerTitle>
        <PigzLogo />
        <HomeTitle>Comanda</HomeTitle>
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
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            marginBottom: spacing,
            gap: spacing
          }}
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