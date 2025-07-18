import { useWindowDimensions } from "react-native";

export function useResponsiveColumns(idealCardWidth: number, spacing: number) {
    const { width } = useWindowDimensions();

    const numColumns = Math.max(
        1,
        Math.floor((width + spacing) / (idealCardWidth + spacing))
    );

    const totalSpacing = spacing * (numColumns + 1);
    const cardWidth = (width - totalSpacing) / numColumns;

    return (
        {
            numColumns,
            cardWidth
        }
    );
}