import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link as ScrollLink } from "react-scroll";

const words = [
  { text: "LIFESTYLE", color: "text-sky-300" },
  { text: "PASSION", color: "text-orange-400" },
  { text: "GOALS", color: "text-purple-500" },
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const word = words[wordIndex].text;
    let charIndex = 0;

    const typing = setInterval(() => {
      setDisplayedText(word.slice(0, charIndex));
      charIndex++;

      if (charIndex > word.length) {
        clearInterval(typing);
      }
    }, 100);

    const wordChange = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(typing);
      clearTimeout(wordChange);
    };
  }, [wordIndex]);

  return (
    <section
      id="hero"
      className="bg-[#141419] font-script min-h-screen text-white px-4 md:px-20 py-5 flex flex-col justify-center relative overflow-hidden overflow-x-hidden"
    >
      <Navbar />

      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-8 md:mb-10">
          <span className="text-[#C2FFCB]">*</span> FIND THE JOB
          <br />
          THAT FITS YOUR
          <br />
          <span className="inline-block min-h-[1.5em] relative">
            <span
              className={`absolute top-0 left-0 font-tektur transition-all duration-200 ease-in-out ${
                words[wordIndex].color
              }`}
            >
              {displayedText}
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-8 flex items-start gap-3">
          <span className="text-orange-400 bg-white/10 rounded-full p-2">📱</span>
          Discover the best remote job offers among the best flexible companies over the geographical area.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mr-0">
          {[
            ["10K+", "Active Jobs"],
            ["500+", "Companies"],
            ["95%", "Remote"],
            ["24/7", "Support"],
          ].map(([num, label], i) => (
            <div className="text-center" key={i}>
              <div className="text-xl sm:text-2xl md:text-2xl font-bold text-[#C2FFCB]">{num}</div>
              <div className="text-xs sm:text-sm md:text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Notification Card */}
      <div className=" md:hidden mt-10 flex justify-center">
        <div className="w-[90%] sm:w-[70%] animate-bounce">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-5 rounded-2xl shadow-2xl border-2 border-green-400 hover:scale-105 transition-transform relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 sm:w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-base sm:text-lg">🎉</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Live Update!</h3>
                <p className="text-xs sm:text-sm text-green-100">Just posted</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-green-50 mb-4 font-medium">
              🚀 New remote opportunity available! High-paying position with amazing benefits.
            </p>

            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xs">⭐ 5.0</span>
                <span className="text-green-100 text-xs">Company Rating</span>
              </div>
              <ScrollLink
                to="jobs"
                smooth={true}
                duration={600}
                offset={-80}
                className="bg-white text-green-600 hover:bg-gray-100 py-2 px-4 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-lg cursor-pointer"
              >
                View Now
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Floating Card */}
      <div className="hidden md:block absolute right-20 top-[60%] transform -translate-y-1/2 animate-bounce">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-2xl border-2 border-green-400 hover:scale-105 transition-transform relative max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Live Update!</h3>
              <p className="text-sm text-green-100">Just posted</p>
            </div>
          </div>

          <p className="text-sm text-green-50 mb-4 font-medium">
            🚀 New remote opportunity available! High-paying position with amazing benefits.
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-xs">⭐ 5.0</span>
              <span className="text-green-100 text-xs">Company Rating</span>
            </div>
            <ScrollLink
              to="jobs"
              smooth={true}
              duration={600}
              offset={-80}
              className="bg-white text-green-600 hover:bg-gray-100 py-2 px-4 rounded-full text-sm font-semibold transition-colors shadow-lg cursor-pointer"
            >
              View Now
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
