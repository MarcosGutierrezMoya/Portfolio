import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_APIKEY?.length-2),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN?.length-2),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_PROJECTID?.length-2),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET?.length-2),
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID?.length-2),
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID?.slice(1,process.env.NEXT_PUBLIC_FIREBASE_APPID?.length-2)
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);