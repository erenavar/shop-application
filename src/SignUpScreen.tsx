import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignUpScreen = () => {
  return <Text>SignUpScreen</Text>;
};

export default SignUpScreen;
