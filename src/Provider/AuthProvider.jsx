import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth (app);
 export const AuthContext= createContext(null)

 const googleProvider = new GoogleAuthProvider()
 const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const [loading, setLoading] = useState(true)
   

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading (true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithGithub =()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }

    const logOut =()=>{
        setLoading (true)
        return signOut(auth)
    }


    useEffect (()=>{
        const unSubscribe=     onAuthStateChanged(auth ,currentUser =>{
            setUser(currentUser)
            console.log(  currentUser);
            setLoading(false)
        } )
        return ()=>{
            unSubscribe()
        }
    } ,[] )

    const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
   
    signInWithGoogle,
    signInWithGithub
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;