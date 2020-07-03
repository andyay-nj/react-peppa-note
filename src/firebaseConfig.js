import * as firebase from 'firebase';

import 'firebase/firestore';
// import * as admin from 'firebase-admin';

let database;
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

const fire = () => {
    // if (!firebase.apps.length) {
    //     // Initialize the default app
    //     firebase.initializeApp(config);
    // }
    firebase.initializeApp();
    firebase.database();
};

const auth = firebase.auth();

const userId = auth.currentUser.uid;
const getFireDB = () => {
    return database.ref('/note' + userId).once('value');
}

export { fire, getFireDB };