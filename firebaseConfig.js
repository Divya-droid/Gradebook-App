

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyADyCqAeb_rCH2VSIEFLmwWSggI_szp4NQ",
    authDomain: "gradebook-app-7ffc9.firebaseapp.com",
    projectId: "gradebook-app-7ffc9",
    storageBucket: "gradebook-app-7ffc9.appspot.com",
    messagingSenderId: "942501608938",
    appId: "1:942501608938:web:47ddfa0b8da35f7be88693",
    measurementId: "G-SQ96F30TY4"
};

const grade = initializeApp(firebaseConfig);

const db = getFirestore(grade);



export default db;