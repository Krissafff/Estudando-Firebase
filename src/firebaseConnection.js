import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAhR4m2CsZmJfFakJpYp0Irr1E4IXQzDNg",
    authDomain: "estudand-firebase.firebaseapp.com",
    projectId: "estudand-firebase",
    storageBucket: "estudand-firebase.appspot.com",
    messagingSenderId: "454421084817",
    appId: "1:454421084817:web:4f5418b858a2345a99dd30",
    measurementId: "G-JCV1VGQJMY"
  };
  
  if(!firebase.apps.length){
    //Abrir a minha conexao
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;