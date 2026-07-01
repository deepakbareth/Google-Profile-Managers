import React from 'react';

const BannerText = () => {
  return (
    // Added text-center for mobile, md:text-left for tablet/desktop
    <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left md:pt-32">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-950 leading-tight tracking-tight">
        {/* How Smart Companies Rank in the Local Pack and on Google Maps */}
        Professional Google Business Profile Managers			        <span className="inline-block ml-3 px-3 py-1 bg-white rounded-lg shadow-sm border border-gray-100">
          <svg className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        </span>
      </h1>

      {/* Exactly the same text as provided */}
      <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl font-normal font-sans mx-auto md:mx-0">
        {/* We put your <strong className="font-semibold text-gray-900">Google Business Profile</strong> on the map with our set-up, optimization, management services that help bring in more calls and leads. */}
        We optimize, manage, post, and grow your <strong className="font-semibold text-gray-900">Google Business</strong> so local customers find you first.

      </p>

      {/* Added justify-center for mobile, md:justify-start for tablet/desktop */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 font-sans font-medium text-lg">
        {/* Premium Filled Button */}
        <a
          href="services"
          className="inline-flex items-center px-8 py-3.5 bg-blue-700 text-white rounded-xl shadow-md border border-blue-800 transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5"
        >
          View GBP Services
        </a>

        {/* Elegant Ghost Button */}
        <a
          href="success-stories"
          className="inline-flex items-center px-8 py-3.5 bg-white text-blue-700 rounded-xl border-2 border-blue-200 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm"
        >
          Read Success Stories
        </a>
      </div>
    </div>
  );
};

export default BannerText;