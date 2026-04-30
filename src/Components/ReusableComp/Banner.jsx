import React from 'react';

// 1. Add ({ data }) here to accept the props passed from the Optimization page
const Banner = ({ data }) => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute right-0 bottom-10 opacity-[0.15] pointer-events-none transform translate-x-1/4">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" className="text-blue-600"></rect>
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#dot-pattern)"></rect>
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <span className="inline-block py-1 px-4 rounded-full bg-white border border-blue-100 text-blue-700 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 shadow-sm">
          Expert Solutions
        </span>

        {/* 2. Replace hardcoded title with data variables */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          {data.titlePrefix} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
            {data.titleHighlight}
          </span>
        </h1>

        {/* 3. Replace hardcoded paragraph with data variable */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
          {data.subtitle}
        </p>

      </div>

      {/* Slanted Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-[40px] md:h-[80px] lg:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white"></path>
        </svg>
      </div>

    </div>
  );
};

export default Banner;