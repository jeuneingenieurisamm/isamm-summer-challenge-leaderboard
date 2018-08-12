import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAE3Hn500kJm7CoDLS_K7nBAmw4cSUMLI",
    authDomain: "isammsummerchallenge.firebaseapp.com",
    databaseURL: "https://isammsummerchallenge.firebaseio.com",
    projectId: "isammsummerchallenge",
    storageBucket: "isammsummerchallenge.appspot.com",
    messagingSenderId: "105238563988"

};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
export const dbstore = firebase.firestore();
