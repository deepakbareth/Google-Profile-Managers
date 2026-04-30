import React from 'react';

const ServiceText = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
      
      {/* Main Headline */}
      <h1 className="text-2xl sm:text-5xl lg:text-[2.2rem] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight">
        {data.title}
        {/* Adds the blue highlight text on a new line */}
        <span className="text-blue-700 block mt-2">{data.titleHighlight}</span>
      </h1>

      {/* Accent Quote block */}
      <div className="pl-0 lg:pl-5 border-l-0 lg:border-l-4 border-blue-500 my-1 py-2">
        <p className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed">
          "{data.italicSubtitle}"
        </p>
      </div>

      {/* Dynamic Paragraphs */}
      <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
        {data.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  );
};

export default ServiceText;