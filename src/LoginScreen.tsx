import React from "react";
import {
  ImageBackground,
  Pressable,
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
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: "lightblue" }]}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: "pink" }]}>
            <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
          </Pressable>
        </View>
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
  container: {
    gap: 5,
  },
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
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    height: "30%",
    gap: 10,
    paddingTop: 20,
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
  },
});
