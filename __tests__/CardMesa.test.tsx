import React from "react";
import { render } from "@testing-library/react-native";
import CardMesa from "../src/components/CardMesa/CardMesa";
import { Mesa } from "../src/types";


// Teste para testar a renderização de uma mesa(cores, informações da mesa, etc).

describe('CardMesa', () => {
    it('deve renderizar as informações da mesa corretamente', () => {
        const mesaMock: Mesa = {
            id: 1,
            numero: 1,
            status: "ocupada",
            cliente: "Matheus",
            numeroClientes: 1,
            numeroComandas: 1,
            tempoEmAberto: 10,
            atendente: "Leonercio",
            valorTotal: 34.56,
            cor: "verde",
            ultimoPedido: "2025-01-16T10:00:00Z"
        };

        const { getByText, getByTestId } = render(
            < CardMesa mesa={mesaMock} largura={100} />
        );

        expect(getByText('1')).toBeTruthy();
        expect(getByText('Matheus')).toBeTruthy();
        expect(getByText('10min')).toBeTruthy();
        expect(getByText('R$ 34,56')).toBeTruthy();
        expect(getByText('Leonercio')).toBeTruthy();

        const card = getByTestId('card-container');

        expect(card.props.style).toEqual(
          expect.objectContaining({ backgroundColor: '#B8E5B8' })
        )
    });
});