import React from 'react';
import mockupImage from '../../../assets/banner.png'; // Ensure you've exported this high-quality asset

const BannerImage = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <div className="relative w-full max-w-xl group">
        {/* Subtle visual glow behind the phone */}
        <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl transform scale-90 group-hover:scale-100 transition-transform duration-500" />
        
        {/* The high-quality mockup from your new design */}
        <img 
          src={mockupImage} 
          alt="Google Maps Search Results Mockup on Smartphone"
          className="relative z-10 w-full h-auto object-contain transition-transform duration-300  "
        />
      </div>
    </div>
  );
};

export default BannerImage;