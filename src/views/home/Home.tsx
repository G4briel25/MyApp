import React from 'react';
import { HomeContainer, HomeTitle, BodyContainer, BodyTitle, BodySubTitle, MesaContainer } from '../../styles/styleCss';
import MesaCard from '../../components/MesaCard/MesaCard';

export default function HomeScreen() {
    return (
        <HomeContainer>
            <HomeTitle>Pigz Comanda</HomeTitle>

            <BodyContainer>
              <BodyTitle>Caixa 10</BodyTitle>
              <BodySubTitle>Zigpi Restaurante</BodySubTitle>

              <MesaContainer>
                <MesaCard></MesaCard>
                <MesaCard></MesaCard>
                <MesaCard></MesaCard>
                <MesaCard></MesaCard>
              </MesaContainer>

            </BodyContainer>
        </HomeContainer>
    );
}