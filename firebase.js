import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDm9e9NZp1rcKvgbx34oreSNlL25p_Rme8",
    authDomain: "scrimba-notes-d3d68.firebaseapp.com",
    projectId: "scrimba-notes-d3d68",
    storageBucket: "scrimba-notes-d3d68.appspot.com",
    messagingSenderId: "974194356044",
    appId: "1:974194356044:web:d9b251e5c53d3ceb08e9e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")