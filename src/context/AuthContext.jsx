import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  googleProvider
} from "../firebase/firebase";

import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";

// Create context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sign up with email/password
  const signupWithEmail = async (email, password, name) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(result.user, { displayName: name });
      setUser({ ...result.user, displayName: name });
    }
    return result;
  };

  // Log in with email/password
  const loginWithEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const loginWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // Reset password
  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithEmail,
        signupWithEmail,
        loginWithGoogle,
        logout,
        resetPassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
