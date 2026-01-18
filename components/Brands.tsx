import React, { useState } from 'react';
import { BRANDS, SYMBOL } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Brands: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(BRANDS[1].id); // Default to middle item

  return (
    <section className="py-32 bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 relative">
        <div id="brands" className="absolute -top-[90px] left-0 invisible" />
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-serif text-[3rem] text-elleo-dark tracking-[-0.02em]">Our Brands</h2>
          <p className="font-sans text-gray-500">Discover our culinary experiences</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-[700px] w-full">
          {BRANDS.map((brand) => {
            const isActive = activeId === brand.id;

            return (
              <motion.div
                key={brand.id}
                layout
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onMouseEnter={() => setActiveId(brand.id)}
                onClick={() => setActiveId(brand.id)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer group ${isActive ? 'flex-[3]' : 'flex-[1]'
                  }`}
                style={{
                  '--brand-color': brand.color,
                } as React.CSSProperties}
              >
                {/* Background Image */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />

                {/* Overlay - Adjusted to be lighter as requested */}
                <div className={`absolute inset-0 transition-all duration-500 ${isActive
                  ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
                  : 'bg-black/50 group-hover:bg-black/30'
                  }`} />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">

                  {/* Top Header - Arrow Removed */}
                  <div className="flex justify-end items-start">
                    {/* ArrowUpRight was here, now removed as requested */}
                  </div>

                  {/* Bottom Content Area */}
                  <div className={`relative z-10 w-full h-full flex flex-col ${isActive ? 'justify-end' : 'justify-end items-center'}`}>
                    {isActive ? (
                      /* Active State Content */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        {/* Title - Colors updated based on brand, Margin bottom reduced to 0.5rem (mb-2) */}
                        <motion.h2
                          layout="position"
                          className="font-serif leading-none mb-2 text-3xl md:text-[45px] text-[var(--brand-color)] tracking-[-0.02em]"
                        >
                          {brand.name}
                        </motion.h2>

                        {/* Flex container to position Text left and Button right */}
                        <div className="flex flex-col md:flex-row items-end justify-between gap-6">

                          {/* Left side: Description & Tags */}
                          <div className="max-w-md">
                            {/* Description */}
                            <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed drop-shadow-sm mb-4">
                              {brand.description}
                            </p>

                            {/* Bottom Tags - Updated: tracking-[0.3px] added */}
                            <div className="hidden md:flex flex-wrap gap-2">
                              {brand.features.map(f => (
                                <span key={f} className="text-xs text-[var(--brand-color)] border border-[var(--brand-color)] px-3 py-1.5 rounded-lg font-semibold tracking-[0.3px]">
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right side: Updated Single Pill Button */}
                          <motion.a
                            href={`https://${brand.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="
                                px-10 py-4 
                                bg-[var(--brand-color)] text-white 
                                hover:bg-elleo-dark 
                                rounded-full
                                transition-colors duration-300 ease-in-out
                                shadow-lg
                                font-bold font-sans uppercase tracking-widest text-xs md:text-sm
                              ">
                              VISIT WEBSITE
                            </div>
                          </motion.a>
                        </div>
                      </motion.div>
                    ) : (
                      /* Inactive State Content - Show Brand Logo at bottom */
                      <motion.div
                        layout="position"
                        className="flex items-center justify-center pb-8"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-[150px] h-auto"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;