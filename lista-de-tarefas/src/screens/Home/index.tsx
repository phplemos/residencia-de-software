import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Container } from "./styles";
import { useContext, useState } from "react";
import { FlatList } from "react-native";
import { Tarefa } from "../../components/Tarefa";
import { BotaoAddTarefa } from "../../components/BotaoAddTarefa";
import { StatusBar } from "expo-status-bar";
import { VoltarButton } from "../../components/VoltarButton";
import { TarefaContext } from "../../context/TarefaContext";
import { TarefaProps } from "../../utils/types";
import { AppTopBar } from "../../components/AppTopBar";

export default function Home() {
  const { tarefas, createTarefa, setTarefas } = useContext(TarefaContext);
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
      <FlatList
        data={tarefas}
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
          <View>
            <Text>Você ainda não cadastrou uma tarefa</Text>
          </View>
        )}
      />
      <BotaoAddTarefa
        onPress={handleAddTarefa}
        onChangeText={setTarefaText}
        value={tarefaText}
      />
      <StatusBar style="auto" />
    </Container>
  );
}
