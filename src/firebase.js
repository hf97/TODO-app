import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6z70b_ymtgC-8QPuT2l_ZEp1fBw2rta0",
  authDomain: "todo-app-c1e66.firebaseapp.com",
  databaseURL: "https://todo-app-c1e66.firebaseio.com",
  projectId: "todo-app-c1e66",
  storageBucket: "todo-app-c1e66.appspot.com",
  messagingSenderId: "447812958916",
  appId: "1:447812958916:web:f85d67877798942b6f2791",
  measurementId: "G-6559S2BV71"
});

const db = firebaseApp.firestore();

export default db;