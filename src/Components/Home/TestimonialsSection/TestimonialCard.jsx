import React from 'react';

const TestimonialCard = ({ quote, name, title, image }) => {
  return (
    <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 group flex flex-col h-full">
      
      {/* Massive Decorative Quote Icon */}
      <div className="absolute top-6 right-8 text-[6rem] leading-none text-blue-100/50 font-serif rotate-180 group-hover:text-blue-100 transition-colors duration-300 pointer-events-none">
        "
      </div>

      {/* Profile Image & Quote */}
      <div className="flex flex-col sm:flex-row gap-6 relative z-10 flex-grow">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-md">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-col justify-between flex-grow pt-2">
          <p className="text-slate-600 italic text-[16px] sm:text-[17px] leading-relaxed mb-6 font-medium">
            "{quote}"
          </p>
          
          <div className="mt-auto">
            <p className="text-[#0f172a] font-bold text-lg">
              – {name}
            </p>
            <p className="text-blue-700 font-semibold text-sm">
              {title}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;