// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Rocket, Star, Zap, Mail, Phone, Coffee, Heart } from 'lucide-react';

// const HireMe = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isExploding, setIsExploding] = useState(false);
//   const [activeSection, setActiveSection] = useState(0);
//   const [coffeeCount, setCoffeeCount] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const sections = [
//     "Why Hire Me? 🚀",
//     "Let's Create Magic ✨",
//     "Contact Me 📧"
//   ];

//   const handleExplode = () => {
//     setIsExploding(true);
//     setTimeout(() => setIsExploding(false), 1000);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       {/* Interactive Background */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, purple 0%, transparent 15%)`
//         }}
//       />

//       {/* Navigation Dots */}
//       <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
//         {sections.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveSection(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//               activeSection === index ? 'bg-purple-500 scale-150' : 'bg-gray-500'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
//         {/* Hero Section */}
//         <section className="h-screen snap-start flex items-center justify-center relative">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="text-center"
//           >
//             <motion.h1 
//               className="text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
//               whileHover={{ scale: 1.1 }}
//             >
//               Hire Me
//             </motion.h1>
//             <motion.div
//               className="relative inline-block"
//               whileHover={{ scale: 1.1 }}
//               onClick={handleExplode}
//             >
//               <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-700 transition-all">
//                 Let's Talk
//               </button>
//               <AnimatePresence>
//                 {isExploding && (
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center"
//                     initial={{ scale: 1 }}
//                     animate={{ scale: 2 }}
//                     exit={{ scale: 0 }}
//                   >
//                     {[...Array(8)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         className="absolute w-4 h-4 bg-purple-500 rounded-full"
//                         initial={{ scale: 0 }}
//                         animate={{
//                           scale: [1, 0],
//                           x: Math.cos(i * 45 * Math.PI / 180) * 100,
//                           y: Math.sin(i * 45 * Math.PI / 180) * 100,
//                         }}
//                         transition={{ duration: 0.5 }}
//                       />
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Skills Showcase */}
//         <section className="h-screen snap-start flex items-center justify-center bg-gradient-to-b from-black to-purple-900">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-8">
//             <motion.div
//               className="bg-black/50 p-8 rounded-xl backdrop-blur-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Rocket className="w-12 h-12 mb-4 text-purple-400" />
//               <h3 className="text-2xl font-bold mb-4">Innovation Master</h3>
//               <p className="text-gray-300">Turning wild ideas into reality with code magic ✨</p>
//             </motion.div>
//             <motion.div
//               className="bg-black/50 p-8 rounded-xl backdrop-blur-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Star className="w-12 h-12 mb-4 text-yellow-400" />
//               <h3 className="text-2xl font-bold mb-4">Problem Solver</h3>
//               <p className="text-gray-300">No challenge too big, no detail too small 🎯</p>
//             </motion.div>
//             <motion.div
//               className="bg-black/50 p-8 rounded-xl backdrop-blur-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Zap className="w-12 h-12 mb-4 text-blue-400" />
//               <h3 className="text-2xl font-bold mb-4">Fast Learner</h3>
//               <p className="text-gray-300">Always on the cutting edge of technology 🚀</p>
//             </motion.div>
//             <motion.div
//               className="bg-black/50 p-8 rounded-xl backdrop-blur-lg cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setCoffeeCount(prev => prev + 1)}
//             >
//               <Coffee className="w-12 h-12 mb-4 text-brown-400" />
//               <h3 className="text-2xl font-bold mb-4">Coffee Counter</h3>
//               <p className="text-gray-300">Cups consumed today: {coffeeCount} ☕</p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="h-screen snap-start flex items-center justify-center">
//           <motion.div 
//             className="text-center max-w-2xl mx-auto p-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//           >
//             <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
//             <div className="space-y-6">
//               <motion.a
//                 href="mailto:your.email@example.com"
//                 className="flex items-center justify-center space-x-4 bg-purple-600 text-white px-8 py-4 rounded-full text-xl hover:bg-purple-700 transition-all"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Mail className="w-6 h-6" />
//                 <span>Email Me</span>
//               </motion.a>
//               <motion.a
//                 href="tel:+1234567890"
//                 className="flex items-center justify-center space-x-4 bg-pink-600 text-white px-8 py-4 rounded-full text-xl hover:bg-pink-700 transition-all"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Phone className="w-6 h-6" />
//                 <span>Call Me</span>
//               </motion.a>
//             </div>
//             <motion.div
//               className="mt-12 flex items-center justify-center space-x-2 text-gray-400"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               <p>Made with</p>
//               <Heart className="w-5 h-5 text-red-500" />
//               <p>and lots of coffee</p>
//             </motion.div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HireMe;


