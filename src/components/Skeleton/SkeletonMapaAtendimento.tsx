import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useResponsiveColumns } from '../../hooks/useResponsiveColumns';
import { useWindowDimensions } from 'react-native';

export default function SkeletonMapaAtendimento() {

    const spacing = 16;
    const { width } = useWindowDimensions();

    // Cards
    const { numColumns, cardWidth } = useResponsiveColumns(115, spacing);
    const totalCards = numColumns * 3;

    // Botões responsivos
    const minButtonWidth = 100;
    const maxButtons = 5;
    const availableWidth = width - spacing * 2;
    const estimatedButtons = Math.floor((availableWidth + spacing) / (minButtonWidth + spacing));
    const numButtons = Math.min(maxButtons, estimatedButtons);

    const totalGap = spacing * (numButtons - 1);
    const buttonWidth = Math.floor((availableWidth - totalGap) / numButtons);

    return (
        <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item paddingHorizontal={spacing} marginTop={8}>
                    <SkeletonPlaceholder.Item width="100%" height={55} />
                    <SkeletonPlaceholder.Item marginTop={6} width="100%" height={55} />

                    {/* Botões responsivos em linha única */}
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        columnGap={spacing}
                        marginTop={20}
                    >
                        {[...Array(numButtons)].map((_, index) => (
                            <SkeletonPlaceholder.Item
                                key={index}
                                width={buttonWidth}
                                height={40}
                                borderRadius={50}
                            />
                        ))}
                    </SkeletonPlaceholder.Item>

                    {/* Cards */}
                    <SkeletonPlaceholder.Item
                        marginTop={20}
                        flexDirection="row"
                        flexWrap="wrap"
                        columnGap={spacing}
                        rowGap={spacing}
                    >
                        {[...Array(totalCards)].map((_, index) => (
                            <SkeletonPlaceholder.Item
                                key={index}
                                width={cardWidth}
                                height={144}
                                borderRadius={8}
                            />
                        ))}
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    );
}