import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Login/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUp/SignUpScreen";
import { RootStackParamList } from "./types";
import { TabNavigation } from "./TabNavigation";
import DetailsScreen from "../screens/Details/DetailsScreen";
import { LinearGradient } from "expo-linear-gradient";
import CategoriseScreen from "../screens/Categorise/CategoriseScreen";

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
          name="Details"
          component={DetailsScreen}
          options={{
            headerBackTitle: "Products",
            headerBackground: () => (
              <LinearGradient
                colors={["dodgerblue", "#ff5eff"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerTintColor: "#b615af",
            headerTitleStyle: { color: "white", fontSize: 25 },
          }}
        />
        <Stack.Screen
          name="Categorise"
          component={CategoriseScreen}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false, headerTitle: "Home Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
