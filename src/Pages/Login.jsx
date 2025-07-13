import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { loginWithEmail, loginWithGoogle, resetPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // ✅ setup navigate

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate('/'); // ✅ redirect after email login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/'); // ✅ redirect after Google login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email first.");
      return;
    }
    try {
      await resetPassword(email);
      setMessage("Reset link sent to your email.");
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#141419] flex items-center justify-center px-6 py-12 text-white">
      <div className="w-full max-w-md bg-[#1f1f2b] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Login to Your Account</h1>

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-sm text-right text-blue-400 hover:underline cursor-pointer" onClick={handleForgotPassword}>
            Forgot Password?
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full cursor-pointer text-white font-semibold"
          >
            Login
          </button>
        </form>

        {/* <div className="my-4 text-center text-sm text-gray-400">or</div> */}

        <button
          onClick={handleGoogleLogin} // ✅ call wrapped function
          className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer py-3 my-5 rounded-full text-white font-semibold"
        >
          Continue with Google
        </button>

        <div className="text-sm text-center mt-6">
          <p className="mb-2">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
