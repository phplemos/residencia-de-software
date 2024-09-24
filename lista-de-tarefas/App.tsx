import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VerTarefa from "./src/screens/VerTarefa";
import ListaTarefas from "./src/screens/ListaTarefas";
import { Login } from "./src/screens/Login";
import TarefaProvider from "./src/context/TarefaContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TarefaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
          <Stack.Screen name="VerTarefa" component={VerTarefa} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </TarefaProvider>
  );
}
