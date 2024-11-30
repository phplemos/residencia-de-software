import { styled } from 'styled-components/native';

export const Container = styled.View`
  align-items: left;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${({theme})=>theme.COLORS.GREEN};
`;

export const Field = styled.TextInput`
    border: 1px solid ${({theme})=>theme.COLORS.GRAY_02};
    border-radius: 8px;
    padding: 16px;
    background-color: ${({theme})=>theme.COLORS.GRAY_01};
    width: 100%;
`;