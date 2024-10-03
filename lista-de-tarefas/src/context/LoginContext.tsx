import { createContext, ReactNode } from "react";
import { UserProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginContextProps {
  signIn: (email: string, password: string) => Promise<UserProps | null>;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>({
  signIn: async (email: string, password: string) => null,
});

export function LoginProvider({ children }: LoginProviderProps) {
  async function signIn(
    email: string,
    password: string
  ): Promise<UserProps | null> {
    const requrestUser = await loadUser(email);
    if (requrestUser && requrestUser.password === password) {
      return {
        id: requrestUser.id,
        nome: requrestUser.nome,
        email: requrestUser.email,
        profilePic: requrestUser.profilePic,
      } as UserProps;
    }
    return null;
  }

  async function loadUser(email: string) {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
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
