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
// Set firebase config here...
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();
export const sendEmails = functions.httpsCallable("sendEmails");
export const changePermissions = functions.httpsCallable("changePermissions");
export default firebase;
