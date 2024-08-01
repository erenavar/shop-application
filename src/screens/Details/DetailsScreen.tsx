import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CompositeScreenProps, useRoute } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../../Navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import GradientText from "../../components/GradientText";
import { useQuery } from "@tanstack/react-query";

type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList, "Details">,
  BottomTabScreenProps<TabParamList>
>;

const DetailsScreen: FC<Props> = ({ route }) => {
  const { data, error } = useQuery({
    queryKey: ["ProductDetails"],
    queryFn: async () =>
      fetch("https://fakestoreapi.com/products/" + `${route.params.id}`).then(
        (res) => res.json()
      ),
  });
  console.log("data :>> ", data);

  return (
    <View style={styles.container}>
      <Text>{route.params.id}</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/background.jpg")}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>Body Suit</Text>
          <Text style={styles.category}>Mother Care</Text>
          <Text style={styles.price}>$400</Text>
        </View>
        <View style={styles.stars}>
          <FontAwesome name="star" size={18} color="orange" />
          <Text style={{ fontSize: 16 }}>4.9</Text>
          <Text style={styles.count}>(120)</Text>
        </View>
      </View>
      <GradientText style={styles.descTitle} text="Description" />
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
        molestiae! Qui odit dignissimos tenetur aspernatur, nihil sequi
        cupiditate unde aliquid, sint alias a nobis? Consequatur soluta
      </Text>
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
    flex: 1,
    padding: "5%",
  },
  image: {
    height: "47%",
    width: "100%",
    borderRadius: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  title: {
    fontSize: 18,
    fontFamily: "Helvetica",
  },
  category: {
    fontSize: 16,
    color: "gray",
    marginVertical: "6%",
    fontFamily: "Times New Roman",
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
  count: {
    fontSize: 16,
    color: "gray",
  },
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
