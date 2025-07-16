import { Text, View } from "react-native";
import { CardMesaContainer, CardMesaFrame, CardMesaNumero } from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardMesaProps } from "../../types";

export default function CardMesa({ mesa }: CardMesaProps) {
    return (
        <CardMesaContainer>
            <View>
                <CardMesaNumero>{mesa.id}</CardMesaNumero>
                <View>
                    <CardMesaFrame>
                        <Icon name="account-circle" size={12} />
                        <Text>{mesa.nome}</Text>
                    </CardMesaFrame>
                    <CardMesaFrame>
                        <Icon name="access-time-filled" size={12} />
                        <Text>{mesa.tempo}</Text>
                    </CardMesaFrame>
                    <CardMesaFrame>
                        <Icon name="monetization-on" size={12} />
                        <Text>{mesa.valor}</Text>
                    </CardMesaFrame>
                    <CardMesaFrame>
                        <Icon name="room-service" size={12} />
                        <Text>{mesa.servico}</Text>
                    </CardMesaFrame>
                </View>
            </View>
        </CardMesaContainer>
    );
}