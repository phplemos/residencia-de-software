import { ContainerBranding, TextBranding, Container } from "./style";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";

type BrandingProps = {
  textoBranding: string;
}

export function Branding(props: BrandingProps) {
  return (
    <Container>
      <ContainerBranding>
        <Feather name="check-circle" size={116} color="#272A23" />
        <Text style={{ fontSize: 20 }}>{props.textoBranding}</Text>
        <TextBranding>Tarefas</TextBranding>
      </ContainerBranding>
    </Container>
  );
}
