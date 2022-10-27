import React, { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    // Declaring State For User...
    const [ user, setUser ] = useState({
        displayName : "Anik",
        photoURL : '../Images/shocked.png'
    });

    const [loading , setLoading] = useState(true);

    // // Auth Provider For Google...
    // const googleProvider = new GoogleAuthProvider();


    // // Creating New User To Website...
    // const createUser = (email, password ) => {
    //     return createUserWithEmailAndPassword(auth , email, password);
    // }

    // // Login OR SignIn System...
    // const signIn = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email , password);
    // }


    // Sign In with Google With Pop Up...
    const signInWithGoogle = (Provider) => {
        return signInWithPopup(auth, Provider);
    }

    // Sign Out ...
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // To get Current User ...
    // 
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         console.log('inside auth state change', currentUser);
    //         setUser(currentUser)
    //     });
    //     return () => {
    //         unsubscribe();
    //     }

    // }, [])

    
    const authInfo = { user , signInWithGoogle , logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;