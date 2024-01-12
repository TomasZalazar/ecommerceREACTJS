import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredencial) => {
                const user = userCredencial.user
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
            } )
    }


    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredencial) => {
                const user = userCredencial.user
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
            })

    }


    
    return(
        <UserContext.Provider 
        value={{
            user,
            register,
            login
        }}
        >
        { children }
        </UserContext.Provider>
    )
}

