import { Container, ButtonDeleteTarefa, ContainerDescricao } from "./styles";
import { Alert, Text, TouchableOpacity } from "react-native";
import { VoltarButton } from "../../components/VoltarButton";
import { Feather } from "@expo/vector-icons";
import { RootStackParamsList, TarefaProps } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { TarefaContext } from "../../context/TarefaContext";

type Props = NativeStackScreenProps<RootStackParamsList, "VerTarefa">;

export default function VerTarefa() {
  const { tarefa, tarefas, setTarefas } = useContext(TarefaContext);
  const navigation = useNavigation<Props["navigation"]>();
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
            navigation.goBack();
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }
  return (
    <Container>
      <VoltarButton popButton={navigation.goBack} nomeTarefa={tarefa.titulo} />
      <ContainerDescricao>
        <Text
          style={
            tarefa.status
              ? { textDecorationLine: "line-through" }
              : { textDecorationLine: "none" }
          }
        >
          {tarefa.titulo}
        </Text>
      </ContainerDescricao>
      <ButtonDeleteTarefa onPress={() => handleTarefaRemove(tarefa)}>
        <Feather name={"trash"} color={"#DADCD5"} size={20}></Feather>
        <Text style={{ color: "#DADCD5" }}> Excluir tarefa</Text>
      </ButtonDeleteTarefa>
    </Container>
  );
}
