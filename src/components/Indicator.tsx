import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Indicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"rebeccapurple"} />
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
