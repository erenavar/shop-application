import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useCart from "../../hooks/useCart";

const CartScreen = () => {
  const { getCartItems, cartArray } = useCart();

  return (
    <View>
      {cartArray?.map((item) => (
        <Text>{item.price}</Text>
      ))}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
