import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ILogin } from "./types";
import { RootStackParamList } from "../../Navigation/types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: FC<Props> = ({ navigation }) => {
  const auth = getAuth();
  const [state, setState] = useState<ILogin>({
    email: "",
    password: "",
  });

  const login = () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("TabNavigation");
      })
      .catch((error) => {
        alert("test");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const toSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setState((prevState) => ({ ...prevState, email: text }))
          }
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setState((prevState) => ({ ...prevState, password: text }))
          }
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { backgroundColor: "lightblue" }]}
            onPress={login}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "pink" }]}
            onPress={toSignup}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.buttonText}>CREATE AN</Text>
              <Text style={styles.buttonText}>ACCOUNT</Text>
            </View>
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
