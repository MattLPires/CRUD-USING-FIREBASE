import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "teste-df628.firebaseapp.com",
  projectId: "teste-df628",
  storageBucket: "teste-df628.appspot.com",
  messagingSenderId: "286793342483",
  appId: "1:286793342483:web:c064caf8904cf3e5e5e9e6"
};


const app = initializeApp(firebaseConfig);