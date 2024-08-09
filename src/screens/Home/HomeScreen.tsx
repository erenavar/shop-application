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
import React, { FC, useEffect, useState } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import GradientText from "../../components/GradientText";
import CustomButton from "../../components/CustomButton";
import { useQuery } from "@tanstack/react-query";
import Indicator from "../../components/Indicator";
import CardItem from "../../components/CardItem";
import { IProduct } from "./types";

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
      fetch("https://fakestoreapi.com/products").then(
        (res) => res.json() as Promise<IProduct[]>
      ),
  });

  const [filteredList, setFilteredList] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredList(data);
    }
  }, [data]);

  const handleFilter = (text: string) => {
    if (data) {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredList(filtered);
    }
  };

  const categorise = (categoryName: string, navigateName: string) => {
    navigation.navigate("Categorise", { categoryName, navigateName });
  };

  if (isLoading) return <Indicator />;
  if (error) console.log("error :>> ", error);

  return (
    <SafeAreaView style={styles.container}>
      <GradientText text="Categories" style={styles.gradientText} />
      <View style={styles.buttonContainer1}>
        <View>
          <CustomButton
            title="Men's Clothing"
            type="facebook"
            categorise={() => categorise("Men's Clothing", "men's clothing")}
          />
          <CustomButton
            title="Jewelery"
            type="secondary"
            categorise={() => categorise("Jewelery", "jewelery")}
          />
        </View>
        <View>
          <CustomButton
            title="Electronic"
            type="primary"
            categorise={() => categorise("Electronic", "electronics")}
          />
          <CustomButton
            title="Women's Clothing"
            type="anchor"
            categorise={() =>
              categorise("Women's Clothing", "women's clothing")
            }
          />
        </View>
      </View>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={handleFilter}
        />
        {/* <Pressable style={styles.searchButton} > */}
      </View>

      <View style={styles.productContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredList}
          renderItem={({ item }) => (
            <CardItem
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              toNavigate={() => toNavigate(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
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
  searchArea: { flexDirection: "row", flex: 0.09, gap: 13 },
  input: {
    width: width * 0.6,
    backgroundColor: "white",
    borderRadius: 5,
    flex: 7,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: "dodgerblue",
    borderRadius: 6,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "white",
  },
});
