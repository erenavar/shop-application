import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  StackScreenProps<RootStackParamList>
>;

export const HomeScreen: FC<Props> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
