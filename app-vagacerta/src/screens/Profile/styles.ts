import { styled } from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=>theme.COLORS.GREEN};
`;
export const HeaderButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;
export const ButtonIcon = styled.View``;
export const ButtonText = styled.Text`
  font-size: ${({theme})=>theme.FONT_SIZE.SM}px;
  font-weight: 700;
  text-align: center;
  color: ${({theme})=>theme.COLORS.BLUE};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({theme})=>theme.COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  width: 100%;
  gap: 16px;
`;



