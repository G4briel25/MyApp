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
import { useWindowDimensions, FlatList, View } from 'react-native';

export default function HomeScreen() {

  const navigation = useNavigation<any>();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const spacing = 16; // espaçamento entre os cards
  const numColumns = isLandscape ? 3 : 2;
  const totalSpacing = spacing * (numColumns + 1);
  const cardWidth = (width - totalSpacing) / numColumns;

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
      key: 'config1',
      iconName: 'settings2',
      title: 'Configurações'
    },
    {
      key: 'config2',
      iconName: 'settings3',
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
          numColumns={isLandscape ? 3 : 2}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            marginBottom: spacing,
            gap: 16
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