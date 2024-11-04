import firebase from "firebase";

//replace the folling 9 lines with the firebaseConfig variable
//issued to you during setup by firebase
const firebaseConfig = {
  apiKey: "AIzaSyDSUfrmadeupapikey-n0YdPUuSEMjig",
  database: "https://blahblahblah.firebaseapp.com",
  authDomain: "testfirestore-1234.firebaseapp.com",
  projectId: "testfirestore-1234",
  storageBucket: "testfirestore-1234.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:353f5blahblahblahf06f"
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
