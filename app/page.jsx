"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Sparkles,
  Code,
  Brain,
  Rocket,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mouse,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  // Mouse parallax effect (only runs in the browser)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading animation
  useEffect(() => {
    setIsLoaded(true);
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  // Interactive features data
  const features = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Using cutting-edge technologies to build powerful applications",
      color: "purple",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Incorporating artificial intelligence for smarter solutions",
      color: "blue",
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Optimized for speed and exceptional user experience",
      color: "pink",
    },
  ];

  // Animated background shapes (only runs in the browser)
  const BackgroundShapes = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {typeof window !== "undefined" &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${Math.floor(Math.random() * 16 + 8)} h-${
              Math.floor(Math.random() * 16 + 8)
            } bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl`}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
    </div>
  );

  // Interactive 3D Card
  const Feature3DCard = ({ icon: Icon, title, description, color, index }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const card = e.currentTarget.getBoundingClientRect();
      const x = (e.clientY - card.top - card.height / 2) / 15;
      const y = -(e.clientX - card.left - card.width / 2) / 15;
      setRotation({ x, y });
    };

    return (
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      >
        <div
          className={`w-full p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br 
                     from-${color}-500/10 to-${color}-700/20 border border-${color}-500/20
                     hover:border-${color}-500/40 transition-all duration-300
                     transform-gpu`}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative z-10">
            <Icon
              className={`w-8 h-8 text-${color}-400 mb-4`}
              style={{ transform: "translateZ(30px)" }}
            />
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ transform: "translateZ(30px)" }}
            >
              {title}
            </h3>
            <p className="text-gray-400" style={{ transform: "translateZ(30px)" }}>
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundShapes />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Mouse className="w-6 h-6 text-gray-400 mb-2" />
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
        >
          {/* Animated Title */}
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6"
            style={{
              transform: `perspective(1000px) 
                         rotateX(${mousePosition.y * 0.1}deg) 
                         rotateY(${mousePosition.x * 0.1}deg)`,
            }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Transform Your Ideas
            </span>
            <br />
            <span className="text-3xl sm:text-5xl text-gray-400">
              Into Digital Reality
            </span>
          </motion.h1>

          {/* Interactive Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Creating next-generation web experiences with cutting-edge technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg flex items-center gap-2 hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-8 py-3 rounded-full border border-purple-500/50 text-white font-bold hover:bg-purple-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <div
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-black"
        ref={containerRef}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature3DCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}



// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { Sparkles, Code, Brain, Rocket, Star, ArrowRight, Github, Linkedin, Twitter, Mouse, ChevronDown } from 'lucide-react';


// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(null);
//   const containerRef = useRef(null);
//   const controls = useAnimation();

//   // Mouse parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX - window.innerWidth / 2) / 25,
//         y: (e.clientY - window.innerHeight / 2) / 25
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Loading animation
//   useEffect(() => {
//     setIsLoaded(true);
//     controls.start({
//       y: 0,
//       opacity: 1,
//       transition: { duration: 1, ease: 'easeOut' }
//     });
//   }, [controls]);

//   // Interactive features data
//   const features = [
//     {
//       icon: Code,
//       title: "Modern Development",
//       description: "Using cutting-edge technologies to build powerful applications",
//       color: "purple"
//     },
//     {
//       icon: Brain,
//       title: "AI Integration",
//       description: "Incorporating artificial intelligence for smarter solutions",
//       color: "blue"
//     },
//     {
//       icon: Rocket,
//       title: "Performance First",
//       description: "Optimized for speed and exceptional user experience",
//       color: "pink"
//     }
//   ];

//   // Animated background shapes
//   const BackgroundShapes = () => (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className={`absolute w-${Math.floor(Math.random() * 16 + 8)} h-${Math.floor(Math.random() * 16 + 8)} 
//                     bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl`}
//           animate={{
//             x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
//             y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
//             scale: [0.5, 1.5, 0.5],
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//         />
//       ))}
//     </div>
//   );

//   // Interactive 3D Card
//   const Feature3DCard = ({ icon: Icon, title, description, color, index }) => {
//     const [rotation, setRotation] = useState({ x: 0, y: 0 });
    
//     const handleMouseMove = (e) => {
//       const card = e.currentTarget.getBoundingClientRect();
//       const x = (e.clientY - card.top - card.height / 2) / 15;
//       const y = -(e.clientX - card.left - card.width / 2) / 15;
//       setRotation({ x, y });
//     };

//     return (
//       <motion.div
//         className="relative group"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: index * 0.2 }}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={() => setRotation({ x: 0, y: 0 })}
//       >
//         <div
//           className={`w-full p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br 
//                      from-${color}-500/10 to-${color}-700/20 border border-${color}-500/20
//                      hover:border-${color}-500/40 transition-all duration-300
//                      transform-gpu`}
//           style={{
//             transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
//             transformStyle: 'preserve-3d',
//           }}
//         >
//           <div className="relative z-10">
//             <Icon className={`w-8 h-8 text-${color}-400 mb-4`} 
//                  style={{ transform: 'translateZ(30px)' }} />
//             <h3 className="text-xl font-bold text-white mb-2"
//                 style={{ transform: 'translateZ(30px)' }}>
//               {title}
//             </h3>
//             <p className="text-gray-400" style={{ transform: 'translateZ(30px)' }}>
//               {description}
//             </p>
//           </div>
          
//           {/* Hover Effects */}
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl" />
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur-sm" />
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       <BackgroundShapes />
      
//       {/* Hero Section */}
//       <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//         {/* Scroll Indicator */}
//         <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <Mouse className="w-6 h-6 text-gray-400 mb-2" />
//           <ChevronDown className="w-4 h-4 text-gray-400" />
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           className="text-center max-w-4xl mx-auto space-y-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={controls}
//         >
//           {/* Animated Title */}
//           <motion.h1 
//             className="text-5xl sm:text-7xl font-bold mb-6"
//             style={{
//               transform: `perspective(1000px) 
//                          rotateX(${mousePosition.y * 0.1}deg) 
//                          rotateY(${mousePosition.x * 0.1}deg)`
//             }}
//           >
//             <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
//                            text-transparent bg-clip-text">
//               Transform Your Ideas
//             </span>
//             <br />
//             <span className="text-3xl sm:text-5xl text-gray-400">
//               Into Digital Reality
//             </span>
//           </motion.h1>

//           {/* Interactive Subtitle */}
//           <motion.p 
//             className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Creating next-generation web experiences with cutting-edge technology
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <motion.button
//               className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500
//                          text-white font-bold shadow-lg flex items-center gap-2
//                          hover:shadow-purple-500/25 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
            
//             <motion.button
//               className="px-8 py-3 rounded-full border border-purple-500/50
//                          text-white font-bold hover:bg-purple-500/10 
//                          transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Learn More
//             </motion.button>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div 
//             className="flex justify-center gap-6 mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             {[Github, Linkedin, Twitter].map((Icon, index) => (
//               <motion.a
//                 key={index}
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//               >
//                 <Icon className="w-6 h-6" />
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Features Grid */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <Feature3DCard key={index} {...feature} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="fixed top-4 right-4 flex gap-4">
//         {['sm', 'md', 'lg'].map((size, index) => (
//           <motion.div
//             key={size}
//             className={`w-${size} h-${size} rounded-full bg-purple-500/30 backdrop-blur-lg`}
//             animate={{
//               y: [0, -10, 0],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 2,
//               delay: index * 0.2,
//               repeat: Infinity,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };