// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9fkQiuSPtgqZlhIlOZHa5w-vc70f-Lic",
  authDomain: "hackathon-ac870.firebaseapp.com",
  projectId: "hackathon-ac870",
  storageBucket: "hackathon-ac870.appspot.com",
  messagingSenderId: "922476562516",
  appId: "1:922476562516:web:ad4436d25db8f9c57ac5c1",
  measurementId: "G-ZMK8NYYPZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app