import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);   
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userInfo = currentUser?.email || users?.email;
            setUsers(currentUser);
            // console.log('current user', currentUser);
            setLoading(false)
            const loggedUserMail = { email: userInfo };
            if (currentUser) {
                axios.post('http://localhost:4000/jwt', loggedUserMail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else {
                axios.post('http://localhost:4000/logout', loggedUserMail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            unSubscribe();
        };
    }, [users?.email])

    const authInfo = { users, loading, createUser, signInUser, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;