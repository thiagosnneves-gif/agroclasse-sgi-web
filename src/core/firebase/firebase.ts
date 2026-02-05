import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJRKvmTmU54nSkjbsjEmfTP7UKwnZktbs",
  authDomain: "agroclasse-sgi.firebaseapp.com",
  projectId: "agroclasse-sgi",
  storageBucket: "agroclasse-sgi.firebasestorage.app",
  messagingSenderId: "562445662206",
  appId: "1:562445662206:web:98fca6ced32699eb0a72af"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
