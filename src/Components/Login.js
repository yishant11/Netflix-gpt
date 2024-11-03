import { useState,useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { photoURL } from '../utils/constant';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch=useDispatch();


    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);


    const handleButtonClick =() =>{
        //validate form data
       


    const message=checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    //Sign in/Sign Up
    if(!isSignInForm){
        //Sign Up
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => { 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: 
        name.current.value, 
        photoURL: photoURL,
      })
      .then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName,photoURL} =auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        })
      );
      })
      .catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message);
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
    else{
    //Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    };
    const toggleSignInForm=(() => {
        setIsSignInForm(!isSignInForm);
    })
  return (
    <div>
        <Header/>
        <div className="absolute">
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
        alt="logo"
        />
        </div>
        <form onSubmit={(e) =>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white font-serif">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
            <input 
            ref={name}
            type="Name" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-300" 
            />}
            <input 
            ref={email}
            type="text" 
            placeholder="Email Address" 
            className="p-4 my-4 w-full bg-gray-300" 
            />
            <input 
            ref={password}
            type="c-password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-300" 
            />
            <p className="text-red-500 font-bold text-lg p-2 ">
                {errorMessage}
            </p>
            <button className="p-4 my-6 bg-red-600 w-full rounded-lg font-serif font-normal" 
            onClick={handleButtonClick}
            >
            {isSignInForm 
            ? "Sign In" 
            : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" 
            onClick={toggleSignInForm}
            >
            {isSignInForm 
            ? "New to Netflix? Sign In Now" 
            : "Already an existing User"}
            </p>
        </form>
    </div>
    )
};
export default Login;