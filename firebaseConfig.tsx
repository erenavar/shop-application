import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsHZ4eJ346yeqw4Izv2mPJVhXpUdmwVUw",
  authDomain: "shop-application-94bff.firebaseapp.com",
  projectId: "shop-application-94bff",
  storageBucket: "shop-application-94bff.appspot.com",
  messagingSenderId: "463286412776",
  appId: "1:463286412776:web:cc27b6c11458b6bad6305d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
