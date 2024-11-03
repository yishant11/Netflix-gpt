import { auth } from "../utils/firebase";
import {signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  const handleSignOut=() => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          })
        );
        //to check authentication
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when componentWillUnmount
    return () => unsubscribe();
   },[]);



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
    <img className="w-40"
    src={LOGO}
    alt="logo"
    /> 
    {user && (
    <div className="flex p-3">
      <img className="w-14 h-14"
      src={user.photoURL}
      alt="user-icon"
      />
      <button className="font-bold text-white" 
      onClick={handleSignOut}>
        (Sign Out)
      </button>
    </div>
  )}
  </div>
)};

export default Header;