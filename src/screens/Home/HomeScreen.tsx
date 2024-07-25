import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import GradientText from "../../components/GradientText";
import CustomButton from "../../components/CustomButton";
import { useQuery } from "@tanstack/react-query";
import Indicator from "../../components/Indicator";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen: FC<Props> = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isLoading) return <Indicator />;
  return (
    <View style={{ flex: 1 }}>
      <GradientText text="Categories" style={styles.gradientText} />

      <View style={styles.buttonContainer}>
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
  buttonContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
