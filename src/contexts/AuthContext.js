import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup =  (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const login = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
}
const logout = () => {
   return signOut(auth);
}
const resetPassword = (email) => {
   return sendPasswordResetEmail(auth, email)
 }
 const updateEmail = (email) => {
   return currentUser.updateEmail(email)
 }

 const updatePassword = (password) => {
   return currentUser.updatePassword(password)
 }



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
