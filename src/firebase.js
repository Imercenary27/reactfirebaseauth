import { getAuth, onAuthStateChanged } from "firebase/auth";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBJRUshEhXQzL3tSf5TFLnG05YOcdWrYFM",
  authDomain: "firebassobatnumber.firebaseapp.com",
  projectId: "firebassobatnumber",
  storageBucket: "firebassobatnumber.appspot.com",
  messagingSenderId: "687749980576",
  appId: "1:687749980576:web:4634c670bc1f9d93d784c5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


