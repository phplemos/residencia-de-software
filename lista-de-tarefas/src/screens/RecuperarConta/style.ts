import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #c0c4b8;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerTop = styled.View`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ContainerContent = styled.View`
  width: 90%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ButtonRecover = styled.TouchableOpacity`
  height: 41px;
  width: 70%;
  background-color: #1f771d;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-top: 25px;
`;
export const TextButton = styled.Text`
  color: #fff;
`;
