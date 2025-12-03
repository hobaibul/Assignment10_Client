
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDMaP8_6o9E0M8JXZH-kGIMM4zx8hVL2zs",
  authDomain: "hobbyhub-bdc4b.firebaseapp.com",
  projectId: "hobbyhub-bdc4b",
  storageBucket: "hobbyhub-bdc4b.firebasestorage.app",
  messagingSenderId: "667377479278",
  appId: "1:667377479278:web:cab7c51f6f649f8d7e007f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
