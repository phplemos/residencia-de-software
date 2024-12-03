import React from "react";
import { Image, FlatList, View, Text } from "react-native";
import { Wrapper, Container, ListContainer, TextVagas } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

export default function List() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get("/vagas", { timeout: 2000 });
        await AsyncStorage.setItem(
          "vagasOffiline",
          JSON.stringify(response.data)
        );
        setVagas(response.data);
      } catch (e) {
        const error = e as AxiosError;
        if (!error.status) {
          const vagasOffiline = await AsyncStorage.getItem("vagasOffiline");
          setVagas(JSON.parse(vagasOffiline));
        }
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

        {isLoading ? (
          <Text>Carregando...</Text>
        ) : (
          <ListContainer>
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
          </ListContainer>
        )}
      </Container>
    </Wrapper>
  );
}
