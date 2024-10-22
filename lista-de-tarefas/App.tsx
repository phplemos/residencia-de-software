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
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./src/components/CustomDrawer";
import RecuperarConta from "./src/screens/RecuperarConta";
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
                <Stack.Screen name="Drawer" component={AppDrawer} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="RecuperarConta"
                  component={RecuperarConta}
                  />
                <Stack.Screen name="Cadastro" component={Cadastro} />
              </Stack.Navigator>
            </NavigationContainer>
          </TarefaProvider>
      </CadastroProvider>
    </LoginProvider>
  );
}

export function AppDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#272A23",
        },
        headerTintColor: "#DADCD5",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pesquisar" component={Pesquisar} />
      <Drawer.Screen name="VerTarefa" component={VerTarefa} />
    </Drawer.Navigator>
  );
}
