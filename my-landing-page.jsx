import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaCode, FaDatabase, FaPaintBrush, FaMobileAlt, FaCloud, FaGamepad } from "react-icons/fa";

const courses = [
  { name: "C", icon: <FaCode /> },
  { name: "Python", icon: <FaCode /> },
  { name: "Java", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaCode /> },
  { name: "Android", icon: <FaMobileAlt /> },
  { name: "DBMS & SQL", icon: <FaDatabase /> },
  { name: "Django", icon: <FaCode /> },
  { name: "Ethical Hacking", icon: <FaCode /> },
  { name: "Graphic Design", icon: <FaPaintBrush /> },
  { name: "Video Editing", icon: <FaPaintBrush /> },
  { name: "Digital Marketing", icon: <FaCloud /> },
  { name: "Game Development", icon: <FaGamepad /> },
  { name: "UI/UX", icon: <FaPaintBrush /> },
  { name: "AWS", icon: <FaCloud /> },
  { name: "Data Structures", icon: <FaCode /> },
  { name: "Linux", icon: <FaCode /> },
  { name: "NodeJS", icon: <FaCode /> },
  { name: "PHP", icon: <FaCode /> }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 relative overflow-hidden border-4 border-neon shadow-[0_0_20px_#ff00ff]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
        <img src="/female-symbol.png" alt="Female Symbol" className="w-1/3 animate-pulse" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-pink-500 text-center my-6 relative drop-shadow-[0_0_15px_#ff00ff]">
        International Women's Day Celebrations
      </h1>
      <h2 className="text-2xl md:text-3xl text-blue-400 text-center mb-6 relative drop-shadow-[0_0_15px_#00ffff]">
        Free Courses Giveaway
      </h2>
      <p className="text-lg text-center mb-8 text-neon relative">
        Note : Only for Girl Students
      </p>
      
      <h3 className="text-2xl text-yellow-400 text-center mb-6 relative underline">Available Courses</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-4xl relative">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4 border-2 border-neon rounded-lg text-center text-lg font-semibold text-neon transition-all cursor-pointer shadow-[0_0_15px_#ff00ff] hover:shadow-[0_0_20px_#ff00ff,0_0_25px_#00ffff] hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{course.icon}</span>
            {course.name}
          </div>
        ))}
      </div>

      <a href="https://forms.gle/1HAcDwWNHdJ6jjYR8" target="_blank" rel="noopener noreferrer">
        <button className="mt-16 px-6 py-3 bg-sky-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-sky-700 hover:text-white transition-all animate-bounce relative">
          Register Now
        </button>
      </a>

      <footer className="mt-16 py-4 w-full flex flex-col md:flex-row justify-between items-center bg-gray-900 text-white text-lg font-semibold relative px-6">
        <p className="text-gray-400 text-sm">© International Women's Day Celebrations - SRGEC</p>
        <a href="https://tinyurl.com/srgecwc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-500 transition-all">
          <FaWhatsapp size={24} /> SRGEC Whatsapp Channel
        </a>
        <p className="text-gray-400 text-sm mt-2 md:mt-0">All rights reserved | Made by <span className='text-sky-400 drop-shadow-[0_0_10px_#00ffff]'>NMC</span> & <span className='text-sky-400 drop-shadow-[0_0_10px_#00ffff]'>Student's Society Team</span> ❤️</p>
      </footer>
    </div>
  );
};

export default LandingPage;
