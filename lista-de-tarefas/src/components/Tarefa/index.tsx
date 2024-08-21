import {Feather} from '@expo/vector-icons'
import { Container, TarefaDone } from "./style";

export function Tarefa(){
    return (
        <Container>
            <TarefaDone>
                <Feather name="circle" size={24} color="#272A23"/>
            </TarefaDone>
        </Container>
    );
}



/*
            <TarefaDone>
                <Feather name="star" size={25} color="#F51E10">
                </Feather>
            </TarefaDone>

*/
