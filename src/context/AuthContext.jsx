import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Hook for easy access to context
export const useAuth = () => useContext(AuthContext);

// Provider that wraps the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Signup new user (mocked, just stored in localStorage)
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.find(u => u.email === email);
    if (exists) return { error: 'Email already registered' };

    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  // Login user (mocked)
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { error: 'Invalid email or password' };

    localStorage.setItem('loggedInUser', JSON.stringify(found));
    setUser(found);
    return { success: true };
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
