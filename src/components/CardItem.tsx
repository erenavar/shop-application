import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  title: string;
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
        <Text></Text>
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
});
