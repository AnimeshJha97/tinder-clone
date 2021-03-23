import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRQIPjt9SlNDF4DD8wiasIwV_vQagmv3o",
    authDomain: "tinder-clone-f8966.firebaseapp.com",
    projectId: "tinder-clone-f8966",
    storageBucket: "tinder-clone-f8966.appspot.com",
    messagingSenderId: "676249686851",
    appId: "1:676249686851:web:37a60dd72dff53e955d5f6",
    measurementId: "G-MSX1VD9S76"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  export default database;