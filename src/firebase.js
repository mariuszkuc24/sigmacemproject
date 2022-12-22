// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@Firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1SbDP5fXaTuVIlQRoEzwCUYLw5p0jUI",
  authDomain: "sigmacemgit.firebaseapp.com",
  projectId: "sigmacemgit",
  storageBucket: "sigmacemgit.appspot.com",
  messagingSenderId: "697455995265",
  appId: "1:697455995265:web:417956585cb538c67a2080",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);