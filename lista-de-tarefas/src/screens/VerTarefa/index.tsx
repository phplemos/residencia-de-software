import { Container, ButtonDeleteTarefa, ContainerDescricao } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { TopbarTarefa } from "../../components/TopbarTarefa";
import { Feather } from "@expo/vector-icons";
import { RootStackParamsList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TarefaContext } from "../../context/TarefaContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export default function VerTarefa() {
  const { tarefa } = useContext(TarefaContext);
  const navigation = useNavigation<Props["navigation"]>();

  return (
    <Container>
      <TopbarTarefa popButton={navigation.goBack} nomeTarefa={tarefa.titulo} />
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
      <ButtonDeleteTarefa>
        <Feather name={"trash"} color={"#DADCD5"} size={20}></Feather>
        <Text style={{ color: "#DADCD5" }}> Excluir tarefa</Text>
      </ButtonDeleteTarefa>
    </Container>
  );
}
