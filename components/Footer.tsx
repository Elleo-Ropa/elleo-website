import React from 'react';
import { LOGO_DARK, SYMBOL } from '../constants';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    // Background updated to match the end of Contact section's gradient for seamless look
    // Removed duplicate id="contact"
    <footer id="contact" className="bg-[#ede9fe] pt-10">
      {/* 
        This outer container matches the header's content width constraint.
        The dark box's edges align with the Logo (left) and 'Get in Touch' button (right).
      */}
      <div className="container mx-auto px-3 md:px-6">
        {/* Padding updated from lg:px-16 to lg:px-20 (5rem) as requested */}
        <div className="w-full bg-elleo-dark text-white rounded-t-[1.5rem] md:rounded-t-[3rem] pt-20 pb-[1.5rem] overflow-hidden shadow-2xl relative px-6 md:px-12 lg:px-20">
          <div className="relative z-10">

            {/* Main Footer Content: Logo - Info Columns - Symbol */}
            {/* Updated gap from lg:gap-20 to lg:gap-[10rem] as requested */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-[7rem] mb-[5rem] text-center lg:text-left">

              {/* Left: Logo */}
              <div className="flex-shrink-0 pt-0 mx-auto lg:mx-0">
                <img src={LOGO_DARK} alt="Elleo Group" className="w-40 md:w-[180px] opacity-90 block" />
              </div>

              {/* Middle: 3-Column Info Section */}
              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 font-sans w-full">

                {/* Column 1: HEAD OFFICE */}
                <div className="space-y-5">
                  <h4 className="text-elleo-light text-xs font-bold uppercase tracking-[0.2em]">Head Office</h4>
                  <div className="space-y-2 text-base md:text-[1rem] text-white/90 leading-relaxed font-light">
                    <p>Level 2, 570 Blaxland Road</p>
                    <p>Eastwood NSW 2122</p>
                  </div>
                </div>

                {/* Column 2: POSTAL ADDRESS */}
                <div className="space-y-5">
                  <h4 className="text-elleo-light text-xs font-bold uppercase tracking-[0.2em]">Postal Address</h4>
                  <div className="space-y-2 text-base md:text-[1rem] text-white/90 leading-relaxed font-light">
                    <p>PO Box 409</p>
                    <p>West Ryde NSW 1685</p>
                  </div>
                </div>

                {/* Column 3: CONTACT */}
                <div className="space-y-5">
                  <h4 className="text-elleo-light text-xs font-bold uppercase tracking-[0.2em]">Contact</h4>
                  <div className="space-y-1 text-base md:text-lg text-white/90 font-light">
                    <div className="flex items-center justify-center lg:justify-start gap-2 group">
                      <div className="p-1.5 rounded-full group-hover:bg-elleo-light group-hover:border-elleo-light transition-all duration-300">
                        <Phone size={18} className="text-elleo-light group-hover:text-white" />
                      </div>
                      <a href="tel:0298581749" className="md:text-[1rem] hover:text-elleo-light transition-colors">02 9858 1749</a>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 group">
                      <div className="p-1.5 rounded-full group-hover:bg-elleo-light group-hover:border-elleo-light transition-all duration-300">
                        <Mail size={18} className="text-elleo-light group-hover:text-white" />
                      </div>
                      <a href="mailto:info@elleo.com.au" className="md:text-[1rem] hover:text-elleo-light transition-colors">info@elleo.com.au</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Small Symbol (Kept for balance, big watermark removed) */}
              <div className="hidden xl:block flex-shrink-0 pt-2">
                <img src={SYMBOL} alt="" className="w-20 h-20 opacity-10" />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-[2rem] flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm font-sans opacity-50 tracking-wider">
              <p>© {new Date().getFullYear()} Elleo Group Holdings. <br className="md:hidden" /> All rights reserved.</p>
              <div className="flex gap-10 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors uppercase">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;