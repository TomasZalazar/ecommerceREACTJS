import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    const login = async (values) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
          const userData = userCredential.user
          setUser({
            email: userData.email,
            uid: userData.uid,
            logged: true
          });
          return userData 
        } catch (error) {
          if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
            throw new Error("Usuario no encontrado o contraseña incorrecta");
          } else {
            throw error
          }
        }
      };

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    uid: null,
                    logged: false
                }) 
            }
        })
    }, [])

    
    return(
        <UserContext.Provider 
        value={{
            user,
            register,
            login,
            googleLogin,
            logout
        }}
        >
        { children }
        </UserContext.Provider>
    )
}

