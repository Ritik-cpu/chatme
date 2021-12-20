// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcrpOk-jPqJzHvuq3wsQ7LCUAhcK3xbqQ",
  authDomain: "chatme-25df5.firebaseapp.com",
  projectId: "chatme-25df5",
  storageBucket: "chatme-25df5.appspot.com",
  messagingSenderId: "508209621773",
  appId: "1:508209621773:web:c159e1af99f6dbd14d1e44",
  measurementId: "G-6H4ZVLBQDR"
};

// Initialize Firebase
 export const APP = initializeApp(firebaseConfig);
export var auth=APP.auth()
// const analytics = getAnalytics(app)