// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmutLVixGPS_MsJUD13GX61yGPte4FRA",
  authDomain: "notfound-b4509.firebaseapp.com",
  projectId: "notfound-b4509",
  storageBucket: "notfound-b4509.appspot.com",
  messagingSenderId: "391391561790",
  appId: "1:391391561790:web:23f8f0e991c575b0ee696f",
  measurementId: "G-FR0LTJQB9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (username,email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            email,
            username:username.toLowerCase(),
            name: "",
            age: ""
        })
        // await setDoc(doc(db,"chats",user.uid),{
        //     chatData:[]
        // })
    } catch (error) {
        console.error(error);
    }
}
const login = async (email, password) => {
    try{
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

export {signup, login}