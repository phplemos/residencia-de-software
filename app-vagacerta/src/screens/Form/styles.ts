import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({theme})=>theme.COLORS.WHITE};
`;

export const Form = styled.View`
  flex: 1;
  gap: 16px;
  width: 100%;
  align-items: center;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  width: max-content;
`;

export const TextBlack = styled.Text`
  font-size: ${({theme})=>theme.FONT_SIZE.SM}px;
  font-weight: 700;
  text-align: center;
  color: ${({theme})=>theme.COLORS.BLACK};
`;

export const TextLinkContainer = styled.TouchableOpacity`
  width: auto;
`;

export const TextLink = styled.Text`
  font-size: ${({theme})=>theme.FONT_SIZE.SM}px;
  font-weight: 700;
  text-align: center;
  color: ${({theme})=>theme.COLORS.GRAY_03};
`;