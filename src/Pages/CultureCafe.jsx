import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaChartBar,
} from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { BsFillLightbulbFill, BsPencilSquare } from "react-icons/bs";
import CultureCafeCover from "../assets/CCCover.png";
import CultureCafe01 from "../assets/CC-1.png";
import CultureCafe02 from "../assets/CC-2.jpeg";
import CultureCafe03 from "../assets/CC-Blueprint.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// Add custom styles for Swiper


const CultureCafe = () => {
  // Sample images for the slider - replace with your actual project images
  const sliderImages = [
    { src: CultureCafeCover, alt: "Culture Cafe Cover" },
    { src: CultureCafe01, alt: "Culture Cafe Preview 1" },
    { src: CultureCafe02, alt: "Culture Cafe Preview 2" },
    { src: CultureCafe03, alt: "Culture Cafe Preview 3" },
    
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
        prevBtnRef.current.addEventListener("click", () => {
          swiperInstance.slidePrev();
        });
      }

      if (nextBtnRef.current) {
        nextBtnRef.current.addEventListener("click", () => {
          swiperInstance.slideNext();
        });
      }
    }
  }, []);

  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-10rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-10rem)] w-[2px] bg-[#493b32]"></div>

      {/* Project Title */}
      <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-10 lg:col-start-2 flex flex-row items-start justify-start gap-1 px-20 pt-15 sm:pt-25 lg:pt-0">
        <div className="w-[4vh] sm:w-[5vh] md:w-[7vh] h-[2px] bg-[#493B32] mt-4"></div>
        <h1 id="top" className="text-2xl sm:text-5xl font-tan text-[#493B32] mb-12">
          Culture Cafe
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                ref={nextBtnRef}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 w-8 h-8 bg-[#FFF7F2] text-[#493B32] rounded-full flex items-center justify-center border border-[#493B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-bullet",
                  bulletActiveClass: "swiper-bullet-active",
                  horizontalClass: "swiper-pagination-custom",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="group aspect-video pb-10"
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center bg-[#FFF7F2] pt-2"
                  >
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
            <div className="bg-[#5E3F27] text-[#FFF7F2] text-md sm:text-lg font-medium rounded-sm px-4 py-1 mb-4 w-fit flex justify-start items-start">
              Service Design
            </div>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
            <h3 className="text-md sm:text-xl font-semibold text-[#493B32] mb-4">
              Culture Cafe
            </h3>
            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>

            <p className="text-[#493B32] leading-relaxed">
              The goal was to evaluate the Culture Café program, identify areas
              for improvement, and propose actionable solutions to enhance
              participants' experience. The evaluation focused on understanding
              participants' experiences.
            </p>

            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4 text-[#493B32]">
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Zoom
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Miro
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                Canva
              </span>
              <span className="border border-[#493B32] px-3 py-1 text-[#493B32]">
                World Cafe Model
              </span>
            </div>

            <div className="w-full h-[1px] bg-[#493B32] mb-[10px] mt-[10px]"></div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">Objectives</h2>
          <div className="text-[#493B32] space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#FFF7F2] border border-[#493B32] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#5E3F27] w-10 h-10 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-semibold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#493B32]">
                    Understand Experiences
                  </h3>
                </div>
              </div>

              <div className="bg-[#FFF7F2] border border-[#493B32] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#5E3F27] w-10 h-10 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-semibold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#493B32]">
                    Gather Feedback
                  </h3>
                </div>
              </div>

              <div className="bg-[#FFF7F2] border border-[#493B32] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#5E3F27] w-10 h-10 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="font-semibold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#493B32]">
                    Uncover Insights
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Journey Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-10">
            Project Journey
          </h2>

          <div className="timeline-wrapper">
            <VerticalTimeline lineColor="#493B32">
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#FFF7F2",
                  border: "1px solid #493B32",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #493B32" }}
                date="Phase 1"
                iconStyle={{ background: "#5E3F27", color: "#FFF7F2" }}
                icon={<FaSearch />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">
                  Discovery Phase
                </h3>
                <p className="text-[#493B32]">
                  In the initial phase, I conducted a comprehensive problem
                  definition by identifying the key challenges participants
                  faced in the Culture Café experience. Using qualitative
                  research methodologies like the World Café Model, I gathered
                  data through interviews and facilitated group discussions
                  during an online Culture Café. The goal was to understand
                  participants' experiences, perceptions, and unmet
                  needsEvaluating Culture Cafe.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#FFF7F2",
                  border: "1px solid #493B32",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #493B32" }}
                date="Phase 2"
                iconStyle={{ background: "#5E3F27", color: "#FFF7F2" }}
                icon={<TbReportSearch />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">
                  Research & Analysis Phase
                </h3>
                <p className="text-[#493B32]">
                  Data collection was performed by engaging participants in
                  conversations around three key prompts. Responses were
                  documented through written feedback and collaborative
                  discussion. Using affinity mapping and clustering techniques,
                  I identified recurring themes and patterns, such as the
                  importance of cultural connection, a sense of belonging, and
                  safe spaces for practicing English socially evaluating Culture
                  Cafe. This analysis highlighted the program's strengths and
                  opportunities for growth.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#FFF7F2",
                  border: "1px solid #493B32",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #493B32" }}
                date="Outcomes"
                iconStyle={{ background: "#5E3F27", color: "#FFF7F2" }}
                icon={<BsFillLightbulbFill />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">
                  Ideation Phase
                </h3>
                <p className="text-[#493B32]">
                  Based on research findings, I developed a set of actionable
                  solutions. These recommendations focused on enhancing the
                  Culture Café experience by introducing new activity formats
                  (such as cultural performances and interactive sessions),
                  developing an online community platform for ongoing
                  engagement, and providing additional training for
                  volunteersEvaluating Culture Cafe.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#FFF7F2",
                  border: "1px solid #493B32",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #493B32" }}
                date="Key Findings"
                iconStyle={{ background: "#5E3F27", color: "#FFF7F2" }}
                icon={<FaChartBar />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-4">
                  Research Insights
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#5E3F27] mb-2">Connection and Belonging</h4>
                  <p className="text-[#493B32] border-l-2 border-[#5E3F27] pl-4 italic">
                    Participants expressed a strong sense of connection and belonging within the Culture Café community. 
                    They felt seen, supported, and valued, particularly due to shared experiences as newcomers. 
                    The opportunity to connect with others who understand their journey was highly appreciated.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#5E3F27] mb-2">Learning about/from Diverse Cultures</h4>
                  <p className="text-[#493B32] border-l-2 border-[#5E3F27] pl-4 italic">
                    Participants valued the opportunity to learn about different cultures and appreciated the authentic 
                    perspectives shared by newcomers. The Culture Café served as a platform for fostering cultural 
                    understanding and pride, enabling participants to bond over shared interests and experiences.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5E3F27] mb-2">Practice English Socially & Safely</h4>
                  <p className="text-[#493B32] border-l-2 border-[#5E3F27] pl-4 italic">
                    The Culture Café provided a safe and informal space for participants to practice English language skills. 
                    It offered a low-pressure environment without formal correction, allowing participants to learn and 
                    communicate with one another comfortably.
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: "#FFF7F2",
                  border: "1px solid #493B32",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                }}
                contentArrowStyle={{ borderRight: "7px solid #493B32" }}
                date="Reflections"
                iconStyle={{ background: "#5E3F27", color: "#FFF7F2" }}
                icon={<BsPencilSquare />}
              >
                <h3 className="text-xl font-semibold text-[#493B32] mb-2">
                  Prototype & Feedback Phase
                </h3>
                <p className="text-[#493B32]">
                  I developed actionable recommendations for improving the
                  Culture Café, such as building an online platform for ongoing
                  engagement, diversifying activities, and expanding outreach to
                  broader communitiesEvaluating Culture Cafe.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-tan text-[#493B32] mb-6">The Impacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            {/* Outcome 1 */}
            <div className="bg-[#FFF7F2] border border-[#493B32] p-8 rounded-md">
              <h3 className="text-xl font-semibold text-[#493B32] mb-4">Outcome 1</h3>
              <p className="text-[#493B32] font-medium mb-6 italic">
                Participants experience decreased social isolation when attending the Culture Café.
              </p>
              
              <h4 className="text-lg font-semibold text-[#5E3F27] mb-3">Indicators</h4>
              <ul className="list-disc pl-6 text-[#493B32] space-y-2">
                <li>Participants attend at least 1X/ month over a 6 month period.</li>
                <li>Participants share a reflection/ comment/ idea/ response either in the Q & A or final wrap up time at least 1X/ over a 6 month period.</li>
              </ul>
            </div>
            
            {/* Outcome 2 */}
            <div className="bg-[#FFF7F2] border border-[#493B32] p-8 rounded-md">
              <h3 className="text-xl font-semibold text-[#493B32] mb-4">Outcome 2</h3>
              <p className="text-[#493B32] font-medium mb-6 italic">
                Participants who present a Cultural Moment Presentation at the Culture Café acquire capacity-building skills.
              </p>
              
              <h4 className="text-lg font-semibold text-[#5E3F27] mb-3">Capacity Building</h4>
              <ul className="list-disc pl-6 text-[#493B32] space-y-2">
                <li>Through the opportunity to research, design, prepare and deliver a cultural presentation of their choice (project management skills, creative communication, software skills).</li>
                <li>Through the opportunity to publicly present their presentation in English to an audience in a welcoming, safe space (public speaking skills, English language skills, gaining confidence).</li>
                <li>Through the opportunity to give and receive feedback from their audiences (strategic thinking skills, listening skills, communication, self-empowerment).</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-[#5E3F27] mt-6 mb-3">Indicators</h4>
              <ul className="list-disc pl-6 text-[#493B32] space-y-2">
                <li>Presenters are given a reflective feedback questionnaire/ debrief after their presentation and self-disclose their capacities based on the questions asked.</li>
                <li>Presenters ask to present again at another Culture Café within 1 year period.</li>
              </ul>
            </div>
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

export default CultureCafe;
