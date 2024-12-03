import React, { useContext, useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator, Alert } from "react-native";
import api from "../../services/api";

import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
  ContainerText,
} from "../Profile/styles";

import Logo from "../../components/Logo";
import theme from "../../theme";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { AxiosError } from "axios";
import { Text } from "react-native";

export default function Profile({ navigation }) {
  const { logout, usuario } = useContext(AuthContext);
  const [name, setName] = useState(usuario.nome as string);
  const [email, setEmail] = useState(usuario.email as string);
  const [password, setPassword] = useState(usuario.senha as string);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(usuario.nome as string);
    setEmail(usuario.email as string);
    setPassword(usuario.senha as string);
  }, [usuario]);

  const handleSave = async () => {
    try {
      setLoading(true);
      await api.put(
        `/usuarios/${usuario.id}`,
        {
          nome: name,
          email: email,
          senha: password,
        },
        { timeout: 2000 }
      );
      Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
      navigation.navigate("Home");
    } catch (e) {
      const error = e as AxiosError;
      if (!error.status) {
        Alert.alert("Erro", "Problema em comunicar com api. Tente mais tarde!");
        setLoading(false);
      }
      console.log("Erro ao atualizar dados:", error.response.data);
      Alert.alert(
        "Erro",
        "Houve um problema ao atualizar as informações. Por favor, tente novamente."
      );
    }
  };

  return (
    <Wrapper>
      <Header>
        <HeaderButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon>
            <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
          </ButtonIcon>
          <ButtonText>Voltar</ButtonText>
        </HeaderButtonContainer>
        <Logo />
      </Header>

      <Container>
        <ContentContainer>
          <ContainerText> Perfil </ContainerText>
        </ContentContainer>
        <ContentContainer>
          <Input
            label="Nome"
            placeholder="digite seu nome"
            onChangeText={setName}
            value={name}
          />
          <Input
            label="E-mail"
            placeholder="digite seu e-mail"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            label="Senha"
            placeholder="digite sua senha"
            onChangeText={setPassword}
            value={password}
          />
        </ContentContainer>
        {loading ? (
          <Container>
            <ActivityIndicator size="large" color="#0000ff" />
          </Container>
        ) : (
          <Button
            title="Salvar informações"
            noSpacing={true}
            variant="primary"
            onPress={handleSave}
          />
        )}
      </Container>

      <Container>
        <Button
          title="Logout"
          onPress={() => {
            logout();
            navigation.navigate("Login");
          }}
        />
      </Container>
    </Wrapper>
  );
}
