let firebase = require("firebase/app");
require("firebase/functions");
require("firebase/auth");
require("firebase/firestore");

/* this is the main connection to firebase
in order to initialize a new website you need to open a new firebase project and then:
1. past your project firebaseConfig in this file 
2. configure mail, gmail and facebook authentication
3. manually create this empty documents at the database: Debaters\All_debaters, Debate_History\All_Debate_History
*/

/* main site configuration */
const firebaseConfig = {
    apiKey: "AIzaSyAGr1iRGrMrFEmonZ6ApLW1AVhubl9xSKo",
    authDomain: "debate-queue-management.firebaseapp.com",
    databaseURL: "https://debate-queue-management.firebaseio.com",
    projectId: "debate-queue-management",
    storageBucket: "debate-queue-management.appspot.com",
    messagingSenderId: "959546934290",
    appId: "1:959546934290:web:02dc31dc995031d9c644cb"};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();
export const sendEmails = functions.httpsCallable("sendEmails");
export const changePermissions = functions.httpsCallable("changePermissions");
export default firebase;
