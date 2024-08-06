import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";

interface IProps extends PressableProps {
  title: string;
  type: any;
  categorise?: () => void;
}

const CustomButton = (props: IProps) => {
  return (
    <Pressable style={styles.buttons}>
      <ThemedButton
        name="rick"
        type={props.type}
        width={150}
        onPress={props.categorise}
      >
        {props.title}
      </ThemedButton>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttons: { marginTop: 15 },
});
