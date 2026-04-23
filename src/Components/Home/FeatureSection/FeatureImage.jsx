import React from 'react';
import featureImage from '../../../assets/FeatureImg/featureImg.png';
 // Update path if needed

const FeatureImage = () => {
  return (
    <div className="relative group w-full">
      {/* Subtle background glow for premium feel */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-[1rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 bg-white transition-transform duration-500 group-hover:-translate-y-1">
        <img 
          src={featureImage} 
          alt="Google Business Profile Dashboard" 
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default FeatureImage;