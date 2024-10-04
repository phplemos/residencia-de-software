import { createContext, ReactNode, useContext } from "react";
import { UserProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface LoginContextProps {
  signIn: (email: string, password: string) => Promise<boolean>;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<LoginContextProps>({
  signIn: async () => false,
});

function LoginProvider({ children }: LoginProviderProps) {
  const { user, getInfo } = useContext(UserContext);

  async function signIn(email: string, password: string) {
    const requrestUser = await loadUser(email);

    console.log(requrestUser);
    if (requrestUser) {
      if (requrestUser.password === password) {
        return true;
      }
      return false;
    }
    return false;
  }

  async function loadUser(email: string) {
    try {
      const user = await AsyncStorage.getItem(email);
      if (user) {
        getInfo(email);
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
