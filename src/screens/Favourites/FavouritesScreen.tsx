import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavourite from "../../hooks/useAsyncStorage";

const Favourite = () => {
  const { favArray, deleteAllItems, getFavourites } = useFavourite();

  return (
    <View>
      {favArray.map((item) => (
        <>
          <Text>{item}</Text>
          <Text>tesıt</Text>
        </>
      ))}
      <Button title="title" onPress={() => deleteAllItems()}></Button>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
