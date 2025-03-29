import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

import profileImage from "../assets/profileF.png";
import crimsonPlate from "../assets/CrimsonPlate.png";

const Home = () => {
  return (
    <main className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 min-h-screen relative w-full pt-20 lg:pt-40 lg:px-0 overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-16 md:left-20 top-0 h-[78vh] w-[2px] bg-[#493b32]">
        <span className="absolute -left-6 md:-left-9 top-[83vh] sm:top-[83vh] -translate-y-1/2 rotate-[-90deg] text-sm md:text-xl text-[#493B32] font-tan">
          2025
        </span>
      </div>
     

      {/* Right vertical line */}
      <div className="absolute right-10 top-0 h-[65vh] w-[2px] bg-[#493b32]">
        {/* Social links */}
        <div className="absolute -right-3 top-[78vh] -translate-y-1/2 flex flex-col items-center justify-evenly gap-7 z-20 text-[#493b32]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <MdEmail size={32}/>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>

      {/* Content container */}
      <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
        {/* Title section - full width */}
        <div className="col-span-4 md:col-span-6 lg:col-span-11 text-right mt-20 mr-15 lg:mr-0">
          <h1 className="font-tan text-[2.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] leading-tight">
            Hi, I'm Negin
          </h1>
        </div>

        {/* Image and subtitle container */}
        <div className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-0 mr-15 lg:mr-0 lg:mt-8">
          {/* Subtitle section */}
          <div className="col-span-4 md:col-span-6 lg:col-span-5 lg:col-start-7 flex flex-col justify-center text-right">
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#493B32] font-open">
              A Designer & Developer <br />
              Crafting User-Centric <br />
              Experiences!
            </h2>
            {/* Arrow*/}
            <div className="hidden lg:flex justify-end mt-20">
              <IoIosArrowDropdownCircle 
                color="#5E3F27" 
                className="animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
                aria-label="Scroll to bottom"
              />
            </div>
          </div>

          {/* Image and mobile arrow section */}
          <div className="col-span-4 md:col-span-6 lg:col-span-12 lg:col-start-2 flex flex-row items-center justify-center lg:justify-start gap-4">
            <div className="relative max-w-[270px] mr-10 md:max-w-[300px] lg:max-w-[400px] md:mr-100">
              <img
                src={profileImage}
                alt="Negin's Profile Picture"
                className="w-full h-auto object-cover mt-0 ml-20 sm:ml-0 lg:mt-[-300px] lg:ml-[120px]"
              />
            </div>
            {/* Arrow - visible only on mobile/tablet */}
            <div className="flex lg:hidden items-center mt-[-200px] lg:mt-[-100px]">
              <IoIosArrowDropdownCircle size={64} color="#5E3F27" className="animate-bounce" />
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 col-span-full bg-[#493B32] py-16 px-10 lg:px-0 mt-[-10px] lg:mt-[-40px] w-[100vw] z-10">
          
          {/* Title on the Left */}
          <div className="col-span-4 md:col-span-2 lg:col-span-2 col-start-1 lg:col-start-2 flex items-center justify-start lg:justify-start lg:items-start gap-2 text-left">
            <div className="w-[5vh] lg:w-[9vh] h-[2px] bg-[#FFF7F2] mt-2 "></div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-tan text-[#FFF7F2]">About</h2>
          </div> 

          {/* Description on the Right */}
           <div className="col-span-4 md:col-span-6 lg:col-start-8 lg:col-end-12 text-base md:text-lg leading-7 text-left md:text-right text-[#FFF7F2] mt-8 lg:mt-0">
            <br />
            <p>
              I am a passionate UI/UX designer and front-end developer based in
              Vancouver. With a strong background in design thinking and
              user-centered design, I thrive on crafting digital experiences
              that connect with people on a meaningful level. I love blending
              creativity, empathy, and technical skills to build solutions that
              are not only visually appealing but also intuitive and accessible.
            </p>
            
          </div>
          
        </section> 

        {/* Projects Section */}
        <section className="grid grid-cols-4  md:grid-cols-6 lg:grid-cols-12 lg:col-span-12 lg:col-start-2 col-span-full py-20 px-0 text-[#493B32] relative">
          {/* Title on the Left */}
          <div className="md:col-span-4 lg:col-span-8 col-span-3 col-start-1 mx-10 lg:mx-0 flex items-center mb-8">
            <div className="w-[5vh] md:w-[9vh] h-[2px] bg-[#493B32] mr-2"></div>
            <h2 className="text-3xl md:text-5xl font-tan text-[#493B32] text-right">
              Projects
            </h2>
          </div>

          {/* Projects Container - Responsive Grid */}
          <div className="col-span-10 col-start-1 col-end-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1 */}
            <div className="bg-[#FFF7F2] p-6 flex flex-col">
              <img
                src={crimsonPlate}
                alt="Crimson Plate Website"
                className="w-full h-auto mb-2 mt-2"
              />
              <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
                Front-end
              </span>
              <div className="w-full h-[1px] bg-[#493B32]"></div>
              <h3 className="text-2xl font-semibold mt-4 text-left">
                Crimson Plate Website
              </h3>
              <p className="text-md mt-2 text-left">
                The goal was to create a responsive, visually engaging, and
                user-friendly restaurant website that delivers an intuitive,
                interactive digital experience while accurately reflecting the
                restaurant's brand.
              </p>
              <div className="w-full h-[1px] bg-[#493B32] mb-[20px] lg:mb-[36px] lg:mt-[36px] mt-[20px]"></div>
              <div className="flex flex-wrap gap-2 mt-0 lg:mt-4">
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
              <div className="w-full h-[1px] bg-[#493B32] mt-[20px] lg:mt-[36px]"></div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#FFF7F2] p-6 flex flex-col">
              <img
                src={crimsonPlate}
                alt="Crimson Plate Website"
                className="w-full h-auto mb-2 mt-2"
              />
              <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
                Front-end
              </span>
              <div className="w-full h-[1px] bg-[#493B32]"></div>
              <h3 className="text-2xl font-semibold mt-4 text-left">
                Crimson Plate Website
              </h3>
              <p className="text-md mt-2 text-left">
                The goal was to create a responsive, visually engaging, and
                user-friendly restaurant website that delivers an intuitive,
                interactive digital experience while accurately reflecting the
                restaurant's brand.
              </p>
              <div className="w-full h-[1px] bg-[#493B32] mb-[20px] lg:mb-[36px] lg:mt-[36px] mt-[20px]"></div>
              <div className="flex flex-wrap gap-2 lg:mt-4 mt-0">
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
              <div className="w-full h-[1px] bg-[#493B32] lg:mt-[36px] mt-[20px]"></div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="col-span-8 md:col-span-10 lg:col-start-2 col-start-1 flex justify-between items-center mt-8">
            <Link 
              to="/projects" 
              className="flex items-center gap-2 mx-10 lg:mx-[-30px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo(0, 0)}
            >
              <IoIosArrowRoundBack size={48} color="#493B32" className="my-4" />
              <p className="font-open font-semibold text-2xl">Projects</p>
            </Link>
            <div>
          <IoIosArrowDropupCircle
            size={48}
            color="#493B32"
            className="mx-20 my-10 mb-10 lg:mx-10 lg:my-20 lg:mb-20 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            aria-label="Scroll to top"
          />
        </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
