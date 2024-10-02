import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VerTarefa from "./src/screens/VerTarefa";
import ListaTarefas from "./src/screens/ListaTarefas";
import { Login } from "./src/screens/Login";
import TarefaProvider from "./src/context/TarefaContext";
import { Cadastro } from "./src/screens/Cadastro";
import Pesquisar from "./src/screens/Pesquisar";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TarefaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pesquisar" screenOptions={{ headerShown: false }}>

          <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
          <Stack.Screen name="VerTarefa" component={VerTarefa} />
          <Stack.Screen name="Pesquisar" component={Pesquisar} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    </TarefaProvider>
  );
}
