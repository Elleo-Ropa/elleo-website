import React from 'react';
import { motion } from 'framer-motion';

// Helper component to render the custom element without TypeScript errors
const DotLottie = (props: any) => {
  return React.createElement('dotlottie-wc', props);
};

const Hero: React.FC = () => {
  return (
    <section
      // Background gradient matched exactly to Vision section (starting from white)
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-[#f5f3ff] to-[#ede9fe] overflow-hidden pt-20"
    >
      {/* 
         Background blobs reverted to lower opacity for subtle effect
      */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: '#a09fe2' }}
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.8, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: '#b99c48' }}
      />

      {/* Updated to use max-w-[1400px] specifically for Hero section as requested */}
      <div className="container mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full relative z-10">

        {/* Left Column: Text Content (Order 2 on mobile, Order 1 on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0 order-2 lg:order-1"
        >
          {/* 
            Headline updated:
            - Added md:leading-[1.2] and lg:leading-[1.2] to explicitly override the line-height: 1 
              that comes with md:text-6xl and lg:text-7xl in Tailwind.
          */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[3.8rem] text-elleo-dark leading-[1.2] md:leading-[1.2] lg:leading-[1.2] mb-8 tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              For a better tomorrow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block"
            >
              a <span className="italic text-elleo-light">healthier</span> change
            </motion.span>
          </h1>
          {/* Updated max-width to 50rem (max-w-[50rem]) as requested */}
          {/* Updated line-height to 2rem (leading-[2rem]) and forced it with md:leading-[2rem] to override md:text-xl default */}
          <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] text-elleo-dark/70 font-sans leading-[1.5rem] md:leading-[2rem] max-w-[50rem] mx-auto lg:mx-0 mb-10">
            Our vision is to provide our customers with a healthier choice by offering distinctive nutritious food prepared with premium quality ingredients
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start mb-14 lg:mb-0">
            <a href="#brands" className="px-8 py-4 bg-elleo-dark text-white rounded-full font-sans font-bold text-[14px] tracking-wide hover:bg-elleo-light transition-colors duration-300 w-auto inline-block">
              View Brands
            </a>
          </div>
        </motion.div>

        {/* Right Column: Lottie Animation (Order 1 on mobile, Order 2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          // Removed delay: 0.2 and reduced duration for faster appearance
          transition={{ duration: 0.5, delay: 0 }}
          className="relative h-[320px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end pointer-events-none order-1 lg:order-2"
        >
          <div className="w-full h-full md:w-[110%] md:h-[110%] scale-110 -translate-x-[10px] lg:translate-x-10 mix-blend-multiply">
            <DotLottie
              src="https://lottie.host/0c5c72b4-1e47-4a13-a4a1-d09963897550/xQ6pfsJcDa.lottie"
              speed="1"
              background="transparent"
              style={{ width: '100%', height: '100%' }}
              mode="forward"
              loop
              autoplay
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center hidden md:flex pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="animate-bounce"
        >
          <span className="text-elleo-dark font-sans font-bold text-[0.7rem] tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;