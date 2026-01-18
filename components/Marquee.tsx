import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  const content = (
    <div className="flex items-center space-x-8 md:space-x-12 px-6">
      {/* Font sizes reduced from 5xl/7xl to 3xl/5xl as requested */}
      <span className="text-3xl md:text-5xl font-serif text-elleo-light whitespace-nowrap">Premium Quality</span>
      <span className="text-xl text-elleo-light/30">•</span>
      <span className="text-3xl md:text-5xl font-serif text-elleo-light whitespace-nowrap italic">Healthier Choice</span>
      <span className="text-xl text-elleo-light/30">•</span>
      <span className="text-3xl md:text-5xl font-serif text-elleo-light whitespace-nowrap">Australian Owned</span>
      <span className="text-xl text-elleo-light/30">•</span>
      <span className="text-3xl md:text-5xl font-serif text-elleo-light whitespace-nowrap italic">Exceptional Food</span>
      <span className="text-xl text-elleo-light/30">•</span>
    </div>
  );

  return (
    <div className="w-full py-8 md:py-10 bg-white overflow-hidden border-y border-elleo-light/20">
      <div className="flex relative">
        <motion.div
          className="flex"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Slightly slower for better readability of smaller text
          }}
          style={{ width: "fit-content" }}
        >
          {content}
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;