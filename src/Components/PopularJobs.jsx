import React, { useRef, useEffect } from "react";

const jobCards = [
  {
    company: "Google",
    jobs: "28 Available jobs",
    desc: "We don't want you to feel so overwhelmed at Google.",
    tags: ["Part-time", "Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Microsoft",
    jobs: "32 Available jobs",
    desc: "Want to make a difference? So do we.",
    tags: ["Part-time", "Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Spotify",
    jobs: "18 Available jobs",
    desc: "Join our team and help us usher the world into Spotify.",
    tags: ["Remote", "Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Netflix",
    jobs: "10 Available jobs",
    desc: "Want to work with streaming giants? Join Netflix.",
    tags: ["Remote", "Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Amazon",
    jobs: "25 Available jobs",
    desc: "Innovate and grow with the world's largest e-commerce platform.",
    tags: ["Remote", "Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Adobe",
    jobs: "15 Available jobs",
    desc: "Shape creativity with tools that empower the world.",
    tags: ["Part-time", "Internship"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
  {
    company: "Tesla",
    jobs: "12 Available jobs",
    desc: "Help revolutionize transportation and energy.",
    tags: ["Full-time"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    bg: "bg-white",
    HoverBg: "hover:bg-green-100",
  },
];

const PopularJobs = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const cardWidth = 296; // 280px + 16px gap
    const totalWidth = jobCards.length * cardWidth;

    const autoScroll = () => {
      scrollAmount += 1;
      
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  // Create duplicated array for infinite scroll effect
  const duplicatedJobs = [...jobCards, ...jobCards, ...jobCards];

  return (
    <section className="px-6 md:px-20 py-16 font-script overflow-x-hidden">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-[#9C69E2] md:text-3xl font-bold">Most Popular Jobs</h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedJobs.map((job, index) => (
          <div
            key={index}
            className={`min-w-[280px] max-w-[280px] flex-shrink-0 p-4 rounded-xl shadow-md ${job.bg} transition hover:scale-105 ${job.HoverBg}`}
          >
            <img src={job.logo} alt={job.company} className="h-8 mb-2" />
            <h3 className="font-semibold mb-1">{job.company}</h3>
            <p className="text-sm text-gray-400 mb-2">{job.jobs}</p>
            <p className="text-xs text-gray-400 mb-4">{job.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border px-3 py-1 text-sm rounded-xl text-gray-700 bg-[#eae9ee] border-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PopularJobs;