import React from 'react';

const ServiceCard = ({ title, description, buttonText }) => {
  return (
    <div className="flex flex-col h-full bg-black/100 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-black/90 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-blue-100/80 leading-relaxed font-medium mb-8 flex-grow">
        {/* We use dangerouslySetInnerHTML here safely just to render the <em> tags from your exact copy, 
            or we can just render the raw string. For simplicity, we'll render it directly as JSX in the parent. */}
        {description}
      </p>
      
      {/* Action Button */}
      <div className="mt-auto pt-4">
        <a 
          href="#" 
          className="flex justify-center items-center w-full py-3.5 px-6 rounded-xl border border-white/20 text-white font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#0f172a] hover:shadow-lg"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;