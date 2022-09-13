import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBamcp1_gsmq1X4Bn6bKYA8KWA9ky-puUo",
    authDomain: "linkedin-clone-369f7.firebaseapp.com",
    projectId: "linkedin-clone-369f7",
    storageBucket: "linkedin-clone-369f7.appspot.com",
    messagingSenderId: "659485633728",
    appId: "1:659485633728:web:fb109a0722b893a0d15125",
    measurementId: "G-BHVCCZK5C3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,storage,provider};
  export default db;