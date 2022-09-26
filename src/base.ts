import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD8F9JQDn9zy0OaeTQ0rHp6mDcr2J3rfIM",
    authDomain: "pelle-rewind.firebaseapp.com",
    projectId: "pelle-rewind",
    storageBucket: "pelle-rewind.appspot.com",
    messagingSenderId: "866355944435",
    appId: "1:866355944435:web:4c688bb3589629edd55086",
    measurementId: "G-61Q7EY5X2Q",
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
