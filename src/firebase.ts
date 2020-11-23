import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
  apiKey: "AIzaSyAVgO-c0fK5K45PiNhlQp5sjwiRgcW5CU4",
  authDomain: "distribution-site-84738.firebaseapp.com",
  databaseURL: "https://distribution-site-84738.firebaseio.com",
  projectId: "distribution-site-84738",
  storageBucket: "distribution-site-84738.appspot.com",
  messagingSenderId: "689939326563",
  appId: "1:689939326563:web:2501ef499a1717e6257a56",
  measurementId: "G-7S1DDDHX1N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;