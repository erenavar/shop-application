import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  useEffect(() => {
    AsyncStorage.getItem("isLogin").then((value: string | null) => {
      console.log("value :>> ", value);
    });
  }, []);

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
