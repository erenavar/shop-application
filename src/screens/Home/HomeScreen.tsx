import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen: FC<Props> = () => {
  return (
    <View>
      <GradientText text="Categories" style={styles.gradientText} />
    </View>
  );
};

const styles = StyleSheet.create({
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
  },
});
