import React from 'react';

// 1. We create a reusable mini-banner just for this file to keep code clean
const TrustBanner = ({ text }) => (
  <div className="relative bg-gradient-to-br from-blue-600 to-blue-300 rounded-3xl p-5 shadow-2xl overflow-hidden">
    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-2xl"></div>
    <div className="relative z-10">
      <p className="text-lg md:text-[20px] text-white leading-relaxed font-medium text-center md:text-left w-full">
        {text}
      </p>
    </div>
  </div>
);

const ServiceOverview = ({ data }) => {
  // 2. THE MAGIC LOGIC: Check if we have less than 8 features
  const isShortList = data.features.length < 8;

  return (
    <section id="Overview" className="scroll-mt-10 relative w-full py-10 lg:py-18 bg-slate-50 font-sans overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-100/40 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================
            HEADER & INTRO 
            ========================================== */}
        <div className="max-w-7xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            {data.title}
          </h2>
          
          <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            {data.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* ==========================================
            MIDDLE: FEATURE CARDS & MOCKUP
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-6">
          
          {/* LEFT COLUMN: Features */}
          <div className="lg:col-span-7 flex flex-col  gap-10">
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature, index) => {
                const isLastOdd = index === data.features.length - 1 && data.features.length % 2 !== 0;
                
                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-start gap-4 transition-transform duration-300 hover:shadow-lg hover:border-blue-100 group ${isLastOdd ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-semibold text-[15px] leading-snug pt-1">
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CONDITION 1: If less than 8 boxes, show banner HERE (On the Left side) */}
            {isShortList && <TrustBanner text={data.bottomText} />}

          </div>

          {/* RIGHT COLUMN: Image Presentation */}
          <div className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-32 z-20">
            <img 
              src={data.image} 
              alt={`${data.title} Mockup`} 
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(15,23,42,0.2)]"
            />
          </div>

        </div>

        {/* CONDITION 2: If 8 or more boxes, show banner HERE (Full Width at bottom) */}
        {!isShortList && (
          <div className="mt-12 lg:mt-16 w-full">
            <TrustBanner text={data.bottomText} />
          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceOverview;