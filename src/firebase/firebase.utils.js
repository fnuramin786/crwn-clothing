import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA7kJAn4ixqrpCPwBAsWq7VzoZ3dNi0p3Q",
    authDomain: "crwn-db-52380.firebaseapp.com",
    projectId: "crwn-db-52380",
    storageBucket: "crwn-db-52380.appspot.com",
    messagingSenderId: "721355841937",
    appId: "1:721355841937:web:56f978153b8d8c766dfa30",
    measurementId: "G-GVDTS9C2XX"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt =  new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
