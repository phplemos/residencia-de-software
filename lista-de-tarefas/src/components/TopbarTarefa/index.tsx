import {
  Container,
  ButtonVoltar,
  ButtonVoltarText,
  ButtonNomeTarefa,
  ButtonNomeTarefaText,
} from "./style";
import { Feather } from "@expo/vector-icons";
import { GestureResponderEvent, Text } from "react-native";

type Props = {
  nomeTarefa: String,
  popButton:(event: GestureResponderEvent) => void;
};

export function TopbarTarefa(props: Props) {
  return (
    <Container>
      <ButtonVoltar onPress={props.popButton}>
        <ButtonVoltarText>
          <Feather name={"arrow-left"} color={"#272A23"} size={20}></Feather>
          Voltar
        </ButtonVoltarText>
      </ButtonVoltar>
      <ButtonNomeTarefa>
        <ButtonNomeTarefaText>{props.nomeTarefa}</ButtonNomeTarefaText>
      </ButtonNomeTarefa>
    </Container>
  );
}
