import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBfJBVDWe2i01MMl0TY9wngqlUXvDczryY",
    authDomain: "peppa-note.firebaseapp.com",
    databaseURL: "https://peppa-note.firebaseio.com",
    projectId: "peppa-note",
    storageBucket: "peppa-note.appspot.com",
    messagingSenderId: "405266958541",
    appId: "1:405266958541:web:cdf9a3add82f4d7ef70184",
    measurementId: "G-L4FH0EVH1F"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const firedb = firebase.database();

export { firestore, firebase, firedb };