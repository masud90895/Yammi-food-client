import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "./Firebase.init"

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUserEmailPass=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // updateName
  const updateName = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth, ( currentUser) =>{
            setUser( currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    }
       
    ,[])


    const userInfo = { user,createUserEmailPass,login,singOutUser,googleLogin,loading,updateName}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;