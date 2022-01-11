import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCj66FE6yvmuNAUKh-YpZLBN9qnVKqkKVU",
  authDomain: "bookface-becode.firebaseapp.com",
  databaseURL: "https://bookface-becode-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookface-becode",
  storageBucket: "bookface-becode.appspot.com",
  messagingSenderId: "254329912637",
  appId: "1:254329912637:web:bb266f5dc770233cd95954",
  measurementId: "G-WXHVX9D66R"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db