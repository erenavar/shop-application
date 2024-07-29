import { StyleSheet, View } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";

interface IProps {
  title: string;
  type: any;
}

const CustomButton = (props: IProps) => {
  return (
    <View style={styles.buttons}>
      <ThemedButton name="rick" type={props.type} width={150}>
        {props.title}
      </ThemedButton>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttons: { marginTop: 15 },
});
