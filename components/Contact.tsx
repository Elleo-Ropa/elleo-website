import React from 'react';
// ArrowRight import removed as it is no longer used
import { } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    // Updated background to gradient starting from white to the theme purple, creating a seamless flow to the footer
    <section id="contact" className="scroll-mt-6 py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-[#ede9fe] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-elleo-light/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffc905]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Glassmorphism Card: Updated for a more premium, stylish look */}
        <div className="max-w-[52rem] mx-auto bg-white/60 backdrop-blur-xl rounded-[1.5rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 border border-white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-[3rem] text-elleo-dark mb-4 tracking-[-0.02em]">Get in Touch</h2>
            <p className="font-sans text-gray-500 font-medium">We'd love to hear from you. Send us a message.</p>
          </div>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Name</label>
                {/* Rounded-2xl changed to rounded-lg */}
                <input
                  type="text"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Phone Number"
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Inquiry Subject"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Message</label>
              <textarea
                rows={5}
                className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400 resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Button container with increased margin-top (mt-16 = 64px) to ensure visibility */}
            <div className="flex justify-center mt-14">
              {/* Button padding adjusted to px-8 py-4 (approx 2rem x 1rem) as requested */}
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-elleo-light text-white rounded-full font-sans font-bold text-[15px] uppercase tracking-widest hover:bg-elleo-dark hover:shadow-lg hover:shadow-elleo-light/30 transition-all duration-300 transform hover:-translate-y-1">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;