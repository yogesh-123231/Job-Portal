import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const { resetPassword } = useAuth(); // Your context must support this
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await resetPassword(email); // this should be implemented in your AuthContext
      setMessage('Password reset link sent! Check your inbox.');
    } catch (err) {
      setError(err.message || 'Failed to send reset email.');
    }
  };

  return (
    <div className="min-h-screen bg-[#141419] flex items-center justify-center px-6 py-12 text-white">
      <div className="w-full max-w-md bg-[#1f1f2b] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Forgot Password</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {message && <p className="text-green-400 text-sm">{message}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full text-white font-semibold"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-sm text-center mt-6">
          <Link to="/login" className="text-gray-400 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
