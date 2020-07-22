import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCXKJnlTqV2VHXccz0FZ4AlDrm8qsUAH8U",
  authDomain: "codenestadb.firebaseapp.com",
  databaseURL: "https://codenestadb.firebaseio.com",
  projectId: "codenestadb",
  storageBucket: "codenestadb.appspot.com",
  messagingSenderId: "840774146490",
  appId: "1:840774146490:web:f59f7b66c27b5077362583",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
