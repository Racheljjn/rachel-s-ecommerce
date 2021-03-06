import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlqgHLlOQtnyaTK2CJBy2hfAGPzvnrqZk",
  authDomain: "rachel-ecommerce-f0299.firebaseapp.com",
  projectId: "rachel-ecommerce-f0299",
  storageBucket: "rachel-ecommerce-f0299.appspot.com",
  messagingSenderId: "451994132898",
  appId: "1:451994132898:web:9e527d0529db346ff092fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments =async(collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db,collectionKey)
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj)=>{
    const docRef = doc(collectionRef,obj.title.toLowerCase())
    batch.set(docRef,obj)
  })
  await batch.commit()
  

}

export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db,"categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc

  },{})

  return categoryMap

}

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {
  if(!userAuth) return 
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }


  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return 
  return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password) return 
  return await signInWithEmailAndPassword(auth,email,password)

}
export const signOutUser=async()=>{
  return await signOut(auth)
}
export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback)