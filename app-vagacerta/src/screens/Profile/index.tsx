import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";
import api from "../../services/api";

import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
} from "../Profile/styles";

import Logo from "../../components/Logo";
import theme from "../../theme";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

export default function Profile({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async () => {
    try {
      const response = await api.put("/usuarios", {
        name,
        email,
        password,
      });

      console.log("Dados atualizados:", response.data);
      Alert.alert("Sucesso", "Informações atualizadas com sucesso!");

    } catch (error) {
      console.log("Erro ao atualizar dados:", error);
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

        <Button
          title="Salvar informações"
          noSpacing={true}
          variant="primary"
          onPress={handleSave}
        />
      </Container>
    </Wrapper>
  );
}
