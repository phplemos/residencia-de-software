import { View, Text, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerTop, ContainerItem } from "./styles";
import { VoltarButton } from "../../components/VoltarButton";
import { SearchInput } from "../../components/SearchInput";
import { useContext, useState } from "react";
import { TarefaContext } from "../../context/TarefaContext";
import { Tarefa } from "../../components/Tarefa";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList, TarefaProps } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";

export default function Pesquisar() {
  const { tarefas, createTarefa, setTarefas } = useContext(TarefaContext);
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation();

  function handlePress() {}

  const filtrarTarefas = tarefas.filter((item) =>
    item.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  const [tarefaText, setTarefaText] = useState("");

  function handleAddTarefa() {
    if (tarefaText.length <= 0) {
      return Alert.alert("Erro", "Essa tarefa está sem descrição!");
    }
    if (tarefas.some((tarefa) => tarefa.titulo === tarefaText)) {
      return Alert.alert("Erro", "Essa tarefa ja existe!");
    }
    createTarefa(tarefaText);
    setTarefaText("");
  }

  function handleTarefaChangeStatus(tarefaToChange: TarefaProps) {
    const updatedTarefa = tarefas.filter(
      (tarefa) => tarefa.titulo !== tarefaToChange.titulo
    );
    const newTarefa = {
      id: tarefaToChange.id,
      titulo: tarefaToChange.titulo,
      status: !tarefaToChange.status,
    };
    updatedTarefa.push(newTarefa);
    setTarefas(updatedTarefa);
  }

  function handleTarefaRemove(tarefaToRemove: TarefaProps) {
    Alert.alert(
      "Atenção!",
      `Deseja realmente remover a tarefa: ${tarefaToRemove.titulo}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTarefas = tarefas.filter(
              (tarefa) => tarefa.titulo !== tarefaToRemove.titulo
            );
            setTarefas(updatedTarefas);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }

  return (
    <Container>
      <ContainerTop>
        <SearchInput
          placeholder="Digite aqui"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </ContainerTop>
      <FlatList style={{ width: "80%" }}
        data={filtrarTarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Tarefa
            id={item.id}
            titulo={item.titulo}
            status={item.status}
            onCheck={() => handleTarefaChangeStatus(item)}
            onRemove={() => handleTarefaRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <ContainerItem>
            <Text style={{ textAlign: "left" }}>Nenhum item encontrado</Text>
          </ContainerItem>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  );
}
