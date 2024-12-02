import { Image, ActivityIndicator } from "react-native";
import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [verifyLogin, setVerifyLogin] = useState(true);
  const { login, getUserFromApi } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      const isLogged = await AsyncStorage.getItem("isLogged");
      if (isLogged === "true") {
        const userId = await AsyncStorage.getItem("userId");
        getUserFromApi(userId);
        navigation.navigate("Auth");
      } else {
        setVerifyLogin(false);
      }
    };
    checkLogin();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Preencha todos os campos.");
    }
    const response = await login(email, password);
    if (response === "200") {
      navigation.navigate("Auth");
    } else {
      return alert(response);
    }
  };

  return (
    <Wrapper>
      <Image source={BGTop} />
      <Container>
        {verifyLogin ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Form>
            <Logo />
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
              onPress={handleLogin}
            />
            <TextContainer>
              <TextBlack>Não tem uma conta? </TextBlack>
              <TextLinkContainer onPress={() => navigation.navigate("Form")}>
                <TextLink>Cadastre-se</TextLink>
              </TextLinkContainer>
            </TextContainer>
          </Form>
        )}
      </Container>
    </Wrapper>
  );
}
