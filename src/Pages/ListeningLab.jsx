import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaHeadphones, FaComments, FaMicrophone } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineSchool, MdLightbulb } from "react-icons/md";
import ListeningLab01 from "../assets/LL01-1.jpeg";
import ListeningLab02 from "../assets/LL01-2.jpeg";
import ListeningLab03 from "../assets/LL02-1.jpeg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import additional images for your slider here
// import SliderImage2 from "../assets/SliderImage2.png";
// import SliderImage3 from "../assets/SliderImage3.png";

// Add custom styles for Swiper
// import "./ListeningLab.css";

const ListeningLab = () => {
  // Sample images for the slider - replace with your actual project images
  const sliderImages = [
    { src: ListeningLab01, alt: "Listening Lab Preview 1" },
    { src: ListeningLab02, alt: "Listening Lab Preview 2" }, 
    { src: ListeningLab03, alt: "Listening Lab Preview 3" },
    // Replace with actual images
    // Replace with actual images
  ];

  // References for custom navigation
  const swiperRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Initialize custom navigation buttons
  useEffect(() => {
    if (swiperRef.current && prevBtnRef.current && nextBtnRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      
      if (prevBtnRef.current) {
        prevBtnRef.current.addEventListener('click', () => {
          swiperInstance.slidePrev();
        });
      }
      
      if (nextBtnRef.current) {
        nextBtnRef.current.addEventListener('click', () => {
          swiperInstance.slideNext();
        });
      }
    }
  }, []);

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
          Listening Lab
        </h1>
      </div>

      {/* Project Content */}
      <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 pl-20">
        {/* Project Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Swiper Slider Section */}
          <div className="lg:col-span-7">
            <div className="rounded-md overflow-hidden bg-[#FFF7F2] relative">
              {/* Custom navigation buttons */}
              <button 
                ref={prevBtnRef}
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 w-8 h-8 bg-[#FFF7F2] text-[#493B32] rounded-full flex items-center justify-center border border-[#493B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button 
                ref={nextBtnRef}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 w-8 h-8 bg-[#FFF7F2] text-[#493B32] rounded-full flex items-center justify-center border border-[#493B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-bullet',
                  bulletActiveClass: 'swiper-bullet-active',
                  horizontalClass: 'swiper-pagination-custom'
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="group aspect-video pb-10"
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center bg-[#FFF7F2] pt-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-contain pb-10"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Swiper styles */}
              <style>
                {`
                  .swiper-bullet {
                    width: 12px;
                    height: 12px;
                    background-color: #ccc;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 0 8px;
                    cursor: pointer;
                    transition: all 0.3s;
                  }
                  .swiper-bullet-active {
                    background-color: #E77B43;
                    transform: scale(1.2);
                  }
                  .swiper-pagination-custom {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    z-index: 10;
                  }
                `}
              </style>
            </div>
          </div>

          {/* Project Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm">
              Service Design
            </div>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            <h2 className="text-2xl font-semibold text-[#493B32]">
              Listening Lab
            </h2>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            <p className="text-[#493B32] leading-relaxed">
              The goal of the Listening Lab was to enhance the effectiveness of
              listening practices within the immigrant services sector by
              fostering trust, cultural understanding, and empathy.
            </p>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Zoom
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Miro
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Canva
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#493B32]"></div>

            {/* Links */}
            
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">Overview</h2>
          <div className="text-[#493B32] space-y-4">
            <p>
              It aimed to explore the role of listening in building mutual trust
              between staff and clients while addressing the cultural dimensions
              that influence communication. The project aimed to enhance staff's
              listening skills by developing practical tools and conducting
              workshops, thereby enabling them to more effectively understand
              and address client needs. Additionally, it emphasized that active
              listening is an act of generosity and connection, rather than
              merely a transactional activity. This approach ultimately
              strengthens relationships and enhances service delivery outcomes.
            </p>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">Objectives</h2>
          <div className="text-[#493B32] space-y-4">
            <p>
              The Listening Lab project is a reflection of my commitment to
              designing solutions that foster empathy, trust, and understanding.
              The Listening Lab was developed as a response to the growing need
              for effective listening practices within the immigrant services
              sector. In this project, I took on the role of (Service Designer)
              researcher, designer, and facilitator. My primary objective was to
              create a structured workshop that addressed this gap by exploring
              the nuances of listening, the impact of cultural influences, and
              practical ways to improve communication.
            </p>
          </div>
        </section>
        
        {/* Project Journey Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-10">Project Journey</h2>
          
          <div className="timeline-wrapper">
            <VerticalTimeline lineColor="#493B32">
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#FFF7F2', border: '1px solid #493B32', borderRadius: '0.375rem', boxShadow: 'none' }}
                contentArrowStyle={{ borderRight: '7px solid #493B32' }}
                date="Phase 1"
                iconStyle={{ background: '#5E3F27', color: '#FFF7F2' }}
                icon={<FaHeadphones />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">Listening Lab 01: User Research and Initial Exploration</h3>
                <p className="text-[#493B32]">
                  The first iteration, Listening Lab 01, focused on understanding the role of listening in
                  building trust, fostering empathy, and addressing cultural nuances. Through
                  qualitative research, workshops, and feedback sessions, we explored challenges such
                  as cultural biases, time constraints, and the lack of active listening in staff-client
                  interactions. The Lab introduced concepts like "inner and outer listening," reflective
                  exercises, and cultural discussions, helping participants recognize listening as an act
                  of generosity and connection rather than a task-focused activity.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#FFF7F2', border: '1px solid #493B32', borderRadius: '0.375rem', boxShadow: 'none' }}
                contentArrowStyle={{ borderRight: '7px solid #493B32' }}
                date="Phase 2"
                iconStyle={{ background: '#5E3F27', color: '#FFF7F2' }}
                icon={<FaComments />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">Listening Lab 02: Iterative Design and Refinement</h3>
                <p className="text-[#493B32]">
                  Building on the insights and feedback from the first Lab, Listening Lab 02 aimed to
                  refine the approach and deepen the exploration of cultural nuances in listening. This
                  second iteration included both online and in-person workshops, featuring interactive
                  elements like cultural moment presentations, reflective activities, and discussions on
                  high-context versus low-context communication. Participants were encouraged to
                  share personal stories, enhancing cultural understanding and empathy.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#FFF7F2', border: '1px solid #493B32', borderRadius: '0.375rem', boxShadow: 'none' }}
                contentArrowStyle={{ borderRight: '7px solid #493B32' }}
                date="Outcomes"
                iconStyle={{ background: '#5E3F27', color: '#FFF7F2' }}
                icon={<MdLightbulb />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">Impact and Outcomes</h3>
                <p className="text-[#493B32]">
                  One of the most rewarding aspects of this project was the impact it had on
                  participants. Staff reported increased awareness of their listening habits and a deeper
                  appreciation for listening as an act of connection and generosity. The workshops also
                  sparked curiosity about culturally informed listening practices, with participants
                  expressing interest in tangible tools to navigate these nuances effectively.
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#FFF7F2', border: '1px solid #493B32', borderRadius: '0.375rem', boxShadow: 'none' }}
                contentArrowStyle={{ borderRight: '7px solid #493B32' }}
                date="Reflections"
                iconStyle={{ background: '#5E3F27', color: '#FFF7F2' }}
                icon={<MdOutlineSchool />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">Key Learnings and Future Directions</h3>
                <p className="text-[#493B32]">
                  This project taught me the importance of creating safe spaces for dialogue and
                  collaboration, especially when addressing sensitive topics like cultural differences. It
                  reinforced my belief that listening is not just a skill but a powerful tool for building
                  trust and fostering inclusion. Moving forward, I aim to refine the Listening Lab
                  further, expanding its reach to other organizations and continuing to explore the
                  intersection of empathy, culture, and communication.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>

       
      </div>
      {/* Back to Resume Link */}
      <div className="col-span-8 md:col-span-10 lg:col-start-2 col-start-1 flex justify-between items-center mt-0">
        <Link
          to="/projects"
          className="flex items-center gap-2 mx-20 lg:mx-10 lg:my-20 lg:mb-20 hover:opacity-80 transition-opacity"
        >
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          />
        </div>
      </div>
    </main>
  );
};

export default ListeningLab;
