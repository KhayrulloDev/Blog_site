"use client"
import '../globals.css';
import React, { useEffect } from 'react';


const Resume = () => {
    
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white relative overflow-hidden">
          {/* Background animation for falling binary digits */}
          <div className="falling-digits"></div>
    
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

export default Resume;