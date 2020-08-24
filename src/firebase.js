import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyAC7mtru6WxfUyivwFm7ZkkojtP2U8Q8Eg",
    authDomain: "spotifyproject-e8a72.firebaseapp.com",
    databaseURL: "https://spotifyproject-e8a72.firebaseio.com",
    projectId: "spotifyproject-e8a72",
    storageBucket: "spotifyproject-e8a72.appspot.com",
    messagingSenderId: "610696373407",
    appId: "1:610696373407:web:17415aa6a8174e0bdbeeaa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export {db} 