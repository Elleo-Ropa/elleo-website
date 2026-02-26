import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/admin@elleo.com.au", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setShowModal(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      alert('An error occurred. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-6 py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-[#ede9fe] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-elleo-light/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffc905]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-3 md:px-6 relative z-10">
        <div className="max-w-[52rem] mx-auto bg-white/60 backdrop-blur-xl rounded-[1.5rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-5 py-16 md:p-16 border border-white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-[3rem] text-elleo-dark mb-4 tracking-[-0.02em]">Get in Touch</h2>
            <p className="font-sans text-gray-500 font-medium">We'd love to hear from you. Send us a message.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Contact Form Submission - Elleo Group" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Phone Number"
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400"
                  placeholder="Inquiry Subject"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="font-sans text-xs font-bold text-elleo-dark/100 uppercase tracking-widest pl-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-white/50 border border-gray-200 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-elleo-light/50 focus:border-elleo-light transition-all text-elleo-dark placeholder-gray-400 resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="flex justify-center mt-14">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`group relative inline-flex items-center gap-3 px-8 py-4 ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-elleo-light hover:bg-elleo-dark'} text-white rounded-full font-sans font-bold text-[15px] uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1`}
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-elleo-dark/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-elleo-dark transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
              </div>

              <h3 className="font-serif text-3xl text-elleo-dark mb-4">Thank You!</h3>
              <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-elleo-dark text-white rounded-full font-sans font-bold uppercase tracking-widest hover:bg-elleo-light transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;