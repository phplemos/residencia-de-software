import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
`;

export const ButtonVoltar = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const ButtonVoltarText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #272a23;
`;

export const ButtonNomeTarefa = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const ButtonNomeTarefaText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #272a23;
`;
