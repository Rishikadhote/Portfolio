import React from "react";
import { FaUsers, FaHandshake, FaMicrophone, FaLaptopCode } from "react-icons/fa";

const porData = [
  {
    role: "Placement Coordinator - Training Placement Cell",
    description: "Contributed to training and placement initiatives, organized online assessments, recruiter interviews, and skill-enhancement sessions.",
    icon: <FaUsers />,
  },
  {
    role: "Technical Team Head - Zeenith Coding Club",
    description: "Organized coding competitions, hackathons, and mentorship programs to foster a strong programming culture.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Lance Corporal - NCC-National Cadet Corps",
    description: "Led NCC cadet teams in various activities and events.Organized and coordinated successful team efforts, showcasing effective communication skills.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Tutor - AAROHA NGO",
    description: "Mentored underprivileged children with interactive learning sessions and academic support.",
    icon: <FaHandshake />,
  },
];

const PORCard = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      {porData.map((por, index) => (
        <div
          key={index}
          className={`w-full p-4 my-4 rounded-lg shadow-md flex items-center transition-transform duration-300 
          ${darkMode ? "bg-[#1e1e1e] border-[#56A8F5] text-white" : "bg-[#e3f2fd] border-[#e7357f] text-black"}
          hover:scale-105 border-2`}
        >
          <div className="text-4xl p-3 rounded-full bg-[#e7357f] dark:bg-[#E58AB2] text-white">
            {por.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">{por.role}</h3>
            <p className="text-md">{por.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PORCard;