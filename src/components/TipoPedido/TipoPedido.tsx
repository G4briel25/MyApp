import React from "react";
import { 
  TipoPedidoContainer, 
  TipoPedidoContainerLeft, 
  TipoPedidoContainerRight,
  TipoPedidoText 
} from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TipoPedido() {
    return (
        <TipoPedidoContainer>
            <TipoPedidoContainerLeft>
                <Icon name="table-restaurant" size={24} color="#212121" />
                <TipoPedidoText>Mesa/Comanda</TipoPedidoText>
            </TipoPedidoContainerLeft>

            <TipoPedidoContainerRight>
                <Icon name="chevron-right" size={24} color="#212121" />
            </TipoPedidoContainerRight>
        </TipoPedidoContainer>
    );    
}