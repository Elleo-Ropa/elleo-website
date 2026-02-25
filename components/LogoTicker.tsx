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

const half = Math.ceil(PARTNERS.length / 2);
const firstRow = PARTNERS.slice(0, half);
// To make sure they don't look completely identical if lengths are uneven, 
// we can just use the second half for the second row.
const secondRow = PARTNERS.slice(half);

const LogoRender: React.FC<{ logo: string; i: number }> = ({ logo, i }) => {
  const isLarger = logo.includes('lend-lease') ||
    logo.includes('stockland') ||
    logo.includes('cbus-super') ||
    logo.includes('ispt-super-property');

  return (
    <div key={i} className="mx-8 md:mx-12 flex items-center justify-center group h-24 w-32 md:w-48 shrink-0">
      <img
        src={logo}
        alt={`Partner ${i + 1}`}
        className={`${isLarger
          ? 'max-h-12 md:max-h-16 max-w-[130px] md:max-w-[200px]'
          : 'max-h-8 md:max-h-12 max-w-[100px] md:max-w-[160px]'
          } w-auto h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out`}
      />
    </div>
  );
};

const LogoTicker: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white text-elleo-dark border-t border-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-[2.5rem] text-elleo-dark">Our Partnerships</h2>
        <p className="font-sans text-gray-500 mt-2">Collaborating with industry leaders</p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <Marquee gradient={true} gradientColor="white" speed={30} direction="left" className="py-2">
          {firstRow.map((logo, i) => (
            <LogoRender key={`row1-${i}`} logo={logo} i={i} />
          ))}
        </Marquee>

        <Marquee gradient={true} gradientColor="white" speed={30} direction="right" className="py-2">
          {secondRow.map((logo, i) => (
            <LogoRender key={`row2-${i}`} logo={logo} i={i} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoTicker;