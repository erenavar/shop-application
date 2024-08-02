import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps, useRoute } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import GradientText from "../../components/GradientText";
import { useQuery } from "@tanstack/react-query";
import Indicator from "../../components/Indicator";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Details">,
  BottomTabScreenProps<TabParamList>
>;

const DetailsScreen: FC<Props> = ({ route }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ProductDetails"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products/" + `${route.params.id}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) return <Indicator />;
  if (error) console.log("error :>> ", error);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: data?.image }}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <View style={styles.firstColumn}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.category}>{data.category}</Text>
            <Text style={{ fontSize: 16 }}>${data.price}</Text>
          </View>
          <View style={styles.stars}>
            <FontAwesome name="star" size={18} color="orange" />
            <Text style={{ fontSize: 16 }}>{data.rating.rate}</Text>
            <Text style={styles.count}>({data.rating.count})</Text>
          </View>
        </View>
        <GradientText style={styles.descTitle} text="Description" />
        <Text style={{ flex: 1 }}>{data.description}</Text>
      </ScrollView>

      <View style={styles.bottom}>
        <Pressable style={styles.heart}>
          <FontAwesome name="heart-o" size={24} color="rebeccapurple" />
          {/* <FontAwesome name="heart" size={24} color="black" /> */}
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            ADD TO CART
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "5%",
  },
  scroll: { paddingBottom: 60 },
  image: { height: "100%", width: "100%", borderRadius: 5 },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "3%",
  },
  firstColumn: {
    flex: 7,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica",
  },
  category: {
    fontSize: 16,
    color: "gray",
    marginVertical: "6%",
    fontFamily: "Times New Roman",
    fontWeight: "500",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
    flex: 3,
  },
  count: { fontSize: 16, color: "gray" },
  descTitle: {
    fontSize: 20,
    marginVertical: "5%",
  },
  descText: { fontSize: 16, lineHeight: 20 },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "rebeccapurple",
    marginLeft: "6%",
    height: "35%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    backgroundColor: "#CBC3E3",
    height: "35%",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
