import React from 'react';

// Updated import paths to match your folder structure
import fm1 from '../../../assets/FeatureImg/fm1.svg';
import fm2 from '../../../assets/FeatureImg/fm2.svg';
import fm3 from '../../../assets/FeatureImg/fm3.svg';
import fm4 from '../../../assets/FeatureImg/fm4.svg';

const LogoMarquee = () => {
  const logos = [
    { src: fm1, alt: "Featured Logo 1" },
    { src: fm2, alt: "Featured Logo 2" },
    { src: fm3, alt: "Featured Logo 3" },
    { src: fm4, alt: "Featured Logo 4" },
  ];

  return (
    <div className="mt-10 pt-8 border-t border-gray-100 overflow-hidden w-full relative">
      
      {/* "FEATURED ON" Tag */}
      <div className="flex flex-col items-center gap-3 mb-6">
        
        <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          Featured On
        </span>
        <div className="h-[2px] w-10 bg-[#0a4a75] rounded-full"></div>
      </div>

      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 20s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Left & Right fade gradients */}
      <div className="absolute left-0 top-14 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-14 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* The Scrolling Container */}
      <div className="animate-infinite-scroll gap-12 items-center">
        {[...logos, ...logos].map((logo, index) => (
          <img 
            key={index}
            src={logo.src} 
            alt={logo.alt} 
            className="h-7 sm:h-8 w-auto object-contain   opacity-100  hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;