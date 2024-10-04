import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: #dadcd5;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-top: 45px;
  gap: 16px;
`;
export const ContainerInput = styled.View`
  width: 90%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #272a23;
  border-radius: 8px;
  padding-left: 10px;
  gap: 15px;
`;
export const TextAddTarefa = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #dadcd5;
`;
