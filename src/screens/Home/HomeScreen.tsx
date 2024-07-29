import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import GradientText from "../../components/GradientText";
import CustomButton from "../../components/CustomButton";
import { useQuery } from "@tanstack/react-query";
import Indicator from "../../components/Indicator";
import CardItem from "../../components/CardItem";

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
  if (error) console.log("error :>> ", error);
  return (
    <SafeAreaView style={styles.container}>
      <GradientText text="Categories" style={styles.gradientText} />

      <View style={styles.buttonContainer1}>
        <View>
          <CustomButton title="Men's Clothing" type="facebook" />
          <CustomButton title="Jewelery" type="secondary" />
        </View>
        <View>
          <CustomButton title="Electronic" type="primary" />
          <CustomButton title="Women's Clothing" type="anchor" />
        </View>
      </View>
      <View style={styles.productContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <CardItem
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
  },
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
  },
  buttonContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "10%",
  },
  productContainer: {
    gap: 15,
  },
});
