// @babel/ignore
import { initializeApp } from "firebase/app";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDr6ipBD44W8joZS2Dm72afkgXXw7hpd0",
  authDomain: "trackmymoney-65593.firebaseapp.com",
  projectId: "trackmymoney-65593",
  storageBucket: "trackmymoney-65593.appspot.com",
  messagingSenderId: "818559197813",
  appId: "1:818559197813:web:6d8133f6dd21daaac74e3c",
  measurementId: "G-KKJZ38DF0X"
};

const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, firestore };