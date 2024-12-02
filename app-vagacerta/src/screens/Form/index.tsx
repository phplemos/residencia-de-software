import { Image } from "react-native";
import {
  Wrapper,
  Container,
  Form,
  TextContainer,
  TextBlack,
  TextLink,
  TextLinkContainer,
} from "./styles";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function FormScreen({ navigation }) {
  const { cadastro } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleCadastro() {
    if (email === "" || password === "" || name === "") {
      return alert("Preencha todos os campos.");
    }
    const response = await cadastro(email, password, name);
    if (response === "200") {
      navigation.navigate("Auth");
    } else {
      return alert(response);
    }
  }
  return (
    <Wrapper>
      <Image source={BGTop} />

      <Container>
        <Form>
          <Logo />
          <Input
            label="Nome"
            placeholder="digite seu nome"
            onChangeText={setName}
          />
          <Input
            label="E-mail"
            placeholder="digite seu e-mail"
            onChangeText={setEmail}
          />
          <Input
            label="Senha"
            placeholder="digite sua senha"
            onChangeText={setPassword}
          />
          <Button
            title="Entrar"
            noSpacing={true}
            variant="primary"
            onPress={handleCadastro}
          />
          <TextContainer>
            <TextBlack>Já tem uma conta?</TextBlack>
            <TextLinkContainer onPress={() => navigation.navigate("Login")}>
              <TextLink>Faça seu login.</TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>
    </Wrapper>
  );
}
