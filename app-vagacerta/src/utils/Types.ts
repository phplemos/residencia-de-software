export type UserProps = {
  id: String;
  nome: String;
  email: String;
  senha: String;
};

export type VagaProps = {
  id: number;
  title: String;
  date: String;
  description: String;
  phone: String;
  status: String;
  company: String;
};

export type RootStackParamList = {
  Login: undefined;
  FormScreen: undefined;
  Home: undefined;
  Profile: undefined;
  Details: { id: number };
};
