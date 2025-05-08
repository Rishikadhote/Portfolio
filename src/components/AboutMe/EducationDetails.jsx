import React from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

const educationData = [
  {
    stage: "B.Tech in Computer Science and Engineering",
    year: "2021 - 2025",
    institution: "Maulana Azad National Institute of Technology, Bhopal Madhya Pradesh ",
    grade: "7.65 CGPA",
    icon: <MdOutlineSchool />,
  },
  {
    stage: "Higher Secondary (12th Grade) - PCM Stream",
    year: "2020 - 2021",
    institution: " Kendriya Vidyalaya Sangathan, Betul Madhya Pradesh",
    grade: "86.4%",
    icon: <FaSchool />,
  },
  {
    stage: "Secondary School (10th Grade)",
    year: "2018 - 2019",
    institution: " Kendriya Vidyalaya Sangathan, Betul Madhya Pradesh",
    grade: "87.2%",
    icon: <FaUniversity />,
  },
];

const EducationCard = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className={`w-full p-4 my-4 rounded-lg shadow-md flex items-center transition-transform duration-300 
          ${darkMode ? "bg-[#1e1e1e] border-[#56A8F5] text-white" : "bg-[#e3f2fd] border-[#e7357f] text-black"}
          hover:scale-105 border-2`}
        >
          <div className="text-4xl p-3 rounded-full bg-[#e7357f] dark:bg-[ text-white">
            {edu.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">{edu.stage}</h3>
            <p className="text-md">{edu.institution}</p>
            <p className="text-sm">{edu.year} | {edu.grade}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;