import { BotaoAddTarefa } from "../BotaoAddTarefa";
import { Tarefa } from "../Tarefa";
import { Container } from "./style";

export function ListaTarefas(  ){
    return (
        <Container>
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
        </Container>
    );
}