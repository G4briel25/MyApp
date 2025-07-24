import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// --- Mocks para o React Navigation ---
// É uma boa prática mockar o NavigationContainer
// O @react-navigation/native/lib/commonjs/mocks/
// já fornece mocks úteis
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }) => <>{children}</>,
  };
});

// Mock para o createNativeStackNavigator
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => <>{children}</>,
    Screen: ({ children }) => <>{children}</>,
  }),
}));


// --- Mocks para o Redux e Redux-Persist ---
// Mock do Redux Provider para que ele apenas renderize os filhos
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  Provider: ({ children }) => <>{children}</>,
}));

// Mock do Redux-Persist Gate para que ele apenas renderize os filhos
jest.mock('redux-persist/integration/react', () => ({
  ...jest.requireActual('redux-persist/integration/react'),
  PersistGate: ({ children }) => <>{children}</>,
}));

// Mock do store e persistor, se necessário, embora
// mockar Provider e PersistGate já seja suficiente para este teste.
// Caso contrário, você pode mockar o módulo do store:
jest.mock('../src/redux/store', () => ({
  store: {}, // Um objeto vazio é suficiente para o mock
  persistor: {}, // Um objeto vazio é suficiente para o mock
}));


describe('App', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<App />);
    // Usamos um snapshot para garantir que a estrutura base do App
    // com seus componentes mockados esteja correta.
    expect(toJSON()).toMatchSnapshot();
  });
});