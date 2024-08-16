import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavourite from "../../hooks/useFavorite";
import GradientText from "../../components/GradientText";

const Favourite = () => {
  const { favArray, deleteAllItems, getFavourites } = useFavourite();

  return (
    <View style={{ margin: 10, flex: 1 }}>
      <GradientText text="Favorites" style={styles.gradientText} />
      <ScrollView>
        {favArray.map((item) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.deleteButton}>Delete</Text>
          </View>
        ))}
      </ScrollView>
      <Button
        title="Delete All Favorites"
        onPress={() => deleteAllItems()}
      ></Button>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flex: 1,
  },
  title: { width: "50%", marginVertical: 10 },
  deleteButton: { alignSelf: "flex-end" },
});
