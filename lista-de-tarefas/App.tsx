import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerTarefa from "./src/screens/VerTarefa";
import Home from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import TarefaProvider from "./src/context/TarefaContext";
import { Cadastro } from "./src/screens/Cadastro";
import Pesquisar from "./src/screens/Pesquisar";
import LoginProvider from "./src/context/LoginContext";
import CadastroProvider from "./src/context/CadastroContext";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <LoginProvider>
      <CadastroProvider>
        <TarefaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="VerTarefa" component={VerTarefa} />
              <Stack.Screen name="Pesquisar" component={Pesquisar} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
          </NavigationContainer>
        </TarefaProvider>
      </CadastroProvider>
    </LoginProvider>
  );
}
