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
import { Ionicons } from "@expo/vector-icons";
import { ISignup } from "./types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { RootStackParamList } from "../../Navigation/types";
import * as Yup from "yup";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is Invalid")
    .required("Email Cannot be Empty"),
  password: Yup.string()
    .min(5, "Password must be 5 characters")
    .required("Password Cannot be Empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Please Enter Password Again"),
});

const SignUpScreen: FC<Props> = ({ navigation }) => {
  const back = () => navigation.goBack();
  const [state, setState] = useState<ISignup>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signup = async () => {
    if (state.password === state.confirmPassword) {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("TabNavigation");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      alert("Confirm Your Password");
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
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
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setState((prevState) => ({ ...prevState, password: text }))
          }
        />
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setState((prevState) => ({ ...prevState, confirmPassword: text }))
          }
        />
        <Pressable
          style={[styles.button, { backgroundColor: "lightblue" }]}
          onPress={signup}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <Pressable style={styles.back} onPress={back}>
          <Ionicons name="arrow-back" size={24} color="gray" />
          <Text>Back to Login Page</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;

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
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginTop: "2%",
  },
});
