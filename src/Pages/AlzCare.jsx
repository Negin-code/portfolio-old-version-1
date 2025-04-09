import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SiFigma } from "react-icons/si";
import AlzCareImage from "../assets/AlzCare.svg";
import DesignProcess from "../assets/designProcess.svg";
import UserPersona from "../assets/userpersona.svg";
const AlzCare = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Project Title */}
      <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 flex flex-row items-start justify-start gap-1 px-20 pt-15 sm:pt-25 lg:pt-0">
        <div className="w-[4vh] sm:w-[5vh] md:w-[7vh] h-[2px] bg-[#493B32] mt-4"></div>
        <h1 className="text-2xl sm:text-5xl font-tan text-[#493B32] mb-12">
          AlzCare
        </h1>
      </div>

      {/* Project Content */}
      <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 pl-20">
        {/* Project Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Image Section */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={AlzCareImage}
                alt="AlzCare App Preview"
                className="w-full h-auto lg:scale-80"
              />
            </div>
          </div>

          {/* Project Info Section */}
          <div className="lg:col-span-5 space-y-6 space-x-2">
            <div className="inline-block px-3 py-1 bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm">
              UX Design
            </div>
            <div className="inline-block px-3 py-1 bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm">
              UX Research
            </div>
            <div className="inline-block px-3 py-1 bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm">
              UI Design
            </div>
            
            <div className="w-full h-[1px] bg-[#493B32]"></div>
            
            <h2 className="text-2xl font-semibold text-[#493B32]">
            AlzCare App
            </h2>
            
            <div className="w-full h-[1px] bg-[#493B32]"></div>
            
            <p className="text-[#493B32] leading-relaxed">
            The goal of AlzCare is to create a user-friendly mobile app that integrates with a smart medication container, helping caregivers monitor medication adherence for individuals with Alzheimer's. It offers real-time tracking, automated alerts, quick communication, and safe zone monitoring to ensure safety and peace of mind.
            </p>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">Figma</span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">Illustrator</span>
              
            </div>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.figma.com/design/kppb0tT9fK25zEqjW1yyYX/AlzCare?node-id=0-1&t=BKnJpEdrP9GU4kaW-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#493B32] hover:text-[#5E3F27]"
              >
                <SiFigma className="mr-2" size={20} />
                Figma
              </a>
              
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">Design Process</h2>
          <div className="text-[#493B32] space-y-4 flex justify-center items-center">
            <img src={DesignProcess} alt="Design Process" />
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mb-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32] mt-0 mb-6"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32] mb-6">Target Audience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#FFF7F2] border border-[#493B32] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#493B32] mb-3">Caregivers and Family Members</h3>
              <p className="text-[#493B32] leading-relaxed">
                Primary users who need support in managing medication schedules and monitoring their loved ones with Alzheimer's.
              </p>
            </div>
            <div className="bg-[#FFF7F2] border border-[#493B32] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#493B32] mb-3">Healthcare Professionals</h3>
              <p className="text-[#493B32] leading-relaxed">
                Medical providers who can benefit from tracking patient medication adherence and providing remote support.
              </p>
            </div>
          </div>
        </section>

        {/* User Persona Section */}    
        <section className="mb-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32] mt-0 mb-6"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32] mb-6">User Persona</h2>
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-[#FFF7F2] border border-[#493B32] p-4 rounded-md shadow-sm max-w-3xl w-full">
              <img 
                src={UserPersona} 
                alt="User Persona" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        {/* Accessibility Note */}
        <section className="mb-16">
          <p className="text-[#493B32]">
            Beyond functionality, I prioritized accessibility and performance. I applied ARIA labels,
            semantic HTML, and WCAG-compliant color contrasts to ensure inclusivity for all users,
            including those using assistive technologies. To optimize load times, I compressed images
            and leveraged lazy loading to reduce initial page weight.
          </p>
        </section>
      </div>
       {/* Back to Resume Link */}
       <div className="col-span-8 md:col-span-10 lg:col-start-2 col-start-1 flex justify-between items-center mt-0">
        <Link to="/projects" className="flex items-center gap-2 mx-20 lg:mx-10 lg:my-20 lg:mb-20 hover:opacity-80 transition-opacity">
          <IoIosArrowRoundBack size={42} color="#493B32" className="my-4" />
          <p className="font-open font-semibold text-xl lg:text-2xl text-[#493B32]">
            Projects
          </p>
        </Link>
        <div>
          <IoIosArrowDropupCircle
            size={40}
            color="#493B32"
            className="mx-20 my-10 mb-10 lg:mx-10 lg:my-20 lg:mb-20 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            aria-label="Scroll to top"
          />
        </div>
      </div>
    </main>
  );
};

export default AlzCare;