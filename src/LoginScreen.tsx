import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#999"
        />
        <TextInput style={styles.input} placeholder="password" />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
  text: {
    fontSize: 50,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    width: 300,
    marginVertical: 10,
    backgroundColor: "white",
    color: "red",
  },
});