"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Zap, Mail, Phone, Coffee, Heart, Box, Cube, 
         Sparkles, Code, Brain, Lightbulb, Music, Camera, Palette } from 'lucide-react';

const HireMe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  
  // Dynamic 3D cards data
  const cardData = [
    { icon: Code, title: "Full-Stack Development", color: "purple" },
    { icon: Brain, title: "AI & Machine Learning", color: "blue" },
    { icon: Palette, title: "UI/UX Design", color: "pink" },
    { icon: Camera, title: "Visual Content", color: "green" },
    { icon: Music, title: "Audio Production", color: "yellow" },
    { icon: Lightbulb, title: "Creative Solutions", color: "orange" }
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const handleScroll = () => {
      if (currentContainerRef) {
        setScrollPosition(currentContainerRef.scrollTop);
      }
    };

    if (currentContainerRef) {
      currentContainerRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // 3D Card Component with parallax effect
  const Card3D = ({ Icon, title, color, index }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget.getBoundingClientRect();
      const x = (e.clientY - card.top - card.height / 2) / 10;
      const y = -(e.clientX - card.left - card.width / 2) / 10;
      setRotation({ x, y });
    };

    return (
      <motion.div
        className={`w-64 h-64 rounded-xl bg-gradient-to-br from-${color}-500/30 to-${color}-700/30 
                   backdrop-blur-lg relative cursor-pointer`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <Icon className={`w-12 h-12 text-${color}-400 mb-4`} 
               style={{ transform: 'translateZ(20px)' }} />
          <h3 className="text-xl font-bold text-white" 
              style={{ transform: 'translateZ(30px)' }}>
            {title}
          </h3>
        </div>
      </motion.div>
    );
  };

  // Floating particles effect
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          animate={{
            x: [Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0), 
                Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0)],
            y: [Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0), 
                Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0)],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  // Interactive 3D Sphere
  const Sphere3D = () => (
    <motion.div 
      className="fixed right-10 top-10 w-32 h-32"
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
            style={{
              transform: `rotateX(${i * 22.5}deg) rotateY(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-x-hidden relative"
      style={{ perspective: '1000px' }}
    >
      <FloatingParticles />
      <Sphere3D />

      {/* Dynamic background gradient following mouse */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                      rgba(147, 51, 234, 0.3) 0%, transparent 25%)`,
          transition: 'background 0.1s ease-out',
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen py-20 px-8">
        {/* Hero Title with 3D effect */}
        <motion.div 
          className="text-center mb-32"
          style={{
            transform: typeof window !== "undefined"
              ? `perspective(1000px) 
                 rotateX(${(mousePosition.y - window.innerHeight/2) / 50}deg) 
                 rotateY(${(mousePosition.x - window.innerWidth/2) / 50}deg)`
              : '',
          }}>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                         text-transparent bg-clip-text mb-6">
            Creative Developer
          </h1>
          <p className="text-2xl text-gray-400">Turning Ideas into Digital Reality</p>
        </motion.div>
        
        {/* <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
          {/* Example fix for unescaped single quote */}
          {/* <p>It&apos;s a great day for coding! &apos;Welcome&apos; to Next.js</p> */}
        {/* </div> */}

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <Card3D 
              key={index}
              Icon={card.icon}
              title={card.title}
              color={card.color}
              index={index}
            />
          ))}
        </div>

        {/* Floating contact button */}
        <motion.button
          className="fixed bottom-8 right-8 px-6 py-3 rounded-full 
                     bg-gradient-to-r from-purple-500 to-pink-500
                     text-white font-bold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let`s Connect
        </motion.button>
      </div>
    </div>
  );
};

export default HireMe;

