import React from 'react';
import { Text, View} from "react-native";
import { Cards, CardTitle } from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardsHomeProps } from '../../types/cardsHomeProps';

export default function CardsHome({ 
    iconName,
    title,
    iconSize = 32,
    onPress
}: CardsHomeProps) {
    return (
        <Cards onPress={onPress}>
            <View>
                <Icon name={iconName} size={iconSize} />
            </View>
            <CardTitle>{title}</CardTitle>
        </Cards>
    );
}