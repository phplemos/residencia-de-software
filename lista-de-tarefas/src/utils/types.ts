export type TarefaProps = {
    id:number;
    titulo:string;
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
}

export type LoginProps = {
    email:string;
    senha:string;
    signIn: () => void;
    signUp: () => void; 
}

export type RootStackParamsList = {
    ListarTarefas: undefined;
    VerTarefa:TarefaProps;
    Login:LoginProps;
}