import firebse from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCptaz_c_U0bPoI-CSRoogWkU_XXEEWBo",
    authDomain: "tinder-clone-47fb7.firebaseapp.com",
    projectId: "tinder-clone-47fb7",
    storageBucket: "tinder-clone-47fb7.appspot.com",
    messagingSenderId: "783698471009",
    appId: "1:783698471009:web:7f3e0f66099a9ce5336220",
    measurementId: "G-DE7T8L7X81"
  };

  const firebaseApp=firebse.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();

  export default database;