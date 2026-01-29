import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACXYhzRqgrZ1B-aN85R_0_s4oxTivQBRo",
  authDomain: "agroclasse-sgi-web-01427-637c3.firebaseapp.com",
  projectId: "agroclasse-sgi-web-01427-637c3",
  storageBucket: "agroclasse-sgi-web-01427-637c3.firebasestorage.app",
  messagingSenderId: "184664271707",
  appId: "1:184664271707:web:f947648c6a65bedf07487e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
