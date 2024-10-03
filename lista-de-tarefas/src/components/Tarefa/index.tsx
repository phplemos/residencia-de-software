import { Feather } from "@expo/vector-icons";
import { Container, TarefaDone, TarefaText, TarefaDelete } from "./style";
import { RootStackParamsList, TarefaProps } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TarefaContext } from "../../context/TarefaContext";

type Props = NativeStackScreenProps<RootStackParamsList>;

export function Tarefa(props: TarefaProps) {
  const { selectTarefa } = useContext(TarefaContext);
  const navigation = useNavigation<Props["navigation"]>();

  function handlePress() {
    navigation.navigate("VerTarefa");
    selectTarefa(props);
  }

  return (
    <Container onPress={() => handlePress()}>
      <TarefaDone onPress={props.onCheck}>
        <Feather name={props.status ? "check-circle" : "circle"} size={24} color="#272A23" />
      </TarefaDone>
      <TarefaText
        style={
          props.status
            ? { textDecorationLine: "line-through" }
            : { textDecorationLine: "none" }
        }
      >
        {props.titulo}
      </TarefaText>
      <TarefaDelete onPress={props.onRemove}>
        <Feather name="trash" size={24} color="#272A23" />
      </TarefaDelete>
    </Container>
  );
}

/*
            <TarefaDone>
                <Feather name="star" size={25} color="#F51E10">
                </Feather>
            </TarefaDone>

*/
