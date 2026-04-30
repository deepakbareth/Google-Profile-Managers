import React from 'react';
import ServiceTabs from './ServiceTabs';

const ServiceImage = ({ image }) => {
  return (
    <div className="w-full flex flex-col max-w-2xl mx-auto lg:max-w-none">
      
      {/* Image Container with subtle floating effect */}
      <div className="relative w-full flex items-center justify-center group">
        <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>
        <img
          src={image} // <-- Uses the dynamic image passed from data
          alt="Service Mockup"
          className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
        />
      </div>

      {/* Tabs Component sits directly below image */}
      <ServiceTabs />
      
    </div>
  );
};

export default ServiceImage;