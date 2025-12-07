import React, { createContext, useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Footer from '../Components/Footer/Footer';


export const MainContext = createContext();


const RootLayout = () => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const handleRegistrationWithContext = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLoginWithContext = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleUpdatedProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log('Logout')
        }).catch((error) => {
            console.log('Not Logout')
        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            if (CurrentUser) {
                setUser(CurrentUser);
                setLoading(false);
            }

        });
        return () => {
            unsubscribe();
        }
    }, [])



    const contextValue = {
        handleRegistrationWithContext,
        handleLoginWithContext,
        handleLogOut,
        handleUpdatedProfile,
        setUser,
        loading,
        user,


    }


    return (
        <div>

            <MainContext.Provider value={contextValue}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </MainContext.Provider>

        </div>
    );
};

export default RootLayout;