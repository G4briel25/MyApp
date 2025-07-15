import styled from 'styled-components/native';

const HomeContainer = styled.View`
  display: flex;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.Text`
  font-size: 28px;
  height: 56px;
  width: 100%;
  text-align: center;
  font-family: 'Poppins-Light';
  color: #EF5E1A;
  border-bottom-width: 1px;
  border-bottom-color: #DDD;
  border-bottom-style: solid;
`;

export {
  HomeContainer,
  HomeTitle,
};