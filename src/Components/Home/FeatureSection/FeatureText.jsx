import React from 'react';

const FeatureText = () => {
  return (
    <div className="flex flex-col justify-center h-full space-y-8 pl-0 lg:pl-8">

      <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] text-center md:text-left font-bold text-[#0f172a] leading-[1.1] tracking-tight">
        Get more customers from your Google Business Profile <span className="text-[#0a4a75] italic">without the work</span>
      </h2>

      <div className="space-y-6 text-[17px] sm:text-lg text-slate-600 text-center md:text-left leading-relaxed font-medium">
        <p>
          Today almost half of all Google searches show local search results. This means getting to the top of the page requires a winning <em className="text-[#0f172a] font-bold not-italic">Google Business Profile.</em>
        </p>

        <p>
          Google Business Profile Managers offers one time optimizations to get you started and ongoing management services required to get you new customers every week. Let us take away the hassle and headache out of dominating the local pack and Google Maps!
        </p>
      </div>

      <div className="pt-4 flex justify-center items-center lg:justify-start">
        <a
          href="services"
          className=" px-10 py-4 bg-blue-700 text-white rounded-xl font-bold text-[16px] text-center  tracking-wide shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          See How We Help
        </a>
      </div>

    </div>
  );
};

export default FeatureText;