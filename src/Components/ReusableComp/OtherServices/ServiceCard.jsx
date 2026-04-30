import React from 'react';

const ServiceCard = ({ image, title, price, unit, paragraphs, bottomLinkText, bottomLinkUrl }) => {
  return (
    <div className="flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] group h-full">
      
      {/* Top Image Banner (Uses your local images) */}
      <div className="h-48 sm:h-56 w-full overflow-hidden bg-slate-50 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay to make it look premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-grow p-8 md:p-10">
        
        {/* Header: Title & Pricing perfectly separated */}
        <div className="flex justify-between items-start gap-4 mb-6 pb-6 border-b border-slate-100">
          <h3 className="text-2xl font-extrabold text-[#0d5c87] leading-tight">
            {title}
          </h3>
          
          <div className="text-right flex-shrink-0 flex flex-col items-end">
            <span className="text-xl font-black text-slate-900">{price}</span>
            <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">{unit}</span>
            <a href="#learn-more" className="text-[13px] font-bold text-blue-600 hover:text-blue-800 transition-colors mt-2">
              LEARN MORE
            </a>
          </div>
        </div>

        {/* The Exact Text Paragraphs */}
        <div className="flex-grow space-y-5 text-[15px] text-slate-600 leading-relaxed font-medium mb-8">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Bottom Link (Always pushed to the bottom) */}
        <div className="mt-auto text-center pt-2">
          <a href={bottomLinkUrl} className="text-[14.5px] font-semibold text-[#0ea5e9] hover:text-blue-700 transition-colors">
            {bottomLinkText}
          </a>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;