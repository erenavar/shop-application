import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
const width = Dimensions.get("window").width;
export const HomeScreen: FC<Props> = ({ navigation }) => {
  const toNavigate = (id: number) => {
    navigation.navigate("Details", { id: id });
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isLoading) return <Indicator />;
  if (error) console.log("error :>> ", error);
  const categoryFilter = (category: string) => alert(category);
  return (
    <SafeAreaView style={styles.container}>
      <GradientText text="Categories" style={styles.gradientText} />
      <View style={styles.buttonContainer1}>
        <View>
          <CustomButton
            title="Men's Clothing"
            type="facebook"
            filter={() => categoryFilter("men's clothing")}
          />
          <CustomButton
            title="Jewelery"
            type="secondary"
            filter={() => categoryFilter("jewellery")}
          />
        </View>
        <View>
          <CustomButton
            title="Electronic"
            type="primary"
            filter={() => categoryFilter("electronics")}
          />
          <CustomButton
            title="Women's Clothing"
            type="anchor"
            filter={() => categoryFilter("women's clothing")}
          />
        </View>
      </View>
      <View style={styles.searchArea}>
        <TextInput style={styles.input} placeholder="Search" />
        <Pressable style={styles.searchButton}>
          <Text>Search</Text>
        </Pressable>
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
              image={item.image}
              toNavigate={() => toNavigate(item.id)}
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
    flex: 1,
  },
  gradientText: {
    fontSize: 40,
    alignSelf: "center",
  },
  buttonContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "5%",
  },
  productContainer: {
    flex: 1,
    gap: 15,
  },
  searchArea: { flexDirection: "row", padding: 10 },
  input: { width: width * 0.7 },
  searchButton: {},
});
