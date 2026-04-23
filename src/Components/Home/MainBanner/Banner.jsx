import React from 'react';
import BannerText from './BannerText';
import BannerImage from './BannerImage';

const Banner = () => {
  return (
    <div className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-slate-50 overflow-hidden font-cormorant">
      {/* Subtle Background Pattern / Overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          <BannerText />
          <BannerImage />
          
        </div>
      </div>
    </div>
  );
};

export default Banner;