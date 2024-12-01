import React from "react";
import { Image, FlatList, View, Text } from "react-native";
import { Wrapper, Container, ListContainer, TextVagas } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";

export default function List() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get("/vagas");
        setVagas(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVagas();
  }, []);
  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />

      <Container>
        <Logo />
        <TextVagas>{vagas.length} vagas encontradas!</TextVagas>
        <ListContainer>
          {isLoading ? (
            <Text>Carregando...</Text>
          ) : (
            <FlatList
              data={vagas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <VagaCard
                  id={item.id}
                  title={item.titulo}
                  dataCreated={item.dataCadastro}
                  company={item.empresa}
                />
              )}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={() => (
                <View>
                  <Text>Você ainda não tem vagas cadastradas</Text>
                  <Text>Crie vagas.</Text>
                </View>
              )}
            />
          )}
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
