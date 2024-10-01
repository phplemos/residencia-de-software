import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Tarefa } from "../../components/Tarefa";
import { BotaoAddTarefa } from "../../components/BotaoAddTarefa";
import { StatusBar } from "expo-status-bar";
import { TopbarTarefa } from "../../components/TopbarTarefa";
import { TarefaContext } from "../../context/TarefaContext";
import { TarefaProps } from "../../utils/types";

export default function ListaTarefas() {
  const { tarefas, createTarefa, setTarefas } = useContext(TarefaContext);
  const [tarefaText, setTarefaText] = useState("");
  const [countTarefas, setCountTarefas] = useState(0);

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

  function handleMenuButton() {}

  useEffect(() => {
    let TotalTarefas = tarefas.length;
    setCountTarefas(TotalTarefas);
  }, [tarefas]);

  return (
    <View style={styles.container}>
      <TopbarTarefa popButton={() => {}} nomeTarefa={"Descrição"} />

      <View style={styles.containerInput}>
        <Text style={styles.textAddTarefa}>
          Quantidade de tarefas: {countTarefas}{" "}
        </Text>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#DADCD5",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 45,
    gap: 16,
  },
  containerInput: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#272A23",
    borderRadius: 8,
    paddingLeft: 10,
    gap: 15,
  },
  textAddTarefa: {
    flex: 1,
    fontSize: 18,
    color: "#DADCD5",
  },
});
