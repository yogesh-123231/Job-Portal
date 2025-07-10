import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { GiFlexibleLamp } from "react-icons/gi";
import { Element } from "react-scroll";

const DreamJobSection = () => {
  return (
     <Element name="about">
    <section className="px-6 md:px-20 py-16 font-script overflow-x-hidden">
      <div className="grid ">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
          <h2 className="text-2xl text-[#467051] md:text-3xl font-bold mb-4 ml-3">
            We help you to get <br /> your dream job
          </h2>
          <p className="text-sm text-gray-500 md:w-90 md:mr-40">
            Because the job market no longer knows borders and talent can work
            from anywhere, we don’t limit ourselves to companies in your
            country.
          </p>
        </div>
{/* grid-cols-1 md:grid-cols-2 gap-10  */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8 md:gap-30 w-full">
          <div className="bg-[#9C99F5] p-10 text-white rounded-3xl md:rounded-4xl">
            <GiFlexibleLamp className="text-4xl mb-9"/>
            <h4 className="font-semibold text-base md:text-l mb-2">FLEXIBILITY</h4>
            <p className="text-3xl font-bold mb-6">
              Discover the 2,000 most flexible companies in the world.
            </p>
            <a href="#" className="flex items-center gap-2 font-semibold text-l mb-2 text-sm ">
              Learn More <FaArrowRight />
            </a>
          </div>

          <div className="bg-[#CDE9D4] p-10 text-[#467051] rounded-4xl">
           <TbTargetArrow className="text-4xl mb-9"/>
            <h4 className="font-semibold text-l mb-2">OUR MISSION</h4>
            <p className="text-3xl font-bold mb-6">
              Your work adapts to your lifestyle, not other way around.
            </p>
            <a href="#" className="flex items-center break-words w-full gap-2 font-semibold text-l mb-2 text-sm ">
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default DreamJobSection;
