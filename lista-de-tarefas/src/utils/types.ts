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

export type UserProps = {
    nome: string;
    email: string;
    password: string;
    profilePic: string;
}

export type RootStackParamsList = {
    ListarTarefas: undefined;
    VerTarefa:TarefaProps;
    Login:LoginProps;
    User:UserProps;
}