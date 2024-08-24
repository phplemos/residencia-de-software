import {Feather} from '@expo/vector-icons';
import { Container, TextAddTarefa  } from './styles';


export function BotaoAddTarefa(){
    return (
        <Container>
            <Feather name='plus' color='#DADCD5' size={17}/>
            <TextAddTarefa>
                Adicionar Tarefa
            </TextAddTarefa>
        </Container>
    );
}