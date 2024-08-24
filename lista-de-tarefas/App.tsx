import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TopbarTarefa } from './src/components/TopbarTarefa';
import { BotaoAddTarefa } from './src/components/BotaoAddTarefa';
import { ListaTarefas } from './src/components/ListaTarefas';
export default function App() {
  return (
    <View style={styles.container}>
      <TopbarTarefa nomeTarefa={"Tarefa de pedro"}/>
      <ListaTarefas/>
      <BotaoAddTarefa/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height:'100%',
    backgroundColor: '#DADCD5',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:16,
    paddingTop:45,
    gap:16
  },
});
