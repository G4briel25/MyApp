import React from "react";
import { 
  TipoPedidoContainer, 
  TipoPedidoContainerLeft, 
  TipoPedidoContainerRight,
  TipoPedidoText 
} from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TipoPedidoProps } from "../../types/tipoPedidoProps";

export default function TipoPedido({
    iconName,
    SvgIcon,
    title,
    colorName = "#212121"
}: TipoPedidoProps) {
    return (
        <TipoPedidoContainer>
            <TipoPedidoContainerLeft>
                {SvgIcon ? (
                    <SvgIcon/>
                ) : (
                    <Icon name={iconName!} size={24} color={colorName} />
                )}
                <TipoPedidoText>{title}</TipoPedidoText>
            </TipoPedidoContainerLeft>

            <TipoPedidoContainerRight>
                <Icon name="chevron-right" size={24} color={colorName} />
            </TipoPedidoContainerRight>
        </TipoPedidoContainer>
    );
}