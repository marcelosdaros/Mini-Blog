import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCqBL3HxgP-qYkCHj6qwNejSTstnWBGqsQ",
  authDomain: "mini-blog-e4337.firebaseapp.com",
  projectId: "mini-blog-e4337",
  storageBucket: "mini-blog-e4337.appspot.com",
  messagingSenderId: "910247508596",
  appId: "1:910247508596:web:0a7f3e1a607fbbb9e6af21"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };