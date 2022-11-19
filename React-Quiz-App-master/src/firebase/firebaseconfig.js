// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8BoisMeU5UYcQ54uyieQMLur_ND9qFtw",
  authDomain: "react-quiz-app-ff7e4.firebaseapp.com",
  projectId: "react-quiz-app-ff7e4",
  storageBucket: "react-quiz-app-ff7e4.appspot.com",
  messagingSenderId: "7038053728",
  appId: "1:7038053728:web:6adf4a1dcbe6edd1c1c205",
  measurementId: "G-1CYM6PB1RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app