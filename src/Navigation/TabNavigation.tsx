import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { TabParamList } from "./types";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import FavouritesScreen from "../screens/Favourites/FavouritesScreen";
import CartScreen from "../screens/Cart/CartScreen";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}
