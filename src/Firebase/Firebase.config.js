// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6AVdeKW28EGX7SFx3NHKqzSStphECHGE",
  authDomain: "dragon-news-breaking-e25cb.firebaseapp.com",
  projectId: "dragon-news-breaking-e25cb",
  storageBucket: "dragon-news-breaking-e25cb.firebasestorage.app",
  messagingSenderId: "218526714263",
  appId: "1:218526714263:web:48188938572d7611c0dcd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app



///mine 
//0. firebase setup
//1. context setup-->create context ---< AuthContext value ----> useState with object and set it  to a variable object and inside give the user and setUser and give it as a value.
//2. set the the file authProvider(wrap it with routerprovider ) to main.jsx where app.js and main with router,
//2.2 ....> get the router provider inside of authprovider to get as a children with destructure
//3. for using it to other components destructure it then use(the variable of create context hook)