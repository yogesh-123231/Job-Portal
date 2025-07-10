import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // 👈 Import your context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Wrap app with your own auth context */}
      <App />
    </AuthProvider>
  </StrictMode>
);
