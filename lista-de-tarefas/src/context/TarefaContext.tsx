import { createContext, ReactNode, useEffect, useState } from "react";
import { TarefaProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Porque essas propriedades?
interface TarefaContextProps {
  tarefa: TarefaProps;
  tarefas: TarefaProps[];
  selectTarefa: (tarefa: TarefaProps) => void;
  clearTarefa: () => void;
  createTarefa: (titulo: string) => void;
  setTarefas: ([]: TarefaProps[]) => void;
}

// oque é o provider?
// Porque ReactNode
interface TarefaProviderProps {
  children: ReactNode;
}

// Criação do contexto propriamente dito
export const TarefaContext = createContext<TarefaContextProps>({
  tarefa: { id: 0, titulo: "", status: false },
  tarefas: [],
  selectTarefa: () => {},
  clearTarefa: () => {},
  createTarefa: () => {},
  setTarefas: () => {},
});

// Função que vai compartilhar, ou o provider
function TarefaProvider({ children }: TarefaProviderProps) {
  //Estado da tarefa
  const [tarefa, setTarefa] = useState<TarefaProps>({
    id: 0,
    titulo: "",
    status: false,
  });
  const [tarefas, setTarefas] = useState<TarefaProps[]>([] as TarefaProps[]);

  async function storeTarefas(tarefas: TarefaProps[]) {
    try {
      await AsyncStorage.setItem("@tarefas", JSON.stringify(tarefas));
    } catch (err) {
      console.log(err);
    }
  }

  async function loadTarefas() {
    try {
      const tarefas = await AsyncStorage.getItem("@tarefas");
      if (tarefas) {
        setTarefas(JSON.parse(tarefas));
      }
    } catch (err) {
      console.log(err);
    }
  }

  function createTarefa(titulo: string) {
    const newTarefa = {
      id: tarefas.length + 1,
      titulo: titulo,
      status: false,
    };
    setTarefas([...tarefas, newTarefa]);
  }

  // Função de selecionara tarefa
  function selectTarefa(tarefa: TarefaProps) {
    setTarefa(tarefa);
  }

  // Função de limpar a tarefa
  function clearTarefa() {
    setTarefa({
      id: 0,
      titulo: "",
      status: false,
    });
  }

  useEffect(() => {
    loadTarefas();
  }, []);

  useEffect(() => {
    storeTarefas(tarefas);
  }, [tarefas]);

  return (
    <TarefaContext.Provider
      value={{
        tarefa,
        selectTarefa,
        clearTarefa,
        tarefas,
        createTarefa,
        setTarefas,
      }}
    >
      {children}
    </TarefaContext.Provider>
  );
}

export default TarefaProvider;
