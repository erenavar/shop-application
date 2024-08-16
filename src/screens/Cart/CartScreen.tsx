import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import GradientText from "../../components/GradientText";

const CartScreen = () => {
  const { getCartItems, cartArray } = useCart();

  return (
    <View style={styles.cartContainer}>
      <GradientText text="Cart" style={styles.gradientText} />
      <ScrollView style={{ flex: 1 }}>
        {cartArray?.map((item) => (
          <>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  cartContainer: {
    flex: 1,
    margin: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  text: { flex: 5, marginVertical: 10 },
  price: { flex: 1, fontWeight: "bold" },
});
