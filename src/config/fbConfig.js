import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var Config = {
    apiKey: "AIzaSyAtZ3aItl5c5gYuvextZ3bpIYPxPoVXAAA",
    authDomain: "project-7f18b.firebaseapp.com",
    databaseURL: "https://project-7f18b.firebaseio.com",
    projectId: "project-7f18b",
    storageBucket: "project-7f18b.appspot.com",
    messagingSenderId: "57696053754",
    appId: "1:57696053754:web:4970bef898216621571c43",
    measurementId: "G-DXMKCZGFJ5"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  
  // firebase.firestore().settings({timestampsInSnapshots:true});
  
  export default firebase;