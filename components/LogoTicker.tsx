import React from 'react';
import Marquee from 'react-fast-marquee';

const PARTNERS = [
  "https://www.sushia.com.au/wp-content/uploads/2026/01/westfield.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/brookfield.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/cbus-super.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/amp.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/ispt-super-property.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/lend-lease.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/qantas.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/Sydney-Airport-Logo.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/vicinity-centres2.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/stockland.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/leighton.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/Mirvac-logo.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/charter-hall.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/gpt.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/ma.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/perth-airport.svg",
  "https://www.sushia.com.au/wp-content/uploads/2026/01/region.svg"
];

const LogoTicker: React.FC = () => {
  return (
    <section className="py-24 bg-white text-elleo-dark border-t border-gray-50">
      <div className="container mx-auto px-6 mb-12 text-center">
         {/* Font size updated to text-[2.5rem] */}
         <h2 className="font-serif text-[2.5rem] text-elleo-dark">Our Partnerships</h2>
         <p className="font-sans text-gray-500 mt-2">Collaborating with industry leaders</p>
      </div>
      
      <Marquee gradient={true} gradientColor="white" speed={45} className="py-6 overflow-hidden">
        {PARTNERS.map((logo, i) => {
           // Check if specific logos need to be larger based on user request
           const isLarger = logo.includes('lend-lease') || 
                            logo.includes('stockland') || 
                            logo.includes('cbus-super') || 
                            logo.includes('ispt-super-property');
           
           return (
            <div key={i} className="mx-8 md:mx-12 flex items-center justify-center group h-20 w-32 md:w-48">
               <img 
                 src={logo} 
                 alt={`Partner ${i + 1}`} 
                 className={`${
                   isLarger 
                     ? 'max-h-12 md:max-h-16 max-w-[130px] md:max-w-[200px]' // Larger size for specific logos
                     : 'max-h-8 md:max-h-12 max-w-[100px] md:max-w-[160px]'  // Standard size for others
                 } w-auto h-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out`} 
               />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default LogoTicker;