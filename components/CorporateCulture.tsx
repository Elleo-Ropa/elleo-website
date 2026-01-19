import React from 'react';
import { Medal, Trophy, TrendingUp, Plane, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const CULTURE_ITEMS = [
  {
    title: "5 & 10 Year\nService Awards",
    icon: Medal,
  },
  {
    title: "Monthly Employee\n& Store Awards",
    icon: Trophy,
  },
  {
    title: "Annual Overseas\nWorkshop",
    icon: Plane,
  },
  {
    title: "Individual & Store\nIncentives",
    icon: TrendingUp,
  },
  {
    title: "Monthly Company\nNewsletter",
    icon: Newspaper,
  },
];

const CorporateCulture: React.FC = () => {
  return (
    <section id="culture" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decor - Subtle Circle */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-3 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-[3rem] text-elleo-dark mb-4 tracking-[-0.02em]">Elleo Culture</h2>
          <p className="font-sans text-gray-500 font-medium max-w-[70rem] mx-auto">
            We value our people. Our culture is built on recognition, growth, and shared success.
          </p>
        </motion.div>

        {/* Grid Layout: Changed to grid-cols-5 on large screens to fit in one line */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CULTURE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full group"
              >
                {/* Updated background to gradient: from subtle purple at bottom to white at top */}
                {/* Border removed as requested */}
                <div className="h-full bg-gradient-to-t from-[#f5f3ff] to-white rounded-3xl p-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center justify-center text-center">

                  {/* Icon Circle - Increased size from w-14/h-14 to w-20/h-20 */}
                  <div className="w-20 h-20 rounded-2xl bg-elleo-light/10 flex items-center justify-center mb-6 group-hover:bg-elleo-light group-hover:scale-110 transition-all duration-300 shrink-0">
                    {/* Icon size increased from 28 to 40 */}
                    <Icon size={40} className="text-elleo-light group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Text Content - whitespace-pre-line enables \n line breaks */}
                  {/* Font changed to Montserrat (font-sans) and weight to 600 (font-semibold) */}
                  <h3 className="font-sans font-semibold text-[0.9rem] md:text-[0.9rem] text-elleo-dark group-hover:text-elleo-light transition-colors duration-300 leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorporateCulture;