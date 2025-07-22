import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useResponsiveColumns } from '../../hooks/useResponsiveColumns';
import { useWindowDimensions } from 'react-native';

export default function SkeletonMapaAtendimentoBotoesFiltros() {
  const spacing = 16;
  const { width, height } = useWindowDimensions();

  // Define tamanho fixo dos cards (altura e largura mínima desejada)
  const CARD_HEIGHT = 144;

  // Calcula o número de colunas com base na largura da tela
  const { numColumns, cardWidth } = useResponsiveColumns(115, spacing);

  // Altura ocupada por header, botões, etc. (ajuste conforme o layout)
  const alturaCabecalhoEstimado = 250;

  // Altura disponível para os cards
  const alturaDisponivel = height - alturaCabecalhoEstimado;

  // Número de linhas de cards necessárias para preencher a tela
  const numLinhas = Math.ceil(alturaDisponivel / (CARD_HEIGHT + spacing));

  // Total de cards a exibir
  const totalCards = numColumns * numLinhas;

  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        marginTop={10}
        paddingHorizontal={spacing}
        flexDirection="row"
        flexWrap="wrap"
        columnGap={spacing}
        rowGap={spacing}
      >
        {[...Array(totalCards)].map((_, index) => (
          <SkeletonPlaceholder.Item
            key={index}
            width={cardWidth}
            height={CARD_HEIGHT}
            borderRadius={8}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}