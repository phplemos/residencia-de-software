export type TarefaProps = {
  id: number;
  titulo: string;
  status?: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
};

export type LoginProps = {
  signIn: (email: string, senha: string) => boolean;
};

export type UserProps = {
  id: number;
  nome: string;
  email: string;
  password?: string;
  profilePic: string;
};

export type RootStackParamsList = {
  Home: undefined;
  VerTarefa?: TarefaProps;
  Login?: LoginProps;
  User?: UserProps;
  Cadastro: undefined;
  Drawer: undefined;
  Pesquisar:undefined;
  RecuperarConta: undefined;
};
