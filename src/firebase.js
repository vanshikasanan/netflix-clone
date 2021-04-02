import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4hW9KdgiEIKtgWL9sUrDrz8Bj7gUXA_4",
    authDomain: "netflix-clone-fa67b.firebaseapp.com",
    projectId: "netflix-clone-fa67b",
    storageBucket: "netflix-clone-fa67b.appspot.com",
    messagingSenderId: "452018920438",
    appId: "1:452018920438:web:c3506b4ef1a4807d9185d7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export{ auth };
export default db; 