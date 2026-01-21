import React, { useEffect, useRef } from 'react';
import { STATS, SYMBOL } from '../constants';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// Component for animating numbers
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix (e.g., "500K" -> 500, "K")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20, duration: 2000 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-elleo-dark relative overflow-hidden" id="about">
      {/* Background Ambience & Unique Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-elleo-light/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          {/* Reduced font size for both main title and subtitle */}
          <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Elleo Group <br />
            <span className="italic text-elleo-light text-2xl md:text-3xl">By The Numbers</span>
          </h3>
          <p className="font-sans text-white/50 uppercase tracking-[0.2em] text-sm font-bold">Corporate stores only</p>
        </motion.div>

        {/* Clean Grid Layout with minimalist, floating feel */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-8 mb-24">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center relative"
            >
              {/* Animated top bar */}
              <div className="w-12 h-1 bg-white/10 mb-8 rounded-full group-hover:w-24 group-hover:bg-elleo-light transition-all duration-300" />

              <div className="font-serif text-[3rem] md:text-6xl lg:text-7xl text-white mb-4 flex items-center drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 origin-center">
                <Counter value={stat.value} />
              </div>
              {/* Font size changed from text-lg to text-base (1rem) */}
              {/* Font size and line wrapping adjusted for mobile */}
              <div className="font-sans font-bold text-[13px] md:text-[14px] text-elleo-light mb-1 tracking-widest uppercase text-center leading-tight">
                {stat.label === "Total Branches" ? (
                  <>Total<br className="md:hidden" /> Branches</>
                ) : stat.label === "Monthly Visitors" ? (
                  <>Monthly<br className="md:hidden" /> Visitors</>
                ) : (
                  stat.label
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique "Footprint" container for states */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Increased margin top from mt-8 to mt-32 to push it further down */}
          <div className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col items-center mt-32">
            {/* Absolute Label Positioned on Top Border */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-elleo-dark border border-elleo-light text-elleo-light px-6 py-2 rounded-full text-[12px] md:text-[0.8rem] font-bold uppercase tracking-widest z-10 whitespace-nowrap">
              Branch Distribution
            </div>

            <div className="flex flex-wrap justify-around items-center gap-8 md:gap-16 w-full pt-2">
              <div className="flex flex-col items-center group">
                <b className="text-white text-3xl md:text-5xl font-serif mb-2 group-hover:text-elleo-light transition-colors">
                  <Counter value="25" />
                </b>
                <span className="text-elleo-light font-sans text-[11px] md:text-[14px] font-bold tracking-[0.2em]">NSW</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />

              <div className="flex flex-col items-center group">
                <b className="text-white text-3xl md:text-5xl font-serif mb-2 group-hover:text-elleo-light transition-colors">
                  <Counter value="2" />
                </b>
                <span className="text-elleo-light font-sans text-[11px] md:text-[14px] font-bold tracking-[0.2em]">VIC</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />

              <div className="flex flex-col items-center group">
                <b className="text-white text-3xl md:text-5xl font-serif mb-2 group-hover:text-elleo-light transition-colors">
                  <Counter value="10" />
                </b>
                <span className="text-elleo-light font-sans text-[11px] md:text-[14px] font-bold tracking-[0.2em]">QLD</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />

              <div className="flex flex-col items-center group">
                <b className="text-white text-3xl md:text-5xl font-serif mb-2 group-hover:text-elleo-light transition-colors">
                  <Counter value="14" />
                </b>
                <span className="text-elleo-light font-sans text-[11px] md:text-[14px] font-bold tracking-[0.2em]">WA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;