import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #c0c4b8;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerForm = styled.View`
  width: 85%;
  flex-direction: column;
  align-items: center;
`;

export const AlertText = styled.Text`
  color: red;
  margin-top: 10px;
`;

export const ContainerBranding = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerCheckbox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextCheckbox = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  color: #000;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  margin-top: 10px;
  height: 41px;
  width: 70%;
  background-color: #1f771d;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const TextSignUpButton = styled.Text`

  color: #fff;
` ;



export const ContainerTopBar = styled.View`
  width: 100%;
  padding-left: 10px;
`;
