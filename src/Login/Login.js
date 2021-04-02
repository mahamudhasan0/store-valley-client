import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

function Login() {
  const[user,setUser]=useState({})
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const ghProvider = new firebase.auth.GithubAuthProvider();

  const googleSignInHandle= () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    setUser(user);
  
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    
  });
  }



 
  return (
    <div className="App">

      <button onClick={googleSignInHandle}>Google Sign In</button>
       
    </div>
  );
}

export default Login;