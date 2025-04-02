// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your Firebase configuration (Replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyC6zolfbumlGMBFCCXGLEuT-ShmSTnJmFs",
  authDomain: "income-b9c80.firebaseapp.com",
  projectId: "income-b9c80",
  storageBucket: "income-b9c80.appspot.com",
  messagingSenderId: "216375902842",
  appId: "1:216375902842:web:c94db01dc15cb9fa15f1c3",
  measurementId: "G-NKJF7M3Q8H",
  databaseURL: "https://income-b9c80-default-rtdb.firebaseio.com/" // Firebase Realtime Database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Write data to Firebase Realtime Database
const writeData = () => {
  const databaseRef = ref(db, 'users/123'); // Define the path in your database
  set(databaseRef, {
    username: "exampleUser",
    email: "user@example.com"
  })
  .then(() => {
    console.log("Data written successfully!");
  })
  .catch((error) => {
    console.error("Error writing data: ", error);
  });
};

// Call the function to write data to Firebase
writeData();
