import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBZux52jLq2BBCTjCutqCE6XUwnTXWxnfs",
    authDomain: "vapor-c6404.firebaseapp.com",
    projectId: "vapor-c6404",
    storageBucket: "vapor-c6404.appspot.com",
    messagingSenderId: "739668563451",
    appId: "1:739668563451:web:0201c55164c259ea97e75e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)