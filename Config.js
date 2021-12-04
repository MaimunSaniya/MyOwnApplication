import firebase from 'firebase';

var firebaseConfig = {
 apiKey: "AIzaSyBWtvme9OquhBjL8UFXDY17QhtJ7zj0wtA",
  authDomain: "myownapplication-601f0.firebaseapp.com",
  projectId: "myownapplication-601f0",
  storageBucket: "myownapplication-601f0.appspot.com",
  messagingSenderId: "848293918131",
  appId: "1:848293918131:web:524f2c3c5379dfca3407c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
