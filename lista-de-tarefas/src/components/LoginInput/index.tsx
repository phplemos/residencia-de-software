import { Text } from "react-native";
import {
  EmailInput,
  Container,
  ContainerInput,
} from "./style";
import { BrandingLogin } from "../BrandingLogin";

export function LoginInput() {
  return (
    <Container>
      <ContainerInput>
        <Text>Email:</Text>
        <EmailInput placeholder="exemplo@email.com" />
        <Text>Senha:</Text>
        <EmailInput placeholder="**************" />
      </ContainerInput>
    </Container>
  );
}
