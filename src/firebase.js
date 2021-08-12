import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCdRmJd3ckM0j047Q6rWc2MZwjC8jeP9xQ",
  authDomain: "netflix-clone-4c932.firebaseapp.com",
  projectId: "netflix-clone-4c932",
  storageBucket: "netflix-clone-4c932.appspot.com",
  messagingSenderId: "24769342810",
  appId: "1:24769342810:web:898ecbe267ee725e7fd763"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ auth };
export default db; 
