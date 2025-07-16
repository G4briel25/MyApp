import React, { useState } from 'react';
import { HomeContainer, HomeTitle, BodyContainer, BodyTitle, BodySubTitle, CardContainer, HomeContainerTitle } from '../../styles/styleCss';
import CardsHome from '../../components/CardsHome/CardsHome';
import { useNavigation } from '@react-navigation/native';
import ModalNovoPedido from '../modal-novo-pedido/ModalNovoPedido';
import PigzLogo from '../../components/PigzLogo/PigzLogo';

export default function HomeScreen() {

  const navigation = useNavigation<any>();

  const [isModalVisible, setModalVisible] = useState(false);
  
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
      <HomeContainer>
          <HomeContainerTitle>
            <PigzLogo/>
            <HomeTitle>Comanda</HomeTitle>
          </HomeContainerTitle>

          <BodyContainer>
            <BodyTitle>Caixa 10</BodyTitle>
            <BodySubTitle>Zigpi Restaurante</BodySubTitle>

            <CardContainer>
              <CardsHome 
                  iconName="add" 
                  title="Novo Pedido"
                  iconSize={32}
                  onPress={openModal}
              />
              <CardsHome 
                  iconName="grid-view" 
                  title="Mapa de atendimento"
                  iconSize={32}
                  onPress={() => navigation.navigate('MapaAtendimento')}
              />
              <CardsHome 
                  iconName="settings" 
                  title="Configurações"
                  iconSize={32}
              />
            </CardContainer>
          </BodyContainer>

          <ModalNovoPedido
            isVisible={isModalVisible}
            onClose={closeModal}
          />

      </HomeContainer>
  );
}