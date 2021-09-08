import * as firebase from 'firebase/app';
import 'firebase/firestone';

const firebaseConfig = {
    apiKey: "AIzaSyCiqXF5nc4e4xaQEEOg5XBnV3Qm-f_iX80",
    authDomain: "hulkstore-c4e86.firebaseapp.com",
    projectId: "hulkstore-c4e86",
    storageBucket: "hulkstore-c4e86.appspot.com",
    messagingSenderId: "820349306931",
    appId: "1:820349306931:web:b1fbf6ef29211f8bcc7b46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const projectFirestone = firebase.firestone();