"use client"
import '../globals.css';
import React, { useEffect } from 'react';

const generateRandomDigit = () => (Math.random() > 0.5 ? '1' : '0');

const generateRandomStyle = () => ({
  left: `${Math.random() * 100}vw`,
  animationDuration: `${Math.random() * 0.5 + 0.1}s`, // Shorten duration for faster animation
  animationDelay: '0s', // Remove delay to start immediately
});

const addRandomDigit = (container) => {
  const span = document.createElement('span');
  span.textContent = generateRandomDigit();
  Object.assign(span.style, generateRandomStyle());
  container.appendChild(span);

  // Remove the span element after it completes the animation
  span.addEventListener('animationend', () => {
    span.remove();
  });
};


const Services = () => {
    useEffect(() => {
        const container = document.getElementById('binary-container');
        const intervalId = setInterval(() => {
          for (let i = 0; i < 5; i++) { // Add more digits each interval
            addRandomDigit(container);
          }
        }, 15); // Add new digits every 50ms
    
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
      }, []);
    
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white relative overflow-hidden">
          {/* Background animation for falling binary digits */}
          <div id="binary-container" className="falling-digits"></div>
    
          <div className="text-center animate-pulse relative z-10">
            <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
            <p className="text-2xl">We are working hard to bring you this page.</p>
            <div className="mt-8">
              <svg className="w-16 h-16 mx-auto animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.268 0 2 4.268 2 12h2zm2 5.291A7.963 7.963 0 014 12H2c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
              </svg>
            </div>
          </div>
        </div>
      );
};

export default Services;