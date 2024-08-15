import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { TabParamList } from "./types";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import FavouritesScreen from "../screens/Favourites/FavouritesScreen";
import CartScreen from "../screens/Cart/CartScreen";
import { Ionicons } from "@expo/vector-icons";
import useCart from "../hooks/useCart";

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigation() {
  const { cartArray } = useCart();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={27} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="star-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="cart-outline" size={27} color="black" />
          ),
          tabBarBadge: cartArray?.length
        }}
      />
    </Tab.Navigator>
  );
}
