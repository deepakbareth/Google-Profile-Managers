import React from 'react';

const StepCard = ({ title, description, stepNumber, isLast }) => {
  return (
    <div className="relative flex items-start group">

      {/* ==========================================
          TIMELINE GRAPHIC (Left Side)
          ========================================== */}
      <div className="flex flex-col items-center mr-5 sm:mr-8 md:mr-10 relative z-10 mt-2">
        
        {/* The Numbered Circle */}
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white font-black text-xl md:text-2xl border-[4px] md:border-[6px] border-[#f8fafc] shadow-lg transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
          {stepNumber}
        </div>

        {/* The Connecting Line (Hidden on the very last step) */}
        {!isLast && (
          <div className="w-1 md:w-1 bg-gradient-to-b from-blue-200 to-transparent absolute top-16 bottom-[-4rem] -z-10 group-hover:from-blue-400 transition-colors duration-500"></div>
        )}
      </div>

      {/* ==========================================
          TEXT CONTENT CARD (Right Side)
          ========================================== */}
      <div className="flex-1 pb-10 md:pb-16">
        <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1 relative overflow-hidden">

          {/* Hidden decorative background glow on hover */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Step Title */}
          <h3 className="relative z-10 text-xl md:text-[22px] font-bold text-slate-800 mb-4 leading-snug">
            {title}
          </h3>
          
          {/* Step Description */}
          <p className="relative z-10 text-base md:text-[17px] text-slate-600 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default StepCard;