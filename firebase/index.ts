// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoTcnbYyT5SAtpUpRCPnVZylpsSHnFIOY",
    authDomain: "flare-code-academy.firebaseapp.com",
    projectId: "flare-code-academy",
    storageBucket: "flare-code-academy.appspot.com",
    messagingSenderId: "425065511483",
    appId: "1:425065511483:web:7bfd3fbdfb1bf4124e3a1e",
    measurementId: "G-G60K5Z33P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }