import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll"; 
import {
  FaStar,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import jobs from "../data/dummyJobs";
import { categories, types, locations, experiences } from "../data/filterOptions";

const JobList = () => {
  const [category, setCategory] = useState("View all");
  const [type, setType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");
  const [experience, setExperience] = useState("All Levels");
  const [showAll, setShowAll] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApply = () => {
    if (!user) {
      navigate("/login", {
        state: { from: "apply" },
      });
    } else {
      alert("Successfully applied ✅");
    }
  };

  const filterJobs = jobs.filter((job) => {
    const matchCategory = category === "View all" || job.category === category;
    const matchType = type === "All Types" || job.type.includes(type);
    const matchLocation =
      location === "All Locations" || job.location === location;
    const matchExperience =
      experience === "All Levels" || job.experience === experience;
    return matchCategory && matchType && matchLocation && matchExperience;
  });

  const visibleJobs = showAll ? filterJobs : filterJobs.slice(0, 4);

  const clearFilters = () => {
    setCategory("View all");
    setType("All Types");
    setLocation("All Locations");
    setExperience("All Levels");
  };

  return (
  <Element name="jobs">
    <section className="bg-[#141419] text-white px-6 md:px-20 py-16 font-script overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold max-w-4xl mb-8">
        Find the job that{" "}
        <span className="text-[#7C3AED]">really suits you</span> — the whole
        planet is your playground!
      </h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-[#1f1f2b] px-4 py-2 rounded text-white">
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="bg-[#1f1f2b] px-4 py-2 rounded text-white">
          {types.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="bg-[#1f1f2b] px-4 py-2 rounded text-white">
          {locations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
        </select>
        <select value={experience} onChange={(e) => setExperience(e.target.value)} className="bg-[#1f1f2b] px-4 py-2 rounded text-white">
          {experiences.map((exp, i) => (
            <option key={i} value={exp}>{exp}</option>
          ))}
        </select>
        <button onClick={clearFilters} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Clear All
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4 md:space-y-0">
  {visibleJobs.map((job, index) => (
    <div
      key={index}
      className="bg-[#1c1c24] p-4 md:p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center"
    >
      <div className="flex items-start gap-3 md:gap-4">
        <img src={job.logo} alt={job.company} className="h-10 w-20 mt-1" />
        <div className="ml-1 md:ml-5">
          <h3 className="font-semibold text-base md:text-lg">{job.title}</h3>
          <div className="flex gap-1 md:gap-2 my-2 flex-wrap">
            {job.type.map((t, i) => (
              <span
                key={i}
                className="text-xs md:text-sm bg-gray-900 text-gray-400 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs md:text-sm text-gray-400 mb-2">{job.description}</p>
        </div>
      </div>
      <button
        onClick={handleApply}
        className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 text-xs md:text-sm rounded-full flex items-center gap-1"
      >
        Apply <FaArrowRight className="text-xs" />
      </button>
    </div>
  ))}
</div>


      {/* Show more/less */}
      {filterJobs.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-400 hover:text-orange-300 flex items-center justify-center gap-2"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      )}
    </section>
  </Element>
);
};

export default JobList;
