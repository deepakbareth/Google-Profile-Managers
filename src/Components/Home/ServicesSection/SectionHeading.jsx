import React from 'react';

const SectionHeading = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16 px-4">
      <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
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