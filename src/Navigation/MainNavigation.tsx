import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../SignUpScreen";

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
