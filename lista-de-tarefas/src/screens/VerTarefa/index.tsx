import { Container, ButtonDeleteTarefa, ContainerDescricao } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { VoltarButton } from "../../components/VoltarButton";
import { Feather } from "@expo/vector-icons";
import { RootStackParamsList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { TarefaContext } from "../../context/TarefaContext";

type Props = NativeStackScreenProps<RootStackParamsList, "VerTarefa">;

export default function VerTarefa() {
  const { tarefa } = useContext(TarefaContext);
  const navigation = useNavigation<Props["navigation"]>();

  return (
    <Container>
<<<<<<< HEAD
      <VoltarButton
        popButton={navigation.goBack}
        nomeTarefa={tarefa.titulo}
      />
=======
      <TopbarTarefa popButton={navigation.goBack} nomeTarefa={tarefa.titulo} />
>>>>>>> f62fbcdaeed6b0d8d86048cabe3990f850033254
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
