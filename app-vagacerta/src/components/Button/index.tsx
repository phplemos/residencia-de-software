import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary";
  noSpacing?: boolean;
}

export function Button({
  title,
  variant = "primary",
  noSpacing = false,
  ...others
}: ButtonProps) {
  return (
    <Container {...others} $variant={variant} $noSpacing={noSpacing}>
      <Title $variant={variant}>{title}</Title>
    </Container>
  );
}