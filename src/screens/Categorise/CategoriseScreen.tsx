import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import { useQuery } from "@tanstack/react-query";
import CardItem from "../../components/CardItem";
import GradientText from "../../components/GradientText";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Categorise">,
  BottomTabScreenProps<TabParamList>
>;

const CategoriseScreen: FC<Props> = ({ route }) => {
  const { data } = useQuery({
    queryKey: ["categorised"],
    queryFn: () =>
      fetch(
        "https://fakestoreapi.com/products/category/" +
          `${route.params.navigateName}`
      ).then((res) => res.json()),
  });

  return (
    <SafeAreaView style={styles.container}>
      <GradientText style={styles.title} text={route.params.categoryName} />
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
    </SafeAreaView>
  );
};

export default CategoriseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "5%",
  },
  title: { fontSize: 40, alignSelf: "center" },
});
