import { ThemedButton } from "react-native-really-awesome-button";

interface IProps {
  title: string;
  type: any;
}

const CustomButton = (props: IProps) => {
  return (
    <ThemedButton name="rick" type={props.type}>
      {props.title}
    </ThemedButton>
  );
};

export default CustomButton;
