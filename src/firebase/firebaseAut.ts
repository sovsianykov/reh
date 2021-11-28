
import firebase from "firebase/compat";
import * as  _firebase from "firebase/compat";

declare global {
    const firebase: typeof _firebase;
}
const firebaseConfig = {
    apiKey: "AIzaSyD7owXpzsVaj2M3tb9SicmonJekmaxBxbw",
    authDomain: "kazka-b614d.firebaseapp.com",
    projectId: "kazka-b614d",
    storageBucket: "kazka-b614d.appspot.com",
    messagingSenderId: "1070801490734",
    appId: "1:1070801490734:web:5cbf45f57c7b74c23a60bf"
};


 firebase.initializeApp(firebaseConfig);

 export {firebase}