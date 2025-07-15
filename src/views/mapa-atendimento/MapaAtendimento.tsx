import React, { useState } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    MapaAtendimentoBotoes,
    MapaAtendimentoContainer,
    MapaAtendimentoHeader,
    MapaAtendimentoInput,
    MapaAtendimentoMesa,
    MapaAtendimentoPesquisa,
    MapaAtendimentoTitle,
    MapaAtendimentoTouchableOpacity,
    MapaAtendimentoTouchTitle
} from "../../styles/styleCss";
import CardMesa from '../../components/CardMesa/CardMesa';

const mesas = [
    { id: 1, nome: "João", tempo: "10min", valor: "R$ 75,00", servico: "Teste" },
    { id: 2, nome: "Maria", tempo: "15min", valor: "R$ 120,00", servico: "Almoço" },
    { id: 3, nome: "Pedro", tempo: "5min", valor: "R$ 45,00", servico: "Lanche" },
    { id: 4, nome: "Ana", tempo: "20min", valor: "R$ 200,00", servico: "Jantar" },
    { id: 5, nome: "Carlos", tempo: "8min", valor: "R$ 85,00", servico: "Café" },
    { id: 6, nome: "Lucia", tempo: "12min", valor: "R$ 95,00", servico: "Bebida" },
];

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

    const renderCard = ({ item }) => (
        <CardMesa
            mesa={item}
        />
    );

    return (
        <MapaAtendimentoContainer>
            <MapaAtendimentoHeader>
                <TouchableOpacity onPress={() => console.log('Voltar pressionado')}>
                    <Icon name="arrow-back" size={32} color="#FA641E" />
                </TouchableOpacity>
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
                    style={{ flex: 1 }}
                />

            </MapaAtendimentoBotoes>

            <MapaAtendimentoMesa>
                <FlatList
                    data={mesas}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={{
                        gap: 8,
                    }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                />
            </MapaAtendimentoMesa>
        </MapaAtendimentoContainer>
    );
}