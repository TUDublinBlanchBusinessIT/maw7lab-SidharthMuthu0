import firebase from "firebase";

//replace the folling 9 lines with the firebaseConfig variable
//issued to you during setup by firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCXPJ2EbBEenfYvXiB9DwTh5QNWLsSwEE",
  database: "https://testfb8-a772e.firebaseapp.com",
  authDomain: "mobileapplication-week7.firebaseapp.com",
  projectId: "fir-8465a",
  storageBucket: "fir-8465a.firebasestorage.app",
  messagingSenderId: "771579533066",
  appId: "1:771579533066:web:4ed7812f67d1eb830f0cf3"
};

let app;

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();

export {db};
