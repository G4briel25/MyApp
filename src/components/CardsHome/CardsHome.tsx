import React from 'react';
import { Text, View} from "react-native";
import { Cards, CardTitle } from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CardsHome() {
    return (
        <Cards>
            <View>
                <Icon name="settings" size={32} />
            </View>
            <CardTitle>Mapa de atendimento</CardTitle>
        </Cards>
    );
}