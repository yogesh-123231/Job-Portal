import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await resetPassword(email);
      setMessage('Check your inbox for the password reset link!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#141419] flex items-center justify-center text-white">
      <form onSubmit={handleReset} className="bg-[#1f1f2b] p-6 rounded-xl space-y-4 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        <input
          type="email"
          className="w-full p-3 rounded bg-[#2a2a3b] text-white"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {message && <p className="text-green-400 text-sm">{message}</p>}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">Send Reset Link</button>

        <div className="text-sm text-center mt-4">
          <a href="/login" className="text-blue-400 hover:underline">Back to Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
