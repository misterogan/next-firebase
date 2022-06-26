// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNI4pgu05FsYbff2xhLQBEToHenc7SMUs",
    authDomain: "nextfirebase-b315d.firebaseapp.com",
    projectId: "nextfirebase-b315d",
    storageBucket: "nextfirebase-b315d.appspot.com",
    messagingSenderId: "179821628303",
    appId: "1:179821628303:web:11e95df0879d9b81d599fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }