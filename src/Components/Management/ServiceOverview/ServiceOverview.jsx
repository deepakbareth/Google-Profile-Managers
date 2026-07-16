import React from 'react';
// IMPORT YOUR IMAGE HERE
import mockupImg from '../../../assets/ManagementPage/overview.png';

const ServiceOverview = () => {
  // EXACT text from your screenshot
  const features = [
    "Upload photos and videos",
    "Implement movements, additions, and changes",
    "Q&As should be curated.",
    "Respond to feedback",
    "Keep an eye on your profile.",
    "Report spam",
    "Keep track of rival performance",
    "Keep track of your chosen keywords",
    "Make a monthly report and anything else that comes up along the route!"
  ];

  return (
    <section id="Overview" className="scroll-mt-10 relative w-full py-10 lg:py-18 bg-slate-50 font-sans overflow-hidden">

      {/* Background Decorative Blobs for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-100/40 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            HEADER & INTRO (Centered & Readable)
            ========================================== */}
        <div className="max-w-7xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            Google Business Profile Management Service Overview
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            <p>
              The Google Business Profile Management Service enables you to collaborate with a who can manage all of the minor issues (and occasionally major headaches) that come with keeping a prominent GMB listing.
            </p>
            <p>
              This service will initially optimise your listing for your selected search terms and local. Every month after that, the Managers and your account manager will endeavour to:
            </p>
          </div>
        </div>

        {/* ==========================================
            MIDDLE: FEATURE CARDS & MOCKUP
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-6 lg:mb-18">

          {/* LEFT: Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              // Make the last odd item span 2 columns on mobile so it looks balanced
              const isLastOdd = index === features.length - 1 && features.length % 2 !== 0;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-start gap-4 transition-transform duration-300  shadow-lg hover:border-blue-100 group ${isLastOdd ? 'sm:col-span-2' : ''}`}
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

          {/* RIGHT: Image Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              src={mockupImg}
              alt="Google My Business Profile Management"
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(15,23,42,0.2)]"
            />

          </div>

        </div>

        {/* ==========================================
            BOTTOM: TRUST BANNER CALLOUT
            ========================================== */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-300 rounded-3xl p-5 md:p-5 shadow-2xl overflow-hidden">
          {/* Subtle background pattern for the banner */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">


            <p className="text-lg md:text-[22px] text-white leading-relaxed font-medium text-center md:text-left">
              Don't worry if you have multiple locations; you'll notice much more value. We deal with numerous multi-location businesses to alleviate the stress that comes with managing Google Business Profile.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;