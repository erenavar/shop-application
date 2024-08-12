import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Introduction: undefined,
    Details: {
      id:number
    }
    Categorise: {
      categoryName: string
      navigateName: string
    }
    TabNavigation: NavigatorScreenParams<TabParamList> | undefined
  };

  export type TabParamList = {
    Home: undefined,
    Cart:undefined,
    Favourites: undefined,
    Profile: undefined
  }