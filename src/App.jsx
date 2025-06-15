import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Home/Home";
import About from "./components/AboutMe/AboutMe";
import Experience from './components/WorkExperience/WorkExperience'
import Projects from "./components/PersonalProjects/PersonalProjects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/ContactMe/ContactMe";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
