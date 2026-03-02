import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper to shuffle an array
  const shuffleArray = (array: string[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    // In Vite, we can dynamically import all images from a directory using import.meta.glob
    const loadImages = () => {
      // This reads all matching files in the public folder at build/dev time
      // Use any cast to bypass TypeScript error if vite/client types aren't set up
      const imageModules = (import.meta as any).glob('/public/Photo/*.{webp,png,jpg,jpeg}', { eager: true });

      // Extract the paths and remove '/public' since it's served from root
      const imagePaths = Object.keys(imageModules).map(key => key.replace('/public', ''));

      if (imagePaths.length > 0) {
        setImages(shuffleArray(imagePaths));
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    // Image slideshow interval
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full min-h-[100svh] bg-black overflow-hidden flex flex-col justify-end pb-[43px] md:pb-[20rem] lg:pb-16">
      {/* 
        The Background (Crossfading Slideshow) 
      */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          {images.length > 0 && (
            <motion.img
              key={currentImageIndex + images[currentImageIndex]} // Combine index and src to ensure key changes
              src={images[currentImageIndex]}
              alt="Premium F&B Background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
          )}
        </AnimatePresence>
      </div>

      {/* 
        Global Overlays (Top Gradient & Center Darkening)
        Ensures perfect text readability over the vivid photos.
      */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Global darkening overlay to ensure center text is readable */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top gradient darker than #273851 (Elleo Dark) for top navbar area */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#101826] to-transparent opacity-90" />

        {/* Bottom gradient to help anchor the bottom text */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Bottom Content Row (Left: Text, Right: Scroll Down) */}
      {/* Container padding exactly matches NavBar padding (pl-6 pr-3 md:px-6) */}
      <div className="relative z-20 w-full container mx-auto pl-6 pr-3 md:px-6 flex flex-row items-end justify-between">

        {/* Left Side: Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          {/* Reduced font size, left aligned, enhanced drop-shadow, guaranteed line-height via inline style */}
          {/* Using separate blocks for each line to have pixel-perfect gap control via margins */}
          <h1 className="font-serif text-2xl md:text-2xl lg:text-[43px] text-white tracking-tight max-w-[800px] drop-shadow-2xl">
            <div className="leading-tight">Stay for the experience</div>
            <div className="italic text-elleo-light leading-[1.3] mt-1 md:mt-0">
              Grab the goodness
            </div>
          </h1>
        </motion.div>

        {/* Right Side: Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden md:flex flex-col items-center gap-3 text-white mb-0"
        >
          {/* Vertical Track (above the text) */}
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            {/* Animated dropping line */}
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#a09fe2]"
            />
          </div>
          {/* SCROLL Text sits at the very bottom, perfectly aligned with the main text's bottom */}
          <span className="font-sans text-[11px] tracking-[0.2em] font-medium uppercase text-[#a09fe2] leading-none">
            Scroll
          </span>
        </motion.div>

      </div>

      {/* Decorative subtle grain over everything for premium texture */}
      <div className="absolute inset-0 opacity-[0.03] z-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

    </section>
  );
};

export default Hero;