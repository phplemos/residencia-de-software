import {Feather} from '@expo/vector-icons'
import { Container, TarefaDone, TarefaText, TarefaFavoritado } from "./style";

type TarefaType = {
    descricao: String,
    check: Boolean,
}

export function Tarefa(){
    return (
        <Container>
            <TarefaDone>
                <Feather name="circle" size={24} color="#272A23"/>
            </TarefaDone>
            <TarefaText>
                Tarefa
            </TarefaText>
            <TarefaFavoritado>
                <Feather name="star" size={24} color="#272A23"/>
            </TarefaFavoritado>
        </Container>
    );
}



/*
            <TarefaDone>
                <Feather name="star" size={25} color="#F51E10">
                </Feather>
            </TarefaDone>

*/
