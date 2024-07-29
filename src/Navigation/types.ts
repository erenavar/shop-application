import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    TabNavigation: NavigatorScreenParams<TabParamList> | undefined
    Details: {
      id:number
    }
  };

  export type TabParamList = {
    Home: undefined,
    Cart:undefined,
    Favourites: undefined,
    Profile: undefined
  }