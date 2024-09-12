import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    height: 100%;
    background-color: '#DADCD5';
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    padding-top: 45px;
    gap: 16px;
`;



export const ContainerDescricao = styled.View`
    height: 50%;
    width: 90%;
    background-color: #DADCD5;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

export const ButtonDeleteTarefa = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #F51E10;
    padding-left: 10px;
    gap: 10px;
    border-radius:8px;
`;