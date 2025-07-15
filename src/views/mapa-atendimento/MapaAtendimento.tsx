import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    MapaAtendimentoBotoes,
    MapaAtendimentoContainer,
    MapaAtendimentoHeader,
    MapaAtendimentoInput,
    MapaAtendimentoPesquisa,
    MapaAtendimentoTitle,
    MapaAtendimentoTouchableOpacity,
    MapaAtendimentoTouchTitle
} from "../../styles/styleCss";

export default function MapaAtendimento() {

    const [activeButton, setActiveButton] = useState('Visão Geral');

    const otherButtons = [
        'Em antendimento',
        'Ociosas',
        'Disponíveis',
        'Sem pedidos',
        'Meus atendimentos'
    ];

    const renderButton = ({ item }) => (
        <MapaAtendimentoTouchableOpacity
            isActive={activeButton === item}
            onPress={() => setActiveButton(item)}
        >
            <MapaAtendimentoTouchTitle isActive={activeButton === item}>
                {item}
            </MapaAtendimentoTouchTitle>
        </MapaAtendimentoTouchableOpacity>
    );

    return (
        <MapaAtendimentoContainer>
            <MapaAtendimentoHeader>
                <Icon name="arrow-back" size={32} color="#FA641E" />
                <MapaAtendimentoTitle>Mapa de atendimento</MapaAtendimentoTitle>
            </MapaAtendimentoHeader>

            <MapaAtendimentoPesquisa>
                <Icon name="search" size={32} color="#FA641E" />
                <MapaAtendimentoInput placeholder="Cliente, mesa, comanda, atendente"></MapaAtendimentoInput>
            </MapaAtendimentoPesquisa>

            <MapaAtendimentoBotoes>
                <MapaAtendimentoTouchableOpacity
                    isActive={activeButton === 'Visão Geral'}
                    onPress={() => setActiveButton('Visão Geral')}
                >
                    <MapaAtendimentoTouchTitle
                        isActive={activeButton === 'Visão Geral'}
                    >
                        Visão Geral
                    </MapaAtendimentoTouchTitle>
                </MapaAtendimentoTouchableOpacity>

                <FlatList
                    data={otherButtons}
                    renderItem={renderButton}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{flex: 1}}
                />

            </MapaAtendimentoBotoes>
        </MapaAtendimentoContainer>
    );
}