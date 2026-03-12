import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const info = [
    {
      text: "Completed Projects",
      count: 3,
      icon: <FaCheckCircle className="text-4xl text-orange-400" />,
    },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1seH3YXiliGki4gd-RigoBzyvso3K0rcC/view?usp=drive_link";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  const Counter = ({ end }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // Animation duration in milliseconds
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.ceil(start));
        }
      }, 5);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{value}</span>;
  };

  return (
    <section
      id="about"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Removed overlay gradient for a pure black background */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-6xl font-extrabold tracking-wide mb-6">
          About <span className="text-orange-500">Me</span>
        </h3>
        <p className="text-lg text-gray-300 mb-12">
          Discover my journey and the milestones I've achieved.
        </p>

        <div className="flex flex-wrap justify-center gap-16 items-start">
          <div className="w-full md:w-5/12 bg-gray-800 bg-opacity-30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <p className="text-justify text-gray-300 leading-8 text-lg">
              I am currently pursuing a B.Tech at VVIT. With a strong passion
              for web development, I specialize in crafting dynamic, intuitive,
              and scalable user interfaces. My experience spans JavaScript,
              TypeScript, React.js and GitHub, allowing me
              to adapt seamlessly to various project requirements.
              <br />I am eager to learn, solve complex challenges, and
              contribute to impactful projects while delivering exceptional user
              experiences.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="flex gap-12">
              {info.map((content) => (
                <div
                  key={content.text}
                  className="bg-gray-800 bg-opacity-40 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
                >
                  {content.icon}
                  <h3 className="text-5xl font-bold text-orange-400 mt-4">
                    <Counter end={content.count} />
                    {content.count > 0 && (
                      <span className="text-orange-500">+</span>
                    )}
                  </h3>
                  <p className="text-gray-300 mt-2">{content.text}</p>
                </div>
              ))}
            </div>
            <button
              className="mt-12 py-3 px-10 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:translate-y-1"
              onClick={navigateToResume}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
