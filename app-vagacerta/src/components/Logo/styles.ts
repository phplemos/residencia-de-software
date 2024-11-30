import { styled } from 'styled-components/native';

export const TextLogo = styled.Text`
  font-size: ${({theme})=>theme.FONT_SIZE.XL}px;
  font-weight: 700;
  text-align: center;
  color: ${({theme})=>theme.COLORS.GREEN};
`;