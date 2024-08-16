import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const useFavourite = () => {
  const [favArray, setFavArray] = useState<string[]>([]);

  const getFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("favorites");
      setFavArray(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error("Error reading favourites from AsyncStorage", e);
    }
  };

  const addFavourite = async (item: any) => {
    try {
      const newFavArray = [...favArray, item];
      setFavArray(newFavArray);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavArray));
    } catch (e) {
      console.error("Error adding favourite to AsyncStorage", e);
    }
  };

  const removeFavourite = async (item: string) => {
    try {
      Alert.alert(
        'Delete',
        'Item Will be Deleted',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'OK', 
            onPress: () =>    {
              const newFavArray = favArray.filter((fav) => fav !== item);
              setFavArray(newFavArray);
             AsyncStorage.setItem("favorites", JSON.stringify(newFavArray))}
          },
        ],
        {cancelable: false},
      );
   
    } catch (e) {
      console.error("Error removing favourite from AsyncStorage", e);
    }
  };

  const deleteAllItems = async () => {
    try {
      await AsyncStorage.removeItem("favorites");
    } catch (error) {}
  };

  useEffect(() => {
    getFavourites();
  }, [favArray]);

  return {
    favArray,
    addFavourite,
    removeFavourite,
    getFavourites,
    deleteAllItems,
  };
};

export default useFavourite;
