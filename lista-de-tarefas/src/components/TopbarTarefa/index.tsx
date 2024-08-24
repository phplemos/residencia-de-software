import { Container, ButtonVoltar, ButtonVoltarText, ButtonNomeTarefa, ButtonNomeTarefaText } from "./style";
import { Feather } from "@expo/vector-icons"
type Props = {
    nomeTarefa: String
}


export function TopbarTarefa(props: Props) {
    return (
        <Container>
            <ButtonVoltar>
                <ButtonVoltarText>
                    <Feather name={'arrow-left'} color={'#272A23'} size={20}></Feather>
                    Voltar</ButtonVoltarText>
            </ButtonVoltar>
            <ButtonNomeTarefa>
                <ButtonNomeTarefaText>{props.nomeTarefa}</ButtonNomeTarefaText>
            </ButtonNomeTarefa>
        </Container>
    );
}