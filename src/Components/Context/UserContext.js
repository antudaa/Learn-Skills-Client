import React, { useEffect } from 'react';
import app from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    // Declaring State For User...
    const [ user, setUser ] = useState({
    });

    const [loading , setLoading] = useState(true);

    // Update User ...
    const updateUser = (profile) => {
        updateProfile(auth.currentUser, profile);
    }

    // Github SignUp
    const githubSignUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    // Creating New User To Website...
    const signUpWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn OR SignIn System... With Email AND Password...
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Sign In with Google With Pop Up...
    const signInWithGoogle = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, email, password);
    }


    // Verify Email ...
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }


    // Sign Out ...
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // To get Current User ...
    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }

    }, [])

    
    const authInfo = { 
        user , 
        signIn , 
        signInWithGoogle , 
        logOut, 
        signUpWithEmail,
        loading,
        updateUser,
        verifyEmail,
        githubSignUp
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;