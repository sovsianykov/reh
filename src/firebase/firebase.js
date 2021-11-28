import { getFirestore  } from "@firebase/firestore"
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7owXpzsVaj2M3tb9SicmonJekmaxBxbw",
    authDomain: "kazka-b614d.firebaseapp.com",
    projectId: "kazka-b614d",
    storageBucket: "kazka-b614d.appspot.com",
    messagingSenderId: "1070801490734",
    appId: "1:1070801490734:web:5cbf45f57c7b74c23a60bf"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)