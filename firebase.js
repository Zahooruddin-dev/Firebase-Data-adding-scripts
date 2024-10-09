// Import the Firebase libraries
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEjghBbPpZnJujVYq9ENvEVwc8bjf7X0k",
  authDomain: "vanlife-a1356.firebaseapp.com",
  projectId: "vanlife-a1356",
  storageBucket: "vanlife-a1356.appspot.com",
  messagingSenderId: "825710280807",
  appId: "1:825710280807:web:1e57dfe9a2d1ebb57394c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;