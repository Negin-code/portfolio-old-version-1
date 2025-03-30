import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import CrimsonPlateImage from "../assets/CrimsonPlate.png";

const CrimsonPlate = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Project Title */}
      <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 flex flex-row items-start justify-start gap-1 pl-20">
        <div className="w-[5vh] sm:w-[5vh] md:w-[7vh] h-[2px] bg-[#493B32] mt-4"></div>
        <h1 className="text-4xl sm:text-5xl font-tan text-[#493B32] mb-12">
          Crimson Plate
        </h1>
      </div>

      {/* Project Content */}
      <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 pl-20">
        {/* Project Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Image Section */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={CrimsonPlateImage}
                alt="Crimson Plate Website Preview"
                className="w-full h-auto lg:scale-90"
              />
            </div>
          </div>

          {/* Project Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm">
              Front End
            </div>
            
            <div className="w-full h-[1px] bg-[#493B32]"></div>
            
            <h2 className="text-2xl font-semibold text-[#493B32]">
              Responsive Restaurant Website
            </h2>
            
            <div className="w-full h-[1px] bg-[#493B32]"></div>
            
            <p className="text-[#493B32] leading-relaxed">
              My goal was to create a responsive, visually engaging, and user-friendly restaurant
              website that delivers an intuitive, interactive digital experience while accurately reflecting
              the restaurant's brand, ensuring seamless navigation, performance, and accessibility.
            </p>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">HTML</span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">JavaScript</span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">Tailwind CSS</span>
            </div>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/yourusername/crimson-plate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#493B32] hover:text-[#5E3F27]"
              >
                <FaGithub className="mr-2" size={20} />
                Github
              </a>
              <a
                href="https://crimson-plate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#493B32] hover:text-[#5E3F27]"
              >
                <FaExternalLinkAlt className="mr-2" size={20} />
                Live website
              </a>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">Overview</h2>
          <div className="text-[#493B32] space-y-4">
            <p>
              The Crimson Plate project was a practical demonstration of my front-end development expertise,
              focusing on responsive design, interactivity, and performance optimization. The objective was
              to create a fully functional restaurant website that not only looks visually appealing but also
              provides a seamless and engaging user experience.
            </p>
            <p>
              I chose Tailwind CSS for its utility-first approach, which allowed me to quickly build a structured,
              mobile-friendly layout with minimal custom CSS. Tailwind's predefined classes ensured a consistent
              design system, improved scalability, and reduced development time while maintaining flexibility for
              customization.
            </p>
          </div>
        </section>

        {/* Libraries Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* JavaScript Libraries */}
          <section>
            <h2 className="text-3xl font-tan text-[#493B32] mb-6">JavaScript Libraries</h2>
            <ul className="space-y-4 text-[#493B32]">
              <li>
                <strong>AOS (Animate on Scroll)</strong> – JavaScript library for
                scroll-based animations.
              </li>
              <li>
                <strong>Typed.js</strong> – JavaScript library for typing text
                animations.
              </li>
              <li>
                <strong>SweetAlert.js</strong> – JavaScript library for modern
                pop-up alerts.
              </li>
            </ul>
          </section>

          {/* jQuery Plugins */}
          <section>
            <h2 className="text-3xl font-tan text-[#493B32] mb-6">jQuery Plugins</h2>
            <ul className="space-y-4 text-[#493B32]">
              <li>
                <strong>Magnific Popup</strong> – jQuery plugin for creating
                lightbox-style galleries.
              </li>
              <li>
                <strong>DataTables.js</strong> – jQuery plugin for enhancing
                HTML tables.
              </li>
              <li>
                <strong>jQuery Validation</strong> – jQuery plugin for form
                validation.
              </li>
            </ul>
          </section>
        </div>

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

export default CrimsonPlate;