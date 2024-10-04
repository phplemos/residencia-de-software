import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProps } from "../utils/types";
import { createContext, ReactNode } from "react";

interface CadastroContextProps {
  createUser: (user: UserProps) => void;
}

interface CadastroProviderProps {
  children: ReactNode;
}

export const CadastroContext = createContext<CadastroContextProps>({
  createUser: () => {},
});

function CadastroProvider({ children }: CadastroProviderProps) {
  async function createUser(user: UserProps) {
    try {
      await AsyncStorage.setItem(`${user.email}`, JSON.stringify(user));
      console.log("foi");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CadastroContext.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
}

export default CadastroProvider; // Entender o por que desse export pois nao utiliza
