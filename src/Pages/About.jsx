import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NeginImage1 from "../assets/malahat.png";

import NeginImage3 from "../assets/malahat.png";
import NeginImage4 from "../assets/malahat.png";
import NeginImage5 from "../assets/malahat.png";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Trigger test

const About = () => {
  const swiperRef = useRef(null);
  
  const slides = [
    NeginImage1,
    NeginImage3,
    NeginImage4,
    NeginImage5
  ];

  // Navigation functions
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-40 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Main content grid */}
      <section className="col-span-full grid grid-cols-5 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {/* Profile Image Gallery */}
        <div className="col-span-4 col-start-1 md:col-span-4 md:col-start-2 lg:col-span-8 lg:col-start-3 w-[320px] mx-25 my-10 lg:mx-0 lg:w-full relative">
          <div className="rounded-md overflow-hidden bg-[#FFF7F2] relative h-[500px]">
            {/* Custom navigation buttons */}
            <button 
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 w-8 h-8 bg-[#FFF7F2] text-[#493B32] rounded-full flex items-center justify-center border border-[#493B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous slide"
            >
              <BsArrowLeft className="w-4 h-4" />
            </button>
            
            <button 
              onClick={goNext}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 w-8 h-8 bg-[#FFF7F2] text-[#493B32] rounded-full flex items-center justify-center border border-[#493B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next slide"
            >
              <BsArrowRight className="w-4 h-4" />
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
              className="group h-full pb-10"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
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
                  bottom: 10px;
                  left: 0;
                  right: 0;
                  text-align: center;
                  z-index: 10;
                }
              `}
            </style>
          </div>
        </div>

        {/* About Text Content */}
        <div className="col-span-3 col-start-2 sm:col-span-3 sm:col-start-2 md:col-span-4 md:col-start-2 lg:col-span-10 lg:col-start-2 flex flex-col gap-4 md:gap-2  md:px-0">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-tan text-[#493B32] pb-2 w-full">
            About me
          </h1>

          <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
            My journey into programming began during my Bachelor's in Software
            Engineering, where I discovered the power of code to bring
            innovative concepts to life. Now, I'm sharpening my design and
            development skills through a New Media Design program —bridging
            creativity with technology to craft solutions that truly connect
            with people!
          </p>

          <p className="text-[#493B32] leading-relaxed w-full text-sm md:text-base">
            I love problem-solving and bridging design with development. From
            ideating UX flows in Figma to implementing them with HTML, CSS,
            JavaScript, and modern frameworks, I'm passionate about building
            experiences that look beautiful and work seamlessly. This blend of
            creative and technical skills has become my specialty in crafting
            impactful solutions throughout my studies and collaborations.
          </p>
        </div>

        {/* Full width paragraph */}
        <div className="col-span-3 col-start-2 md:col-span-4 md:col-start-2 lg:col-span-10 lg:col-start-2 flex flex-col gap-6 md:px-0">
          <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
            I love reading books because it fuels my curiosity and broadens my
            perspective, often sparking fresh ideas in unexpected ways. It
            fosters my ongoing commitment to stay curious and seek fresh
            insights, helping me grow both personally and professionally. In the
            same spirit, spending time with friends—both old and new—keeps me
            open to different viewpoints and encourages me to stay curious about
            the world around me.
          </p>

          <div className="w-full flex justify-end">
            <Link
              to="/resume"
              className="flex items-center justify-end gap-2 text-[#493B32] font-semibold text-lg md:text-xl mt-4 hover:underline"
            >
              Resume <IoArrowForward size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="col-span-full grid grid-cols-5 md:grid-cols-6 lg:grid-cols-12 gap-4 mt-16 md:mt-24">
        <div className="col-span-3 col-start-2 md:col-span-4 md:col-start-2 lg:col-span-10 lg:col-start-2">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-tan text-[#493B32] pb-2 w-full flex items-center gap-4 mb-8 md:mb-12">
            <span className="w-8 md:w-12 h-[2px] bg-[#493B32]"></span>
            My Core Values
          </h2>

          <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Row 1: Empty Right Column */}
            <div className="hidden md:block"></div>
            {/* Row 1: Left Column (Empathy), Right Column (Empty) */}
            <div className="md:col-span-1">
              <h3 className="text-lg md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
                <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
                Empathy
              </h3>
              <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
                I start every project by listening—carefully understanding the
                needs, emotions, and behaviors of the people I'm designing for.
                This user-first mindset underpins all of my work and ensures
                inclusivity, accessibility, and meaningful interactions.
              </p>
            </div>

            {/* Row 2: Right Column (Continuous Learning) */}
            <div className="md:col-span-1">
              <h3 className="text-sm md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
                <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
                Continuous Learning
              </h3>
              <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
                The tech and design landscapes are always shifting. That's why I
                thrive on exploring the latest tools, methodologies, and
                frameworks to push creative boundaries. By staying curious, I
                remain ready to innovate and evolve my craft.
              </p>
            </div>

            {/* Row 2: Empty Left Column */}
            <div className="hidden md:block"></div>

            {/* Row 3: Empty Right Column */}
            <div className="hidden md:block"></div>

            {/* Row 3: Left Column (Collaboration & Adaptability) */}
            <div className="md:col-span-1">
              <h3 className="text-sm md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
                <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
                Collaboration & Adaptability
              </h3>
              <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
                Great solutions emerge when diverse perspectives meet. I value an
                environment of open communication, constructive feedback, and
                continuous iteration. I embrace new challenges and pivot swiftly
                when needed, keeping the project's goals and the user's needs at
                the forefront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects Link */}
      <div className="col-span-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        <div className="col-span-3 col-start-1 md:col-span-6 md:col-start-1 lg:col-span-10 lg:col-start-2 flex justify-between items-center mt-8">
          <div className="flex items-center gap-2 mx-20 lg:mx-10 lg:my-20 lg:mb-20">
            <IoIosArrowRoundBack size={48} color="#493B32" className="my-4" />
            <p className="font-open font-semibold text-xl lg:text-2xl text-[#493B32]">Projects</p>
          </div>
          <div className="mx-0 sm:mx-20 my-10 mb-10 md:mx-20 lg:mx-10 lg:my-20 lg:mb-20">
            <IoIosArrowDropupCircle
              size={32}
              color="#493B32"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              aria-label="Scroll to top"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About; 
