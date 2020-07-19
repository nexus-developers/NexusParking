import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvves5hots1fzEMx1yzFOFytHa8YdM6NU",
    authDomain: "nexus-parking.firebaseapp.com",
    databaseURL: "https://nexus-parking.firebaseio.com",
    projectId: "nexus-parking",
    storageBucket: "nexus-parking.appspot.com",
    messagingSenderId: "591972821395",
    appId: "1:591972821395:web:f90047e9551918713d6066",
    measurementId: "G-158M984HZZ"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();