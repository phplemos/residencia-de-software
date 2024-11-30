import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from './src/theme';

import Login from './src/screens/Login';
import FormScreen  from './src/screens/Form';
import List  from './src/screens/List';
import Profile  from './src/screens/Profile';
import Details  from './src/screens/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Auth(){
  
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color }) => {
      let iconName: "home" | "home-outline" | "person"|"person-outline";

        if (route.name === 'Home') {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === 'Profile') {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={16} color={color} />;
      },
      tabBarActiveTintColor: theme.COLORS.GREEN,
      tabBarInactiveTintColor: theme.COLORS.GRAY_03,
      tabBarStyle: {
        backgroundColor: theme.COLORS.GRAY_01,
      },
      tabBarLabelStyle: {
        fontWeight: 800,
      },
    })}
    >
      <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
              <HomeStack.Screen name="List" component={List} />
              <HomeStack.Screen name="Details" component={Details} />
            </HomeStack.Navigator>
          )}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

