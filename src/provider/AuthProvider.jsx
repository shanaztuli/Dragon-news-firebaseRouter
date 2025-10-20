import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user, loading);

  // 1st
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //4th
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //3rd
  const LogOut = () => {
    return signOut(auth);
  };
  //2nd
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    logIn,
    loading,
    setLoading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
