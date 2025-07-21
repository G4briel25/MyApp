import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

import HomeScreen from './src/views/home/Home';
import MapaAtendimento from './src/views/mapa-atendimento/MapaAtendimento';
import SkeletonMapaAtendimento from './src/components/Skeleton/SkeletonMapaAtendimento';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='MapaAtendimento' component={MapaAtendimento} options={{ headerShown: false }} />
            <Stack.Screen name='SkeletonMapaAtendimento' component={SkeletonMapaAtendimento} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}