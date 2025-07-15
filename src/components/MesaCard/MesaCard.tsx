import React from 'react';
import { Text, View} from "react-native";
import { MesaCards, MesaTitle } from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MesaCard() {
    return (
        <MesaCards>
            <View>
                <Icon name="settings" size={32} />
            </View>
            <MesaTitle>Mapa de atendimento</MesaTitle>
        </MesaCards>
    );
}