import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC5xDwOEbbUUX2A_V4D3IxLqHUdGI74xWE",
    authDomain: "foodrestaurant-v1.firebaseapp.com",
    projectId: "foodrestaurant-v1",
    storageBucket: "foodrestaurant-v1.appspot.com",
    messagingSenderId: "435236425685",
    appId: "1:435236425685:web:0453ca23a64227bbcd375c"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);