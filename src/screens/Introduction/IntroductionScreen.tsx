import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export let isLogin = {
  value: false,
};

const IntroductionScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    if (isLogin.value) {
      navigation.navigate("TabParamList", { screen: "Home" });
    } else {
      navigation.navigate("Login");
    }
  }, []);

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
