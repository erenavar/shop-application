import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.image}
      />
      <View style={styles.summary}>
        <Text>dfd</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: 100,
  },
  summary: {},
});
