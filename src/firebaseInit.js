import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQX5w-cASFvPCMGa7Ul5rb_lMp6KWgylY",
  authDomain: "expense-tracker-afdeb.firebaseapp.com",
  projectId: "expense-tracker-afdeb",
  storageBucket: "expense-tracker-afdeb.appspot.com",
  messagingSenderId: "539943040933",
  appId: "1:539943040933:web:85ee3abd76be6a1e8a1a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
