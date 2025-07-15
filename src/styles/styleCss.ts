import styled from 'styled-components/native';

const HomeContainer = styled.View`
  display: flex;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.Text`
  font-size: 28px;
  height: 56px;
  width: 100%;
  text-align: center;
  font-family: 'Poppins-Light';
  color: #EF5E1A;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  border-bottom-style: solid;
`;

const BodyContainer = styled.View`
  width: 100%;
  padding: 16px;
`;

const BodyTitle = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
`;

const BodySubTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Lighy';
`;

const MesaContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;


// Componente MesaCards
const MesaCards = styled.View`
  padding: 16px;
  background-color: #dfdfdfff;
  border-radius: 8px;
  height: 156px;
  width: 48%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const MesaTitle = styled.Text`
  font-size: 17px;
  color: #212121;
`;


// Componente ModalNovoPedido
const NovoPedidoContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 12px 16px 16px 16px;
  border-radius: 16px 16px 0 0;
`;

const DivBar = styled.View`
  border-bottom-width: 2px;
  width: 32px;
  border-radius: 8px;
  border-bottom-color: #BABABA;
  border-bottom-style: solid;
  margin-bottom: 12px;
`;

const NovoPedidoTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

const NodoPedidoSubTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Light';
  margin-bottom: 16px;
`;


// Componente TipoPedido
const TipoPedidoContainer = styled.View`
  background-color: #dfdfdfff;
  padding: 16px;
  height: 66px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TipoPedidoContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const TipoPedidoContainerRight = styled.View`
  justify-content: center;
  align-items: center;
`;

const TipoPedidoText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium';
  color: #212121;
`;


// Componente MapaAtendimento
const MapaAtendimentoHeader = styled.View`
  
`;

export {
  HomeContainer,
  HomeTitle,
  BodyContainer,
  BodyTitle,
  BodySubTitle,
  MesaContainer,
  MesaCards,
  MesaTitle,
  NovoPedidoContainer,
  DivBar,
  NovoPedidoTitle,
  NodoPedidoSubTitle,
  TipoPedidoContainer,
  TipoPedidoContainerLeft,
  TipoPedidoContainerRight,
  TipoPedidoText,
};