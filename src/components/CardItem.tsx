import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IProps } from "./types";

const CardItem = (props: IProps) => {
  return (
    <Pressable style={styles.container} onPress={props.toNavigate}>
      <Image
        source={{ uri: props.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.summary}>
        <Text style={styles.title}>{props.title}</Text>

        <Text style={styles.price}>${props.price}</Text>

        <View style={styles.rating}>
          <View style={styles.count}>
            <FontAwesome name="commenting-o" size={18} color="black" />
            <Text>{props.rating.count}</Text>
          </View>
          <View style={styles.rate}>
            <FontAwesome name="thumbs-o-up" size={16} color="black" />
            <Text>{props.rating.rate}/5</Text>
          </View>
          <Pressable onPress={props.toFav}>
            <FontAwesome name="heart-o" size={18} color="black" />
            {/* <FontAwesome name="heart" size={24} color="black" /> */}
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
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
    fontSize: 15,
    fontStyle: "italic",
  },
  price: {
    fontWeight: "600",
    fontStyle: "italic",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
