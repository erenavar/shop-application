import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";
import { IData } from "./types";

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [datas, setDatas] = useState<IData>({ email: "", displayName: "" });
  const auth = getAuth();
  const user = auth.currentUser;

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("isLogin");
      navigation.navigate("Login");
    } catch (error) {}
  };

  const handleUpdate = () => {
    const { displayName, email } = datas;

    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
        console.log("Updated displayName:", auth.currentUser.displayName);

        return updateEmail(auth.currentUser, email);
      })
      .then(() => {
        console.log("Email updated successfully:", auth.currentUser.email);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    console.log("auth.displayName :>> ", auth.currentUser?.displayName);
  }, [auth.currentUser?.displayName]);

  console.log("auth.displayName :>> ", auth.displayName);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.email}</Text>
      <View style={styles.datas}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={datas.email}
          onChangeText={(text) => {
            setDatas((prevState) => ({ ...prevState, email: text }));
          }}
        />
      </View>
      <View style={styles.datas}>
        <Text style={styles.label}>Display Name:</Text>
        <TextInput
          style={styles.input}
          value={datas.displayName}
          onChangeText={(text) => {
            setDatas((prevState) => ({ ...prevState, displayName: text }));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={handleUpdate}></Button>
        <Button title="Logout" onPress={logOut}></Button>
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
