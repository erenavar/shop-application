import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import { useQuery } from "@tanstack/react-query";
import CardItem from "../../components/CardItem";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Categorise">,
  BottomTabScreenProps<TabParamList>
>;

const CategoriseScreen: FC<Props> = ({ route }) => {
  console.log("params.categoryName :>> ", route.params.navigateName);
  const { data } = useQuery({
    queryKey: ["categorised"],
    queryFn: () =>
      fetch(
        "https://fakestoreapi.com/products/category/" +
          `${route.params.navigateName}`
      ).then((res) => res.json()),
  });

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <CardItem
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriseScreen;

const styles = StyleSheet.create({});
