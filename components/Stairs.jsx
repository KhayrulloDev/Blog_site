"use client";

import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 9;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(9)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation} // Corrected spelling of "initial"
                    initial="initial" // Corrected spelling of "initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    );
};

export default Stairs;
