import React from 'react';
import { MISSION_STEPS } from '../constants';
import { motion } from 'framer-motion';
import { History, Users } from 'lucide-react';

const AnimatedIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <motion.div
    animate={{
      y: [0, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="hidden md:flex items-center justify-center shrink-0 mt-2"
    style={{ color }}
  >
    <Icon size={32} strokeWidth={1.5} />
  </motion.div>
);

const VisionMission: React.FC = () => {
  const icons = [History, Users];

  return (
    // Updated padding-top to pt-40 (10rem) as requested
    <section className="pt-20 pb-20 md:pt-40 md:pb-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-3 md:px-6">
        {/* Main Background Card */}
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[700px] flex items-center bg-gradient-to-br from-white via-[#f5f3ff] to-[#ede9fe]">

          {/* Animated Purple Blobs - Opacity reverted to subtle levels */}
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

          <div className="relative z-10 w-full py-20 pb-14 md:pb-20 px-6 md:px-16 lg:px-[60px] flex flex-col items-center">

            {/* Top: Heading (Centered) */}
            <div className="w-full mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl md:text-6xl lg:text-[3.5rem] text-elleo-dark leading-[1.1] md:leading-[1.1] lg:leading-[1.1] mb-[1rem] tracking-tighter">
                  Make our customers' <br />
                  <span className="italic text-elleo-light">healthier</span> choice
                </h2>
              </motion.div>
            </div>

            {/* Bottom: Cards (Grid) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {MISSION_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/50 shadow-xl shadow-purple-900/5 group flex flex-col md:flex-row items-start gap-6"
                >
                  <AnimatedIcon icon={icons[index]} color="#a09fe2" />

                  <div className="flex-grow">
                    {/* Title Tag with Rounded Purple Background */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-sans font-bold text-[0.6rem] md:text-xs tracking-widest text-white bg-elleo-light px-5 py-2 rounded-full uppercase">
                        {step.title}
                      </span>
                    </div>

                    {/* Updated font size and weight */}
                    <h5 className="font-serif text-xl md:text-2xl font-semibold text-elleo-dark mb-4 leading-tight">
                      {step.subtitle}
                    </h5>

                    <p className="font-sans text-elleo-dark/80 text-[0.95rem] md:text-[1rem] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;