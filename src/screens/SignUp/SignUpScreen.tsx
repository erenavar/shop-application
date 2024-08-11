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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { RootStackParamList } from "../../Navigation/types";
import { Formik } from "formik";
import { ISignup } from "./types";
import { validation } from "./yup";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignUpScreen: FC<Props> = ({ navigation }) => {
  const back = () => navigation.goBack();

  const signup = async (values: ISignup) => {
    if (values.password === values.password) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("TabNavigation");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      alert("Please, Confirm Your Password");
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
        <Formik
          validationSchema={validation}
          onSubmit={(values, { resetForm }) => {
            signup(values);
            resetForm();
          }}
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            touched,
            handleBlur,
            values,
            errors,
          }) => (
            <>
              <TextInput
                value={values.email}
                autoCapitalize="none"
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                onTouchStart={handleBlur("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && errors.password && (
                <Error message={errors.email} />
              )}
              <TextInput
                secureTextEntry
                value={values.password}
                autoCapitalize="none"
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                onTouchStart={handleBlur("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && errors.email && (
                <Error message={errors.password} />
              )}
              <TextInput
                secureTextEntry
                value={values.confirmPassword}
                autoCapitalize="none"
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                onTouchStart={handleBlur("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Error message={errors.confirmPassword} />
              )}
              <Pressable
                style={[styles.button, { backgroundColor: "lightblue" }]}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>Signup</Text>
              </Pressable>
            </>
          )}
        </Formik>
        <Pressable style={styles.back} onPress={back}>
          <Ionicons name="arrow-back" size={24} color="gray" />
          <Text>Back to Login Page</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;

const Error = ({ message }) => <Text style={styles.error}>{message}</Text>;

const styles = StyleSheet.create({
  error: {
    fontWeight: "bold",
    color: "red",
    fontSize: 13,
  },
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
