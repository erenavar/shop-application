import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ThemedButton } from "react-native-really-awesome-button";
import GradientText from "../../components/GradientText";
import CustomButton from "../../components/CustomButton";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen: FC<Props> = () => {
  return (
    <View>
      <GradientText text="Categories" style={styles.gradientText} />
      <View>
        <CustomButton title="Men's Clothing" type="facebook" />
        <CustomButton title="Jewelery" type="secondary" />
        <CustomButton title="Electronic" type="primary" />
        <CustomButton title="Women's Clothing" type="anchor" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "purple",
  },
});
