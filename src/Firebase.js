import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDvjervsyc0QJZiRkByZrCE0AHcbtgU-s",
  authDomain: "newshub-b792c.firebaseapp.com",
  projectId: "newshub-b792c",
  storageBucket: "newshub-b792c.appspot.com",
  messagingSenderId: "870437693213",
  appId: "1:870437693213:web:4f6cbc24faff5af41263f4",
  measurementId: "G-G7THES7D6J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
