import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("./assets/cute-monkeys-orange-background.jpg")}
        resizeMode="cover"
      >
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
