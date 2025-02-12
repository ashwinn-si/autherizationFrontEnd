import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
    return (
        <div className="flex justify-center w-full z-11 mt-5">
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="cursor-pointer"
                onClick={() => {
                    window.scrollBy({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}
            >
                <ChevronDown
                    size={32}
                    className="text-primary hover:text-primary/80"
                />
            </motion.div>
        </div>
    );
};

export default ScrollIndicator;