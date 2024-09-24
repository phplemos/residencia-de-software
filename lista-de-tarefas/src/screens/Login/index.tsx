import { View, Text } from "react-native";
import { Container, ButtonText, LoginButton, TextLoginButton } from "./styles";

import { BrandingLogin } from "../../components/BrandingLogin";
import { LoginInput } from "../../components/LoginInput";

export function Login() {
  return (
    <Container>
      <BrandingLogin />
      <LoginInput />
      <ButtonText>
        <Text>Esqueceu a senha?</Text>
      </ButtonText>
      <LoginButton>
        <TextLoginButton>Acessar</TextLoginButton>
      </LoginButton>
      <View style={{alignItems:"center"}}>
        <Text>Não tem cadastro?</Text>
        <ButtonText>
          <Text style={{ color: "#142E52" }}>Faça seu cadastro aqui!</Text>
        </ButtonText>
      </View>
    </Container>
  );
}
