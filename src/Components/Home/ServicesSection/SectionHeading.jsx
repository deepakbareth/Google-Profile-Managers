import React from 'react';

const SectionHeading = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16 px-4">
      <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight tracking-tight mb-6">
        So many calls you’ll be pounding your chest 
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg md:text-xl text-gray-800 font-medium">
        <span className="flex items-center gap-2">
          Eliminate frustration 
        </span>
        <span className="flex items-center gap-2">
          Spend less time 
        </span>
        <span className="flex items-center gap-2">
          Get more results 
        </span>
      </div>
    </div>
  );
};

export default SectionHeading;