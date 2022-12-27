// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpIauNIu_NSFy91UxVfvXMvzMWeMataIA",
  authDomain: "proyecto-coderhouse-c3e74.firebaseapp.com",
  projectId: "proyecto-coderhouse-c3e74",
  storageBucket: "proyecto-coderhouse-c3e74.appspot.com",
  messagingSenderId: "185597257920",
  appId: "1:185597257920:web:484e82505ad678135aa525"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}