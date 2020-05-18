import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAg0HrBZ9nOp_mE8AHWEX-LpHsfMP5GcYM',
  authDomain: 'notes-95e53.firebaseapp.com',
  databaseURL: 'https://notes-95e53.firebaseio.com',
  projectId: 'notes-95e53',
  storageBucket: 'notes-95e53.appspot.com',
  messagingSenderId: '987394703507',
  appId: '1:987394703507:web:08123b65af59a625b9cd66',
  measurementId: 'G-J3QE40N7XD',
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child('notes');
