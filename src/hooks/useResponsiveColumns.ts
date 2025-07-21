import { useWindowDimensions } from 'react-native';

export function useResponsiveColumns(minCardWidth: number, gap: number = 16) {
  const { width } = useWindowDimensions();

  const horizontalPadding = 2 * gap;
  const availableWidth = width - horizontalPadding;

  const numColumns = Math.floor((availableWidth + gap) / (minCardWidth + gap));
  const totalGap = gap * (numColumns - 1);
  const cardWidth = Math.floor((availableWidth - totalGap) / numColumns);

  return { numColumns, cardWidth };
}