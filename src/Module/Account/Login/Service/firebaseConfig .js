import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAGyFwwl7sR8CeTLYdXh35IF-TG5UsMus",
  authDomain: "signin-902be.firebaseapp.com",
  projectId: "signin-902be",
  storageBucket: "signin-902be.appspot.com",
  messagingSenderId: "435996513591",
  appId: "1:435996513591:web:314dd4cc81bd5fe7c2b6b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);