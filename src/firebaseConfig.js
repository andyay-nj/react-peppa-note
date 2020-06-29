import * as firebase from 'firebase';

let database;
let config = {
    apiKey: "AIzaSyBfJBVDWe2i01MMl0TY9wngqlUXvDczryY",
    authDomain: "firebase-adminsdk-r1n1a@peppa-note.iam.gserviceaccount.com",
    databaseURL: "https://peppa-note.firebaseio.com",
    projectId: "peppa-note",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
}

const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
  database = firebase.database()
};

const getFireDB = () => {
    return database.ref('/users/').once('value');
}

export { fire, getFireDB };