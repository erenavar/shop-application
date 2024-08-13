import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("isLogin").then((value: string | null) => {
      console.log("value :>> ", value);
    });
  }, []);

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("isLogin");
      navigation.navigate("Login");
    } catch (error) {}
  };

  return (
    <View>
      <Button title="Logout" onPress={() => logOut()}></Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
