import { Feather } from '@expo/vector-icons';
import { Container, TextAddTarefa } from './styles';
import { TouchableOpacity } from 'react-native';

type Props = {
    onPress: () => void,
    onChangeText: (text: string) => void,
    value: string;
}

export function BotaoAddTarefa({ onPress, onChangeText, value }: Props) {
    return (
        <Container>
            <TouchableOpacity onPress={onPress}>
                <Feather
                    name='plus'
                    color='#DADCD5'
                    size={17} />
            </TouchableOpacity>
            <TextAddTarefa
                placeholder="Digite sua nova tarefa"
                placeholderTextColor="gray"
                onChangeText={onChangeText}
                keyboardType="default"
                value={value} />

        </Container>
    );
}

/*

      <View style={styles.containerInput}>
        <TouchableOpacity onPress={handleAddTarefa}>
          <Feather name='plus' color='#DADCD5' size={17} />
        </TouchableOpacity>
        <TextInput style={styles.textAddTarefa} placeholder="Digite sua nova tarefa" placeholderTextColor="gray" onChangeText={setTarefaText} keyboardType="default" value={tarefaText} />
      </View>
*/