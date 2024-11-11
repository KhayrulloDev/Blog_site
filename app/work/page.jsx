"use client";
import '../globals.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Database, Globe } from 'lucide-react';

const Work = () => {
  const [count, setCount] = useState(0);
  
  const skills = [
    { icon: <Code className="w-8 h-8" />, name: "Frontend Development" },
    { icon: <Terminal className="w-8 h-8" />, name: "Backend Development" },
    { icon: <Database className="w-8 h-8" />, name: "Database Management" },
    { icon: <Cpu className="w-8 h-8" />, name: "System Architecture" },
    { icon: <Globe className="w-8 h-8" />, name: "Web Technologies" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Professional Experience
        </h1>
        <p className="text-xl text-gray-300">Building the future, one line of code at a time</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-16">
        <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-center mt-2 text-gray-400">Loading Experience... {count}%</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-center text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Message */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-16"
      >
        <p className="text-2xl text-gray-400">More details coming soon...</p>
        <div className="mt-4">
          <svg className="w-12 h-12 mx-auto animate-spin text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
