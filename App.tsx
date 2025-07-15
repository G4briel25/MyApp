import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/Home';
import ModalNovoPedido from './src/views/modal-novo-pedido/ModalNovoPedido';
import MapaAtendimento from './src/views/mapa-atendimento/MapaAtendimento';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Mapa Atendimento' component={MapaAtendimento} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Novo Pedido' component={ModalNovoPedido} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}