import { styled } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.COLORS.WHITE};
  border: 1px solid ${({theme})=>theme.COLORS.GRAY_02};
  align-items: left;
  gap: 4px;
  width: 100%;
  height: 100px;
  border-radius: 16px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
  flex-direction: column;
  max-width: 80%;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${({theme})=>theme.COLORS.BLUE};
`;

export const Data = styled.Text`
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  text-align: left;
  color: ${({theme})=>theme.COLORS.BLACK};
`;

export const Company = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${({theme})=>theme.COLORS.BLACK};
`;

export const OpenButton = styled.View`
    border-radius: 0 16px 16px 0;
    padding: 0 16px;
    background-color: ${({theme})=>theme.COLORS.GRAY_01};
    justify-content: center;
    height: 100%;
`;