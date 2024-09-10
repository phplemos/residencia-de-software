import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #C0C4B8;
    border-radius: 8px;
    padding: 10px;
    overflow: hidden;
    margin-top: 16px;
`;

export const TarefaText = styled.Text`
    color: #272A23;
    font-size: 20px;
    font-weight: 500;
`;

export const TarefaDone = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
    border-color: #272A23;
    justify-content: center;
    align-items: center;
`;

export const TarefaDelete = styled.TouchableOpacity`
width: 28px;
height: 28px;
//border-color: #F51E10;
justify-content: center;
align-items: center;
`;
