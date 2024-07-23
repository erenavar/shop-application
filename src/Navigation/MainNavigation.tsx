import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
