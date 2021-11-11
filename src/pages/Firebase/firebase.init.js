import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;
