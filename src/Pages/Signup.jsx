import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { signupWithEmail, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupWithEmail(email, password, name);
      setMessage('Signup successful!');
      setError('');
      navigate('/'); // ✅ Redirect to homepage after email signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      navigate('/'); // ✅ Redirect to homepage after Google signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#141419] flex items-center justify-center px-6 py-12 text-white">
      <div className="w-full max-w-md bg-[#1f1f2b] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>

        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 cursor-pointer py-3 rounded-full text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* <div className="my-4 text-center text-sm text-gray-400">or</div> */}

        {/* ✅ Google Sign Up Button */}
        <button
          onClick={handleGoogleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 my-5 rounded-full cursor-pointer text-white font-semibold"
        >
          Continue with Google
        </button>

        <div className="text-sm text-center mt-6">
          <p className="mb-2">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
