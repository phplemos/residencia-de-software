import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
  Title,
  Description,
} from "../Details/styles";
import api from "../../services/api";
import Logo from "../../components/Logo";
import theme from "../../theme";
import { Button } from "../../components/Button";
import { VagaProps } from "../../utils/Types";
import { Linking, Text } from "react-native";

export default function Details({ route, navigation }) {
  const [id, setId] = useState(route.params.id);
  const [vaga, setVaga] = useState<VagaProps>({});

  const checkStatus = vaga?.status !== 'aberta'

  const fetchVaga = async () => {
    try {
      const response = await api.get(`/vagas/${id}`);
      const data = response.data;
      setVaga({
        id: data.id,
        title: data.titulo,
        date: data.dataCadastro,
        description: data.descricao,
        phone: data.telefone,
        status: data.status,
        company: data.empresa,
      });
      console.log(id,vaga,response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVaga();
  }, [id]);

  const handleContactPress = () => {
  if (vaga?.phone) {
    const phoneNumber = vaga.phone.replace(/\D/g, ""); 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber};`
    Linking.openURL(whatsappUrl); 
  } else {
    console.log("Número de telefone não disponível.");
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
      {vaga ? (
        <Container>
          <ContentContainer>
            <Title>{vaga.title}</Title>
            <Description>{vaga.description}</Description>
          </ContentContainer>

          {checkStatus ? (
            <Text style={{color: 'red',fontWeight:'bold'}}>Vaga Encerrada!</Text>
          ): (
          <Button
            title="Entrar em contato"
            noSpacing={true}
            variant="primary"
            onPress={handleContactPress}
          />
          )}
        </Container>
      ) : (
        <Title>A vaga não foi encontrada!</Title>
      )}
    </Wrapper>
  );
}
