import React from 'react';
import { HomeContainer, HomeTitle, WelcomeText } from '../../styles/styleCss';

export default function HomeScreen() {
    return (
        <HomeContainer>
            <HomeTitle>Bem-vindo ao App</HomeTitle>
            <WelcomeText>
                Esta é a tela inicial do seu aplicativo React Native
            </WelcomeText>
        </HomeContainer>
    );
}