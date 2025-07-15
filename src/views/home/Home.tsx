import React from 'react';
import { HomeContainer, HomeTitle, BodyContainer, BodyTitle, BodySubTitle, CardContainer, HomeContainerTitle } from '../../styles/styleCss';
import CardsHome from '../../components/CardsHome/CardsHome';

export default function HomeScreen() {
    return (
        <HomeContainer>
            <HomeContainerTitle>
              <HomeTitle>Pigz Comanda</HomeTitle>
            </HomeContainerTitle>

            <BodyContainer>
              <BodyTitle>Caixa 10</BodyTitle>
              <BodySubTitle>Zigpi Restaurante</BodySubTitle>

              <CardContainer>
                <CardsHome></CardsHome>
                <CardsHome></CardsHome>
                <CardsHome></CardsHome>
                <CardsHome></CardsHome>
              </CardContainer>

            </BodyContainer>
        </HomeContainer>
    );
}