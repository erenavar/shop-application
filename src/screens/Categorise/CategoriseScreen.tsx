import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Categorise">,
  BottomTabScreenProps<TabParamList>
>;

const CategoriseScreen: FC<Props> = () => {
  return (
    <View>
      <Text>CategoriseScreen</Text>
    </View>
  );
};

export default CategoriseScreen;

const styles = StyleSheet.create({});
