"use client";

import { AnimatePresence, motion } from "framer-motion"; // Import motion from framer-motion
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// const generateRandomDigit = () => (Math.random() > 0.5 ? '1' : '0');

// const generateRandomStyle = () => ({
//     left: `${Math.random() * 100}vw`,
//     animationDuration: `${20}s`, // Shorten duration for faster animation
//     animationDelay: '0s', // Remove delay to start immediately
// });

// const addRandomDigit = (container) => {
//     const span = document.createElement('span');
//     span.textContent = generateRandomDigit();
//     Object.assign(span.style, generateRandomStyle());
//     container.appendChild(span);

//     // Remove the span element after it completes the animation
//     span.addEventListener('animationend', () => {
//         span.remove();
//     });
// };

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    // useEffect(() => {
    //     // const container = document.getElementById('binary-container');
    //     const intervalId = setInterval(() => {
    //         for (let i = 0; i < 1; i++) { // Add more digits each interval
    //             addRandomDigit(container);
    //         }
    //         console.log('1');
    //     }, 1); // Add new digits every 25ms

    //     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // }, []);

    return (
        <AnimatePresence>
            <div className="relative z-20" key={pathname}>
                {/* <div id="binary-container" className="falling-digits z-10"></div> */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                <div className=" z-20">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
