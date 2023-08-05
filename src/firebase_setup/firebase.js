// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvNWlA3zW066ILxABXWyD294rd61iGQuA",
  authDomain: "task-manager-a6c54.firebaseapp.com",
  projectId: "task-manager-a6c54",
  storageBucket: "task-manager-a6c54.appspot.com",
  messagingSenderId: "616728789915",
  appId: "1:616728789915:web:128ae6fe86eaaffd01573e",
  measurementId: "G-RQW0GCFYLK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
