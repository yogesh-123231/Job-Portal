import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-script">
      {/* Main Header */}
      <header className="flex justify-between items-center mb-20 relative">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/" className="text-[#9C69E2] text-4xl">
            JOB-PORTAL
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-6 text-m hidden md:block">
          <Link to="/" className="hover:text-[#9C69E2]">Home</Link>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-[#9C69E2]">About</ScrollLink>
          <Link to="/explore" className="hover:text-[#9C69E2]">Explore</Link>
          <ScrollLink to="jobs" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-[#9C69E2]">Jobs</ScrollLink>
          <Link to="/post-job" className="hover:text-[#9C69E2]">Post a Job</Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center">
          {user ? (
            <>
              <span className="text-white mr-4 hidden sm:inline">
                {user?.name || 'User'}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full hover:text-[#9C69E2] text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 mx-2 rounded-full text-white">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 mx-2 rounded-full text-white">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 w-64 bg-[#1f1f2b] text-white shadow-lg p-6 rounded-xl z-50 md:hidden animate-slide-in">
            <nav className="flex flex-col gap-4 mb-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#9C69E2]">Home</Link>
              <ScrollLink to="about" smooth={true} duration={500} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer hover:text-[#9C69E2]">About</ScrollLink>
              <Link to="/explore" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#9C69E2]">Explore</Link>
              <ScrollLink to="jobs" smooth={true} duration={500} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer hover:text-[#9C69E2]">Jobs</ScrollLink>
              <Link to="/post-job" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#9C69E2]">Post a Job</Link>
            </nav>

            <div className="flex flex-col gap-3">
              {user ? (
                <>
                  <span className="text-sm text-gray-300">{user?.name || 'User'}</span>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white w-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white w-full">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
