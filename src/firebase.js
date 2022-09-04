import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJgOQUS7vWNsVsRk0uyZMFiS5AiUEW3To",
  authDomain: "clone-77efc.firebaseapp.com",
  projectId: "clone-77efc",
  storageBucket: "clone-77efc.appspot.com",
  messagingSenderId: "849367559752",
  appId: "1:849367559752:web:08ecde720cab13c53ff27d",
  measurementId: "G-CH0Z9KJWJD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };