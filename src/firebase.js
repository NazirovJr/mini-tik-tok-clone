import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBOrVUrlIEqEMtXRV3M-o7AJ_YsqbBdPZM",
    authDomain: "tik-tok-clone-caa38.firebaseapp.com",
    projectId: "tik-tok-clone-caa38",
    storageBucket: "tik-tok-clone-caa38.appspot.com",
    messagingSenderId: "1068943852454",
    appId: "1:1068943852454:web:cdc1ee081dc345ad6d4567",
    measurementId: "G-94STL2EDZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db