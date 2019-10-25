import firebase from 'firebase';



firebase.initializeApp({
    // config .. 
    apiKey: "AIzaSyDAE3Hn500kJm7CoDLS_K7nBAmw4cSUMLI",
    authDomain: "isammsummerchallenge.firebaseapp.com",
    databaseURL: "https://isammsummerchallenge.firebaseio.com",
    projectId: "isammsummerchallenge",
    storageBucket: "isammsummerchallenge.appspot.com",
    messagingSenderId: "105238563988"
});


const dbstore = firebase.firestore();


export { firebase as default, dbstore } ;
