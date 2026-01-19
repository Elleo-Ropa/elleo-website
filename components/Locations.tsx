import React from 'react';
import { LOCATIONS } from '../constants';
import { motion } from 'framer-motion';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-elleo-dark mb-4">Prime Locations</h2>
          <p className="text-xl text-gray-500 font-sans max-w-2xl">
            From iconic skyscrapers to bustling shopping centers, our venues are situated in Australia's most prestigious districts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
                <div className="absolute inset-0 bg-elleo-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-elleo-dark font-bold font-sans text-sm">
                  {loc.state}
                </div>
              </div>
              <h3 className="font-serif text-3xl text-elleo-dark group-hover:text-elleo-light transition-colors">
                {loc.name}
              </h3>
              <p className="font-sans text-gray-500 mt-2">{loc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;