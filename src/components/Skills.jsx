import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiMongodb,
  SiC,
  SiRedux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import postmanImage from "../assets/images/postman.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", logo: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", logo: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", logo: <SiReact />, color: "#61DAFB" },
    { name: "GitHub", logo: <SiGithub />, color: "#181717" },
    { name: "Node JS", logo: <SiNodedotjs />, color: "#339933" },
    { name: "Java", logo: <FaJava />, color: "#007396" },
    { name: "MySQL", logo: <SiMysql />, color: "#4479A1" },
    { name: "Git", logo: <SiGit />, color: "#F05032" },
    
  ];

  // Container variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual skill card variants
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-10 bg-black text-white">
      <div className="text-center mt-8">
        <motion.h3
          className="text-4xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-orange-500">Skills</span>
        </motion.h3>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Here are my technical skills
        </motion.p>
      </div>
      <motion.div
        className="flex items-center justify-center mt-12 gap-5 flex-wrap max-w-6xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="border-2 group border-transparent relative w-[45%] md:w-[22%] lg:w-[18%] bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center"
            style={{ borderColor: skill.color }}
            variants={skillVariants}
            whileHover="hover"
          >
            <div
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full shadow-lg mb-4"
              style={{ backgroundColor: skill.color }}
            >
              {skill.logo}
            </div>
            <h4 className="text-lg font-medium uppercase">{skill.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
