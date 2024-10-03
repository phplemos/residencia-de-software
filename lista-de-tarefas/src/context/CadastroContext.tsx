import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProps } from "../utils/types";
import { createContext, ReactNode } from "react";

interface CadastroContextProps {
  user: UserProps;
  createUser: (user: UserProps) => void;
}

interface CadastroProviderProps {
  children: ReactNode;
}

export const CadastroContext = createContext<CadastroContextProps>({
  user: {
    email: "",
    password: "",
    id: 0,
    nome: "",
    profilePic: "",
  },
  createUser: () => {},
});


function CadastroProvider({ children }: CadastroProviderProps) {
  async function createUser(user: UserProps) {
    try {
      await AsyncStorage.setItem(`${user.email}`, JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  }  


}


