import React, { useState, useEffect } from 'react';
import { LOGO_DARK, LOGO_LIGHT } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Culture', 'Brands', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md py-2 md:py-4 shadow-lg' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto  pl-6 pr-3 md:px-6 flex justify-between items-center">
          {/* Logo Container - Resizes on scroll */}
          <div className={`relative z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'w-[120px] md:w-[150px]' : 'w-[140px] md:w-[170px]'}`}>
            <a href="#">
              <img
                src={isMenuOpen ? "https://www.sushia.com.au/wp-content/uploads/2026/01/Elleo-Group-Logo-W.svg" : LOGO_LIGHT}
                alt="Elleo Group"
                className="w-full h-auto transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 font-sans font-medium text-[15px] text-elleo-dark`}>
            {menuItems.map((item) => (
              item === 'Contact' ? (
                <button
                  key={item}
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="hover:text-elleo-light transition-colors cursor-pointer bg-transparent border-none p-0 font-medium font-sans text-[15px]"
                >
                  {item}
                </button>
              ) : (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-elleo-light transition-colors">
                  {item}
                </a>
              )
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold bg-elleo-light text-white hover:bg-elleo-dark`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 ${isMenuOpen ? 'text-white' : 'text-elleo-dark'} transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-elleo-dark z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-10 text-center text-white font-sans text-[1.5rem]">
              {menuItems.map((item) => (
                item === 'Contact' ? (
                  <button
                    key={item}
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="hover:text-elleo-light transition-colors bg-transparent border-none p-0 font-sans font-[500] text-[1.5rem] text-white cursor-pointer"
                  >
                    {item}
                  </button>
                ) : (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-elleo-light transition-colors font-[500]"
                  >
                    {item}
                  </a>
                )
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-elleo-light text-white px-8 py-3 rounded-full font-sans font-bold text-xl hover:bg-white hover:text-elleo-dark transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;