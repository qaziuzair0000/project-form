// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQc1oFZGwymIQs22K9MJBzTO-I9s8Qjg",
  authDomain: "webandmobileclass.firebaseapp.com",
  projectId: "webandmobileclass",
  storageBucket: "webandmobileclass.appspot.com",
  messagingSenderId: "995570584570",
  appId: "1:995570584570:web:cc5e28a0f7237ec6553243",
  measurementId: "G-B4XVWMZQ9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
