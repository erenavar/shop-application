import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let isLogin = {
  value: false,
};

const IntroductionScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getLoginDetail();
  }, []);

  const getLoginDetail = async () => {
    try {
      const value = await AsyncStorage.getItem("isLogin");

      if (value) {
        navigation.navigate("TabNavigation", { screen: "Home" });
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/introImg.jpg")}
      />
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({});
