import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsHZ4eJ346yeqw4Izv2mPJVhXpUdmwVUw",
  authDomain: "shop-application-94bff.firebaseapp.com",
  projectId: "shop-application-94bff",
  storageBucket: "shop-application-94bff.appspot.com",
  messagingSenderId: "463286412776",
  appId: "1:463286412776:web:cc27b6c11458b6bad6305d",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
