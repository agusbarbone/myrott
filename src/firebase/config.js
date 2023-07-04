
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBY5-f79e3DJMYIo6BqxyZ0oCxSfAlwgdM",
  authDomain: "myrott-f55e2.firebaseapp.com",
  projectId: "myrott-f55e2",
  storageBucket: "myrott-f55e2.appspot.com",
  messagingSenderId: "258090277509",
  appId: "1:258090277509:web:7ae07061b8768f89f9e7ec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 