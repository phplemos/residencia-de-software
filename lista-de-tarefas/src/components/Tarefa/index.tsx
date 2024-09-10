import { Feather } from '@expo/vector-icons'
import { Container, TarefaDone, TarefaText, TarefaDelete } from "./style";
import { RootStackParamsList, TarefaProps } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


type Props = NativeStackScreenProps<RootStackParamsList>;

export function Tarefa({ id, titulo, status, onCheck, onRemove }: TarefaProps) {

    const [tarefa, setTarefa] = useState<TarefaProps>({ id, titulo, status, onCheck, onRemove });
    const navigation = useNavigation<Props['navigation']>();


    function handlePress() {
        navigation.navigate('VerTarefa', { id, titulo, status });
    }

    return (
        <Container onPress={() => handlePress()}>
            <TarefaDone onPress={onCheck}>
                <Feather name={status ? "check-circle" : "circle"} size={24} color="#272A23" />
            </TarefaDone>
            <TarefaText style={status ? { textDecorationLine: "line-through" } : { textDecorationLine: "none" }}>{titulo}</TarefaText>
            <TarefaDelete onPress={onRemove}>
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
