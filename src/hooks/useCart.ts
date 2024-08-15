import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ICart {
    title:string,
    price: number
}

const useCart = () => {
  const [cartArray, setCartArray] = useState<ICart[]>();

  const getCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cartItems");
      setCartArray(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error("Error reading favourites from AsyncStorage", e);
    }
  };

  const addCart = async (item: ICart) => {
    try {
      const newCartArray = [...cartArray, item];
      setCartArray(newCartArray);
      await AsyncStorage.setItem("cartItems", JSON.stringify(newCartArray));
    } catch (e) {
      console.error("Error adding item to AsyncStorage", e);
    }
  };

  const removeCart = async (item: ICart) => {
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
  };
};

export default useCart;
