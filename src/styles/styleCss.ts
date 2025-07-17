import styled from 'styled-components/native';
import { COLORS, coresMap } from '../types/colors';
import { CardMesaContainerProps } from '../types/cardMesaContainerProps';

const HomeContainer = styled.View`
  background-color: #FFF;
`;

const HomeContainerTitle = styled.View`
  width: 100%;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const HomeTitle = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-Light';
  margin-top:2px;
  color: ${COLORS.COLOR_PIGZ};
`;

const BodyContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #FFF;
`;

const BodyTitle = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
`;

const BodySubTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Light';
`;

const CardContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;


// Componente CardsHome
const Cards = styled.TouchableOpacity`
  padding: 16px 16px 20px 16px;
  background-color: #F4F2F2;
  border-radius: 8px;
  height: 156px;
  width: 48%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.Text`
  font-size: 17px;
  color: #212121;
`;


// Componente ModalNovoPedido
const NovoPedidoContainer = styled.View`
  background-color: white;
  padding: 12px 16px 16px 16px;
  border-radius: 16px 16px 0 0;
  min-height: 400px;
  align-items: center;
`;

const DivBar = styled.View`
  border-bottom-width: 3px;
  width: 40px;
  border-radius: 8px;
  border-bottom-color: #BABABA;
  border-bottom-style: solid;
  margin-bottom: 12px;
`;

const NovoPedidoTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Medium';
  margin-bottom: 10px;
`;

const NodoPedidoSubTitle = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Light';
  margin-bottom: 20px;
  color: #666;
`;


// Componente TipoPedido
const TipoPedidoContainer = styled.TouchableOpacity`
  background-color: #F4F2F2;
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
const MapaAtendimentoContainer = styled.View`
  background-color: #F4F2F2;
  flex: 1;
`;

const MapaAtendimentoHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  border-bottom-style: solid;
  background-color: #FFF;
`;

const MapaAtendimentoTitle = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-family: 'Poppins-Medium';
  line-height: 32px;
`;

const MapaAtendimentoPesquisa = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  background-color: #FFF;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  border-bottom-style: solid;
`;

const MapaAtendimentoInput = styled.TextInput`
  width: 100%;
  font-size: 16px;
  font-family: 'Poppins-Light';
`;

const MapaAtendimentoBotoes = styled.View`
  padding: 10px 0 10px 10px;
  flex-direction: row;
  align-items: center;
`;

const MapaAtendimentoTouchableOpacity = styled.TouchableOpacity<{isActive: boolean}>`
  height: 32px;
  border-radius: 16px;
  background-color: ${props => props.isActive ? '#000' : '#FFF'};
  border-width: 1px;
  border-color: ${props => props.isActive ? '#000' : '#DDD'};
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const MapaAtendimentoTouchTitle = styled.Text<{isActive: boolean}>`
  font-size: 16px;
  font-family: 'Poppins-Medium';
  color: ${props => props.isActive ? '#FFF' : '#000'};
  text-align: center;
`;

const MapaAtendimentoMesa = styled.View`
  flex: 1;
`;


// Componente CardMesa
const CardMesaContainer = styled.TouchableOpacity<CardMesaContainerProps>`
  background-color: ${ ({cor}) => coresMap[cor] };
  border-radius: 8px;
  padding: 12px;
  min-height: 140px;
`;

const CardMesaClienteComanda = styled.View`
  flex-direction: row;
`;

const CardMesaNumero = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Medium';
  margin-bottom: 8px;
`;

const CardMesaDetails = styled.View`
  flex: 1;
`;

const CardMesaFrame = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
`;

const CardMesaFrameText = styled.Text`
  font-size: 12px;
  max-width: 80%;
`;

export {
  HomeContainer,
  HomeContainerTitle,
  HomeTitle,
  BodyContainer,
  BodyTitle,
  BodySubTitle,
  CardContainer,
  Cards,
  CardTitle,
  NovoPedidoContainer,
  DivBar,
  NovoPedidoTitle,
  NodoPedidoSubTitle,
  TipoPedidoContainer,
  TipoPedidoContainerLeft,
  TipoPedidoContainerRight,
  TipoPedidoText,
  MapaAtendimentoContainer,
  MapaAtendimentoHeader,
  MapaAtendimentoTitle,
  MapaAtendimentoPesquisa,
  MapaAtendimentoInput,
  MapaAtendimentoBotoes,
  MapaAtendimentoTouchableOpacity,
  MapaAtendimentoTouchTitle,
  MapaAtendimentoMesa,
  CardMesaContainer,
  CardMesaNumero,
  CardMesaDetails,
  CardMesaFrame,
  CardMesaClienteComanda,
  CardMesaFrameText
};