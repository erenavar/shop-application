import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Details">,
  BottomTabScreenProps<TabParamList>
>;

const DetailsScreen: FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/background.jpg")}
      />
      <View style={styles.info}>
        <View>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </View>
        <View>
          <Text>4</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
  },
  image: {
    height: "50%",
    width: "100%",
    borderRadius: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
