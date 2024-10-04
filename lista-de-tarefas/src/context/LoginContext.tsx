import { createContext, ReactNode } from "react";
import { UserProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginContextProps {
  signIn: (email: string, password: string) => Promise<boolean>;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>({
  signIn: async () => false,
});

export function LoginProvider({ children }: LoginProviderProps) {
  async function signIn(email: string, password: string) {
    const requrestUser = await loadUser(email);
    console.log(requrestUser)
    if (requrestUser) {
      return true;
    }
    return false;
  }

  async function loadUser(email: string) {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        console.log(user);
        return JSON.parse(user);
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  return (
    <LoginContext.Provider value={{ signIn }}>{children}</LoginContext.Provider>
  );
}

export default LoginProvider;
