import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer >
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 bg-[#493B32] lg:col-start-2 md:col-start-2 col-start-1 bg-[#493B32] text-[#FFF7F2] py-15 px-10 lg:px-0">
        <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-2 text-left">
          <h2 className="mb-5 font-tan text-2xl md:text-3xl lg:text-4xl">Let's Work Together</h2>
          <p className="col-span-5 col-start-1 text-left mb-10 leading-8 font-open text-lg ">
            I'm always excited to team up with visionary organizations or simply chat about design ideas. Want to brainstorm ideas together? I'd love to chat! Feel free to reach out at{' '}
            <a 
              href="mailto:iamneginasem@gmail.com" 
              className="text-[#FFF7F2] hover:bg-[#FFF7F2] hover:text-[#493B32] hover:p-2 transition duration-500 ease-in-out"
            >
              iamneginasem@gmail.com
            </a>
          </p>
        </div>
        
        <div className="col-span-4 md:col-span-2 lg:col-span-2 lg:col-start-10 flex justify-evenly items-end pr-0 mr-0">
          <a 
            href="https://github.com/Negin-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="mailto:iamneginasem@gmail.com"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/neginasem/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 