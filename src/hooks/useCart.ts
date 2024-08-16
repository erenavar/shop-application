import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "../screens/Home/types";
import { useNavigation } from "@react-navigation/native";


const useCart = () => {
    const navigation = useNavigation();
  const [cartArray, setCartArray] = useState<IProduct[]>([]);

  const getCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cartItems");
      setCartArray(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error("Error reading favourites from AsyncStorage", e);
    }
  };

  const addCart = async (item:IProduct) => {
    try {
      const newCartArray = [...cartArray, item];
      setCartArray(newCartArray);
      await AsyncStorage.setItem("cartItems", JSON.stringify(newCartArray));
       alert("Product was added");
       navigation.navigate("Home")
    } catch (e) {
      console.error("Error adding item to AsyncStorage", e);
    }
  };

  const removeCart = async (item: IProduct) => {
    try {
      const newCartArray = cartArray.filter((cartItem) => cartItem !== item);
      setCartArray(newCartArray);
      await AsyncStorage.setItem("cartItems", JSON.stringify(newCartArray));
    } catch (e) {
      console.error("Error removing item from AsyncStorage", e);
    }
  };

  const deleteAllItems = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {}
  };

  useEffect(() => {
    getCartItems();
  }, [cartArray]);

  return { 
    addCart,
    removeCart,
    deleteAllItems,
    getCartItems,
    cartArray
  };
};

export default useCart;
