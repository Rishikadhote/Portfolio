import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Software Developer", "Data Analyst", "Full Stack Developer" , "Machine Learning Developer" ,];

const Intro = ({ darkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full min-h-screen flex items-center justify-center transition-all duration-300 px-6 pt-20 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#e7357f]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I am a{" "}
            <motion.span
              key={roleIndex}
              className={`${
                darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Passionate about building AI-driven applications, scalable web
            platforms, and intelligent automation solutions. I specialize in{" "}
            <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#E58AB2]"}`}>
              machine learning
            </span>,{" "}
            <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#E58AB2]"}`}>
              deep learning
            </span>, and{" "}
            <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#E58AB2]"}`}>
              full-stack development
            </span>.
          </p>

          {/* Download CV Button */}
          <div className="mt-4 flex justify-center md:justify-start">
            <a
              href="/FinalResume.pdf"
              download="Resume.pdf"
              className={`inline-block px-6 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-md ${
                darkMode
                  ? "bg-[#56A8F5] text-black hover:bg-[#8AC9FF]"
                  : "bg-[#e7357f] text-white hover:bg-[#03338d]"
              }`}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center flex-1">
          <motion.img
            src="/logo.png"
            alt="Profile"
            className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-full border-4 shadow-lg 
            transition-all duration-300 
            border-[#E58AB2] dark:border-[#56A8F5]"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;