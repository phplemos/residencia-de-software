import styled from "styled-components/native";

export const Container = styled.View`
    width: 70%;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ContainerInput = styled.View`
    width: 100%;
`;


export const EmailInput = styled.TextInput`
    height: 41px;
    border-radius: 15px;
    background-color: #DADCD5;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
    height: 41px;
    width: 70%;
    background-color: #1F771D;
    align-items:center;
    justify-content: center;
    border-radius: 15px;
`;

export const TextLoginButton = styled.Text`
    color: #fff;
`;