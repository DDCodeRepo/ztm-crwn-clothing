import { initializeApp } from 'firebase/app';
import { collection, doc, setDoc, getDoc, getFirestore } from "firebase/firestore"; 
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7YKsuimSGOT5ooC-QMV49qDSrICibrz4",
    authDomain: "ztm-crwn-db-91c4a.firebaseapp.com",
    projectId: "ztm-crwn-db-91c4a",
    storageBucket: "ztm-crwn-db-91c4a.appspot.com",
    messagingSenderId: "516583991023",
    appId: "1:516583991023:web:9ffa600f3b1adb2c2b5d1a"
  };


//firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const userRef = collection(firestore, "users");


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(userRef, `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return docRef;

};

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;