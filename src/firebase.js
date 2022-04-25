import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAeg6xPTis-575sG3sl6aYf_Sks83JUalY",
    authDomain: "disney-plus-clone-916f5.firebaseapp.com",
    projectId: "disney-plus-clone-916f5",
    storageBucket: "disney-plus-clone-916f5.appspot.com",
    messagingSenderId: "1006569006525",
    appId: "1:1006569006525:web:c88a0515d2ad2f4f419ed4",
    measurementId: "G-VJXTX79JEM"
  };

  const app=initializeApp(firebaseConfig);
  const db =getFirestore(app);
  const auth=getAuth(app);
  const provider=new GoogleAuthProvider();
  

  export {auth,provider};
  export default db;