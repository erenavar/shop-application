import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

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
        <Text style={styles.title}>{props.title}</Text>
        <Text>${props.price}</Text>
        <View style={styles.rating}>
          <Text>{props.rating.count}</Text>
          <Text>{props.rating.rate}/5</Text>
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
  },
  title: {
    flex: 1,
    width: 200,
  },
  rating: {},
});
