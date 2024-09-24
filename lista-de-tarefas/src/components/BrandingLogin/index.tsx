import { ContainerBranding, TextBranding, Container } from "./style";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
export function BrandingLogin() {
  return (
    <Container>
      <ContainerBranding>
        <Feather name="check-circle" size={116} color="#272A23" />
        <Text style={{ fontSize: 20 }}>Seja bem-vindo ao</Text>
        <TextBranding>Tarefas</TextBranding>
      </ContainerBranding>
    </Container>
  );
}
