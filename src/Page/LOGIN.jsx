import React,{useState,useEffect} from 'react';
import {BsPerson,BsBoxArrowInRight} from "react-icons/bs"
import {Link}  from "react-router-dom"
import {  signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { storage, db, auth } from "../Server/Configer";
import { useAuthState } from "react-firebase-hooks/auth";

const LOGIN=()=>{
    const [loged,setLoged]=useState(null);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
const Login=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const token = credential.accessToken;
      // The signed-in user info.
    const user = result.user;
    // result.user.sendEmailVerification();
    console.log(user);
    //setLoged(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
const [user] = useAuthState(auth);
const Logout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful')
      }).catch((error) => {
        // An error happened.
      });
}
    return(
        <div>
            {user?<BsBoxArrowInRight onClick={Logout} size={20} className="h-6 w-6" aria-hidden="true" />:<BsPerson onClick={Login} size={20} className="h-6 w-6" aria-hidden="true" />  }  
        </div> 
     
    )
}
export default LOGIN;