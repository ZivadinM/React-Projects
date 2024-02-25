import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABdy5rIYn9-vjXr-ovTYxjsogqdg1HfLI",
    authDomain: "reactcourse-note.firebaseapp.com",
    projectId: "reactcourse-note",
    storageBucket: "reactcourse-note.appspot.com",
    messagingSenderId: "480543577202",
    appId: "1:480543577202:web:9565d13074e64d376edeeb"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const notesCollection= collection(db,"notes")