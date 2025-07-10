import React from "react";
import { FaTools } from "react-icons/fa";

const PostJob = () => {
  return (
    <div className="bg-gradient-to-br from-[#141419] to-[#1f1f2a] font-script min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 relative overflow-hidden">
      {/* Glowing background blob */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-2xl animate-ping" /> */}

      {/* Icon */}
      <FaTools className="text-orange-400 text-6xl mb-6 animate-bounce" />

      {/* Title */}
      <h1 className="text-4xl text-[#9C69E2] md:text-5xl font-extrabold text-center mb-4 drop-shadow-lg">
        Post a Job
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl max-w-xl text-center mb-6">
        This feature is currently being crafted for recruiters like you. Soon,
        you'll be able to post job openings and reach top talent across the world.
      </p>

      {/* Badge */}
      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow-md animate-pulse">
        🚀 Coming Soon
      </span>
    </div>
  );
};

export default PostJob;
