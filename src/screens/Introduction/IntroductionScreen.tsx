import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

let isLogin = true;

const IntroductionScreen = () => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   if (isLogin) {
  //     navigation.navigate("TabParamList", { screen: "Home" });
  //   }
  // }, []);

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
