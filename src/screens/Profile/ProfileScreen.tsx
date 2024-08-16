import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { IData } from "./types";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [datas, setDatas] = useState<IData>({ email: "", displayName: "" });
  const auth = getAuth();
  const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log("user :>> ", user);
      console.log("user.email :>> ", user.email);
      const uid = user.uid;
    } else {
    }
  });

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("isLogin");
      navigation.navigate("Login");
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.email}</Text>
      <View style={styles.datas}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={user?.email}
          onChangeText={(text) => {
            setDatas((prevState) => ({ ...prevState, email: text }));
          }}
        />
      </View>
      <View style={styles.datas}>
        <Text style={styles.label}>Display Name:</Text>
        <TextInput
          style={styles.input}
          value={user?.displayName}
          onChangeText={(text) => {
            setDatas((prevState) => ({ ...prevState, displayName: text }));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Update"
          onPress={() => logOut()}
        ></Button>
        <Button
          style={styles.button}
          title="Logout"
          onPress={() => logOut()}
        ></Button>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  title: { fontSize: 30, marginBottom: 20 },
  datas: { flexDirection: "row", marginBottom: 10, alignItems: "center" },
  label: {
    flex: 2,
  },
  input: {
    flex: 5,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    color: "red",
  },
});
