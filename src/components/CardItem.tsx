import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface IProps {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const CardItem = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.image}
      />
      <View style={styles.summary}>
        <View>
          <Text>{props.title}</Text>
        </View>
        <View>
          <Text>${props.price}</Text>
        </View>
        <View style={styles.rating}>
          <View style={styles.count}>
            <FontAwesome name="commenting-o" size={18} color="black" />
            <Text>{props.rating.count}</Text>
          </View>
          <Text>{props.rating.rate}/5</Text>
          <Pressable>
            <FontAwesome name="heart-o" size={18} color="black" />
            {/* <FontAwesome name="heart" size={24} color="black" /> */}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
  },
  summary: {
    marginLeft: "5%",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    flex: 1,
    width: 200,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
