import { View, Text } from "react-native";
import { EmailInput, Container, LoginButton,ContainerInput,TextLoginButton } from "./style";

export function LoginInput() {
  return (
    <Container>
      <ContainerInput>
        <Text>Email:</Text>
        <EmailInput placeholder="exemplo@email.com" />
        <Text>Senha:</Text>
        <EmailInput placeholder="**************" />
      </ContainerInput>
      <Text>Esqueceu a senha?</Text>
      <LoginButton>
        <TextLoginButton>Acessar</TextLoginButton>
      </LoginButton>
    </Container>
  );
}
