import React from "react";
import {
  FaRocket,
  FaBuilding,
  FaRoute,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaHome,
} from "react-icons/fa";

const Explore = () => {
  const exploreCards = [
    {
      title: "High-Demand Sectors",
      description:
        "Discover trending industries like AI, Blockchain, and Cybersecurity that are shaping the future.",
      icon: <FaRocket className="text-orange-400 text-2xl" />,
    },
    {
      title: "Top Employers",
      description:
        "Explore companies known for innovation, employee satisfaction, and career growth opportunities.",
      icon: <FaBuilding className="text-orange-400 text-2xl" />,
    },
    {
      title: "Career Roadmaps",
      description:
        "Understand roles and skills needed to move from beginner to expert in your desired domain.",
      icon: <FaRoute className="text-orange-400 text-2xl" />,
    },
    {
      title: "Internship Programs",
      description:
        "Kickstart your journey with paid and remote internships at reputed companies.",
      icon: <FaLaptopCode className="text-orange-400 text-2xl" />,
    },
    {
      title: "Compensation Insights",
      description:
        "Compare salaries across roles, companies, and cities to make informed career decisions.",
      icon: <FaMoneyCheckAlt className="text-orange-400 text-2xl" />,
    },
    {
      title: "Remote-Friendly Roles",
      description:
        "Find jobs that let you work from anywhere while maintaining a healthy work-life balance.",
      icon: <FaHome className="text-orange-400 text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141419] to-[#1c1c24] text-white px-6 md:px-20 py-16 font-script">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-400">
          Explore Career Opportunities
        </h1>

        <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-3xl">
          Go beyond the job search. Uncover the insights, industries, and paths that will shape your professional journey. Learn what's trending, who’s hiring, and how to stay ahead.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f2a] border border-gray-700 hover:border-orange-400 p-6 rounded-2xl shadow-md hover:shadow-orange-500/10 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
