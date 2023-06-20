
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite" 

const firebaseConfig = {
  apiKey: "AIzaSyBTP-qmVd1AFeANUuAdcm0XICYBXatN0Rs",
  authDomain: "tiktok---jornada-8423d.firebaseapp.com",
  projectId: "tiktok---jornada-8423d",
  storageBucket: "tiktok---jornada-8423d.appspot.com",
  messagingSenderId: "22398992718",
  appId: "1:22398992718:web:14aabe8c6b6176b149de1f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;