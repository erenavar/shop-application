import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import { useQuery } from "@tanstack/react-query";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Categorise">,
  BottomTabScreenProps<TabParamList>
>;

const CategoriseScreen: FC<Props> = () => {
  const { data } = useQuery({
    queryKey: ["categorised"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products/category/jewelery").then((res) =>
        res.json()
      ),
  });

  console.log("data :>> ", data);

  return (
    <View>
      <Text>CategoriseScreen</Text>
    </View>
  );
};

export default CategoriseScreen;

const styles = StyleSheet.create({});
