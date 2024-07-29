import { StyleSheet, Text, View } from "react-native";
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
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
