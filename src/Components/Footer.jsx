import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    if (email.trim()) {
      alert(`Email "${email}" submitted successfully!`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };

  return (
    <footer className="bg-[#141419]  text-white px-6 md:px-20 pt-20 pb-10 font-script w-full overflow-x-hidden">
      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
          WE’D <span className="text-green-300">LIKE</span> &<br />
          <span className="text-indigo-400">LOVE TO HELP.</span>
        </h2>
        <div className="max-w-md">
          <p className="text-gray-400 text-sm">
            Get to know our hiring process before you apply or find answers to
            any lingering questions, right here, right now.
          </p>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="border-t border-gray-700 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="text-xl font-bold mb-3">
            <span className="text-[#9C69E2] text-2xl">JOB-PORTAL</span>
          </div>
          <p className="text-gray-400 text-sm">
            Discover the best remote job offers among the best flexible
            companies over the geographical area.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li>
              <ScrollLink
                to="jobs"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-white cursor-pointer"
              >
                Job Opportunities
              </ScrollLink>
            </li>
            <li>
              <Link to="/post-job" className="hover:text-white cursor-pointer">
                Post a Job
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-white cursor-pointer"
              >
                Login & Signup
              </ScrollLink>
            </li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Socials & Newsletter */}
        <div className="space-y-4">
          <div className="flex gap-4 text-gray-300 text-lg">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
          <div className="flex w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-l-full bg-gray-800 text-sm text-white outline-none placeholder-gray-400"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-full text-white text-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-14 text-center text-gray-500 text-sm">
        Copyright © 2025 JOB-PORTAL. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
