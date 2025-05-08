import React from "react";
import { FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "Portfolio",
    description:
      "Designed and developed a personal portfolio website to showcase projects, experience, and skills. Built with a responsive UI, smooth navigation, and optimized performance for a seamless user experience.",
    github: "https://github.com/Rishikadhote/Portfolio",
    image: "/portfolio.jpg", 
  },
  {
    title: " Hotel Management System",
    description:
      " Built a full-stack hotel booking system with an interactive booking form The goal of this project was to design a comprehensive hotel booking system that streamlines the reservation process for both customers and hotel staff. The frontend was built using React.js to deliver a responsive and user-friendly interface, while the backend was developed using Node.js and Express.js. ",
    github: "https://github.com/Rishikadhote/Regal_Hotel_Management_System",
    image: "/hotelManagement.jpg",
  },
  {
    title: "Schizophrenia Diagnosis Prediction",
    description:
      "Developed an explainable ML pipeline for early schizophrenia detection using dermatoglyphic and demographic data.Integrated SMOTE and CTGAN for class imbalance handling and SHAP explainability.",
    github: "https://github.com/Rishikadhote/Schizophrenia-Diagnosis-Prediction",
    image: "/diseasePrediction.png",
  },
  {
    title: "Inshort Clone",
    description:
      "Built a functional clone of the Inshorts news app using React.js and REST APIs, featuring real-time news fetching, category filtering, and responsive UI design.",
    github: "https://github.com/Rishikadhote/Inshort_Clone",
    image: "/inshort.png",
  },
  {
    title: "Fundraiser",
    description:
      "This project focused on creating a secure and user-friendly crowdfunding platform to facilitate fundraising campaigns. The application was developed using a full-stack approach, with React.js for the frontend and Node.js with Express.js for the backend. MongoDB served as the database to store user and campaign information. ",
    github: "https://github.com/Rishikadhote/Fundraiser",
    image: "/fundraising.jpg",
  },
  {
    title: "Book Search App",
    description:
      "Developed a responsive Book Search App using React.js and Google Books API, enabling real-time book search with improved navigation and user experience.",
    github: "https://github.com/Rishikadhote/BookSearchApp",
    image: "/bookSearch.jpg",
  },
];

const ProjectsSection = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#E58AB2]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`text-5xl font-extrabold ${
            darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"
          }`}
        >
          Projects
        </h2>
        <p className="mt-4 text-lg">
          Here are some of my projects. Click "Load More" to see all on GitHub!
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border transition-transform 
              hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-[#121212] border-[#56A8F5] hover:border-[#8AC9FF]"
                  : "bg-white border-[#E58AB2] hover:border-[#03338d]"
              }`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-2xl border"
              />
              <h3
                className={`text-2xl font-bold mt-4 ${
                  darkMode ? "text-[#8AC9FF]" : "text-[#e7357f]"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 transition"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <a
          href="https://github.com/Rishikadhote"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-block font-bold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-md hover:shadow-lg ${
            darkMode
              ? "bg-[#56A8F5] text-black hover:bg-[#8AC9FF]"
              : "bg-[#E58AB2] text-white hover:bg-[#03338d]"
          }`}
        >
          Load More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;