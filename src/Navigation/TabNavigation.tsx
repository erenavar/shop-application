import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}


