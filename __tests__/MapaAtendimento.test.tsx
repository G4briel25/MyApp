import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MapaAtendimento from '../src/views/mapa-atendimento/MapaAtendimento';


// Teste para testar as funções de filtros e pesquisa

const mockSetSearchText = jest.fn();
const mockSetActiveButton = jest.fn();
const mockSetLoadingFiltro = jest.fn();
const mockLoadMoreMesas = jest.fn();

// Mock do React Navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

// Mock do hook personalizado
jest.mock('../src/hooks/useMapaAtendimento', () => ({
  useMapaAtendimento: () => ({
    isReady: true,
    mesasFiltradas: [],
    loading: false,
    loadingMore: false,
    activeButton: 'Visão Geral',
    searchText: '',
    setSearchText: mockSetSearchText,
    setActiveButton: mockSetActiveButton,
    loadMoreMesas: mockLoadMoreMesas,
    setLoadingFiltro: mockSetLoadingFiltro,
    loadingFiltro: false,
    hasMore: false,
  }),
}));

describe('MapaAtendimento', () => {
  it('deve chamar setSearchText ao digitar no campo de pesquisa', () => {
    const { getByPlaceholderText } = render(<MapaAtendimento />);

    const input = getByPlaceholderText('Cliente, mesa, comanda, atendente');

    fireEvent.changeText(input, 'mesa 10');

    expect(mockSetSearchText).toHaveBeenCalledWith('mesa 10');
  });
});

describe('MapaAtendimento', () => {
    it('deve chamar o filtro ao pressionar botão "Ociosas"', async () => {
        const { getByText } = render(<MapaAtendimento />);
        const filtronButton = getByText('Ociosas');

        fireEvent.press(filtronButton);

        expect(mockSetLoadingFiltro).toHaveBeenCalledWith(true);
        expect(mockSetActiveButton).toHaveBeenCalledWith('Ociosas');
        expect(mockLoadMoreMesas).toHaveBeenCalled();
    });
});