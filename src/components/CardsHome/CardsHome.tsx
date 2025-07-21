import React from 'react';
import { View} from "react-native";
import { Cards, CardTitle } from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardsHomeProps } from '../../types/cardsHomeProps';

export default function CardsHome({ 
    iconName,
    title,
    iconSize = 32,
    onPress,
    largura
}: CardsHomeProps & { largura: number }) {
    return (
        <Cards onPress={onPress} style={{ width: largura }}>
            <View>
                <Icon name={iconName} size={iconSize} />
            </View>
            <CardTitle>{title}</CardTitle>
        </Cards>
    );
}