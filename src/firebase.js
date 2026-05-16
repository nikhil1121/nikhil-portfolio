import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPGh9avbCUVMcUi5NFcJs3lovhmuM-hxo",
  authDomain: "nikhil-portfolio-678ee.firebaseapp.com",
  projectId: "nikhil-portfolio-678ee",
  storageBucket: "nikhil-portfolio-678ee.firebasestorage.app",
  messagingSenderId: "218860298329",
  appId: "1:218860298329:web:19605a4437af807729d148"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
