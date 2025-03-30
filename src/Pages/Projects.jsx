import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import CrimsonPlateImage from "../assets/CrimsonPlate.png";
import AlzcareImage from "../assets/Alzcare.svg";
const Projects = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Projects Title */}
      <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 flex flex-row items-start justify-start gap-1 mt-20 lg:mt-0 mb-0 pl-25">
        <div className="w-[5vh] sm:w-[5vh] md:w-[7vh] h-[2px] bg-[#493B32] mt-2 lg:mt-4"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-tan text-[#493B32] pb-4">
          Projects
        </h1>
      </div>
     
      {/* Front End Section */}
      <section className="col-span-4 sm:col-span-4 sm:col-start-1 md:col-span-6 md:col-start-1 lg:col-span-10 lg:col-start-2 col-start-1 mb-12 pl-20 mt-0">
        {/* Project 1 - Image on left, content on right */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-12 lg:gap-4 mb-20">
          <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-7 lg:mt-4 order-1 md:order-1">
            <img
              src={CrimsonPlateImage}
              alt="Crimson Plate Website"
              className="w-full object-cover scale-80 md:scale-90 lg:scale-80  mx-5"
            />
          </div>
          <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-4 mt-10 md:mt-20 lg:mt-10 order-2 md:order-2 ml-10 lg:ml-0">
            <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
              Front-end
            </span>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <h3 className="text-xl font-semibold text-[#493B32]">
              Crimson Plate Website
            </h3>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <p className="text-[#493B32] leading-relaxed">
              The goal was to create a responsive, visually engaging, and
              user-friendly restaurant website that delivers an intuitive,
              interactive digital experience while accurately reflecting the
              restaurant's brand, ensuring seamless navigation, performance, and
              accessibility.
            </p>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <div className="flex flex-wrap gap-2 mt-4 text-[#493B32]">
              <span className="border border-[#493B32] px-3 py-1 text-base">
                HTML
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Tailwind CSS
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                JavaScript
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#493B32] mt-[15px]"></div>
            
            {/* View Project Button */}
            <Link
              to="/projects/crimson-plate"
              className="inline-block w-full text-center mt-6 lg:mt-8 py-2 px-4 bg-[#5E3F27] hover:bg-[#493B32] text-[#FFF7F2] font-semibold rounded-sm transition duration-300"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 2 - Content on left, image on right (reversed on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-12 lg:gap-4 mb-20">
          <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-7 lg:mt-4 lg:col-start-1 lg:col-span-4 mt-10 md:mt-20 order-4 md:order-1 ml-10 lg:ml-0">
            <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
              UX/UI Design
            </span>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <h3 className="text-xl font-semibold text-[#493B32]">
              AlzCare App
            </h3>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <p className="text-[#493B32] leading-relaxed">
              The goal of AlzCare is to create a user-friendly mobile app 
              that integrates with a smart medication container, helping 
              caregivers monitor medication adherence for individuals 
              with Alzheimer's.
            </p>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <div className="flex flex-wrap gap-2 mt-4 text-[#493B32]">
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Figma
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Illustrator
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#493B32] mt-[15px]"></div>
            
            {/* View Project Button */}
            <Link
              to="/projects/alzcare"
              className="inline-block w-full text-center mt-6 lg:mt-8 py-2 px-4 bg-[#5E3F27] hover:bg-[#493B32] text-[#FFF7F2] font-semibold rounded-sm transition duration-300"
            >
              View Project
            </Link>
          </div>
          <div className="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-9 lg:mt-10 order-3 md:order-2">
            <img
              src={AlzcareImage}
              alt="AlzCare App"
              className="w-full object-cover lg:scale-110 scale-90"
            />
          </div>
        </div>

        {/* Project 3 - Image on left, content on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-12 lg:gap-4 mb-20">
          <div className="col-span-4 md:col-span-4 lg:col-span-7 lg:mt-4 order-5 md:order-1">
            <img
              src={CrimsonPlateImage}
              alt="Listening Lab"
              className="w-full object-cover scale-80"
            />
          </div>
          <div className="lg:col-start-9 lg:col-span-4 mt-10 md:mt-20 order-6 md:order-2 ml-10 lg:ml-0">
            <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
              Service Design
            </span>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <h3 className="text-xl font-semibold text-[#493B32]">
              Listening Lab
            </h3>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <p className="text-[#493B32] leading-relaxed">
              The goal of the Listening Lab was to 
              enhance the effectiveness of listening 
              practices within the immigrant services 
              sector by fostering trust, cultural 
              understanding, and empathy.
            </p>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <div className="flex flex-wrap gap-2 mt-4 text-[#493B32]">
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Figma
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Zoom
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Miro
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Canva
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#493B32] mt-[15px]"></div>
            
            {/* View Project Button */}
            <Link
              to="/projects/listening-lab"
              className="inline-block w-full text-center mt-6 lg:mt-8 py-2 px-4 bg-[#5E3F27] hover:bg-[#493B32] text-[#FFF7F2] font-semibold rounded-sm transition duration-300"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Project 4 - Content on left, image on right (reversed on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-12 lg:gap-4">
          <div className="lg:col-start-2 lg:col-span-5 mt-10 md:mt-20 order-8 md:order-1 ml-10 lg:ml-0">
            <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
              Service Design
            </span>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <h3 className="text-xl font-semibold text-[#493B32]">
              Evaluating Culture Café Program
            </h3>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <p className="text-[#493B32] leading-relaxed">
              To evaluate the Culture Café program, identify areas for 
              improvement, and propose actionable solutions to 
              enhance participants' experience. The evaluation focused 
              on understanding participants' experiences.
            </p>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <div className="flex flex-wrap gap-2 mt-4 text-[#493B32]">
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Miro
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-base">
                Canva
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#493B32] mt-[15px]"></div>
            
            {/* View Project Button */}
            <Link
              to="/projects/culture-cafe"
              className="inline-block w-full text-center mt-6 lg:mt-8 py-2 px-4 bg-[#5E3F27] hover:bg-[#493B32] text-[#FFF7F2] font-semibold rounded-sm transition duration-300"
            >
              View Project
            </Link>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-9 lg:mt-10 order-7 md:order-2">
            <img
              src={CrimsonPlateImage}
              alt="Culture Café Program"
              className="w-full object-cover lg:scale-110 scale-90"
            />
          </div>
        </div>
      </section>

      {/* Back to Resume Link */}
      <div className=" col-span-8 md:col-span-10 lg:col-start-2 col-start-1 flex justify-between items-center mt-0">
        <div className="flex items-center gap-2 mx-20 lg:mx-10 lg:my-20 lg:mb-20">
          <IoIosArrowRoundBack size={48} color="#493B32" className="my-4" />
          <p className="font-open font-semibold text-xl lg:text-2xl text-[#493B32]">
            Resume
          </p>
        </div>
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

export default Projects; 