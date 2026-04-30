import React from 'react';

const FaqCard = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] flex flex-col h-full group">
      
      {/* Question Header with Icon */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 group-hover:bg-blue-600 transition-colors duration-300">
          <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors duration-300">?</span>
        </div>
        <h3 className="text-[19px] md:text-[21px] font-bold text-[#0d5c87] leading-snug">
          {question}
        </h3>
      </div>

      {/* Answer Text */}
      <div className="pl-12 text-[16px] text-slate-600 leading-relaxed font-medium flex-grow">
        {answer}
      </div>

    </div>
  );
};

export default FaqCard;