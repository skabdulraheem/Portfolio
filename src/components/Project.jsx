import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project Images
import Connectify from "../assets/images/Connectify.png";
import invigilation from "../assets/images/Invigilation.png";
import Gemini from "../assets/images/Gemini.png";
import Youtube from "../assets/images/Youtube.png";
import Ai_Sumz from "../assets/images/Ai_Sumz.png";
import vsm from "../assets/images/vsm.png";
import care from "../assets/images/carepulse.png";

const Project = () => {
  const projects = [
    
    {
      img: invigilation,
      name: "Invigilation",
      github_link: "https://github.com/skabdulraheem/Invigo",
      live_link: "https://invigilation-ss44.vercel.app/",
      tech_stack: ["React JS", "MongoDB", "Express JS", "Node.js"],
    },

    

    {
      img: care,
      name: "Next-Gen AI Interview Simulator",
      github_link: "https://github.com/skabdulraheem/AI_Interview_Simulator",
      live_link: "https://next-gen-ai-interview.vercel.app/",
      tech_stack: ["Node js", "Face-api.js", "react-speech-recognition", "Web Audio API"],
    },

    
    
  ];

  return (
    <section id="projects" className="py-20 text-white bg-black">
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-4">
          My <span className="text-orange-500">Projects</span>
        </h3>
        <p className="text-yellow-400 text-lg">My Works</p>
      </div>
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative mt-10">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="group relative h-full w-full p-4 bg-gradient-to-br from-gray-800 via-red-800 to-red-900 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-semibold mb-4">
                      {project.name}
                    </h3>
                    {/* Tech Stack (revealed on hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold text-green-400 mb-2">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs shadow-md transition-transform duration-300 transform hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-orange-500 px-4 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-orange-600"
                      >
                        <FaGithub className="inline" />
                        <span>Github</span>
                      </a>
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-orange-500 px-4 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-orange-600"
                        >
                          <FaExternalLinkAlt className="inline" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
