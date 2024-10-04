import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #dadcd5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerProfile = styled.View`
  width: 100%;
  height: 150px;
  background-color: #272a23;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ContainerProfileInfo = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`;

export const ContainerTextInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmailInfo = styled.Text`
  color: #dadcd5;
  font-size: 14px;
  font-weight: bold;
`;

export const NameInfo = styled.Text`
  color: #dadcd5;
  font-size: 10px;
`;

export const ProfilePic = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 10px;
`;
