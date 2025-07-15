import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

// Novos componentes para a Home
const HomeContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HomeTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;

const WelcomeText = styled.Text`
  font-size: 16px;
  color: #7f8c8d;
  text-align: center;
  line-height: 24px;
`;

export {
  Container,
  Title,
  Button,
  ButtonText,
  HomeContainer,
  HomeTitle,
  WelcomeText
};