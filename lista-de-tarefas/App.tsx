import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TopbarTarefa } from './src/components/TopbarTarefa';
import { BotaoAddTarefa } from './src/components/BotaoAddTarefa';
import { ListaTarefas } from './src/components/ListaTarefas';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Tarefa } from './src/components/Tarefa';
export default function App() {

  const [tarefaText, setTarefaText] = useState("");
  const [tarefas, setTarefas] = useState<{ description: string, check: boolean }[]>([]);

  return (
    <View style={styles.container}>
      <TopbarTarefa nomeTarefa={"Tarefa de pedro"} />
      <FlatList data={tarefas} keyExtractor={(item, index) => index.toString()}
        renderItem={
          (item) => (<Tarefa />)
        }
        ListEmptyComponent={() => (
          <View>
            <Text>Você ainda não cadastrou uma tarefa</Text>
          </View>
        )}
      />


      <BotaoAddTarefa />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#DADCD5',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 45,
    gap: 16
  },
});
