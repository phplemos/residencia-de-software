export type TarefaProps = {
    id:number;
    titulo:string;
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
}

export type RootStackParamsList = {
    ListarTarefas: undefined;
    VerTarefa:TarefaProps;
}