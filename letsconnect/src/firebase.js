import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyCJYJxQz1iykKiDAWzXaxl36QWUPYK1s",
    authDomain: "messenger-4ef89.firebaseapp.com",
    databaseURL: "https://messenger-4ef89.firebaseio.com",
    projectId: "messenger-4ef89",
    storageBucket: "messenger-4ef89.appspot.com",
    messagingSenderId: "639245081066",
    appId: "1:639245081066:web:ee55ea6ef899d9f5bcfa93"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider};

export default db;