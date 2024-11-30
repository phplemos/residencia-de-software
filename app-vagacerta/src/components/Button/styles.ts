import styled from "styled-components/native";

type ButtonProps = {
  $variant?: "primary" | "secondary";
  $noSpacing?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ $noSpacing }) => ($noSpacing ? "max-content" : "100%")};
  height: ${({ $noSpacing }) => ($noSpacing ? "46px" : "max-content")};
  padding: ${({ $noSpacing }) => ($noSpacing ? "0px 16px" : "16px")};
  border-radius: 8px;
  gap: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.COLORS.BLUE : "transparent"};
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${({ $variant, theme }) => ($variant === "primary" ? theme.COLORS.WHITE : theme.COLORS.BLUE)};
`;