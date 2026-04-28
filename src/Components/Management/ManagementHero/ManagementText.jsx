import React from 'react';

const ManagementText = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
      
      {/* Main Headline */}
      <h1 className="text-2xl sm:text-5xl lg:text-[2.2rem] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight">
        We present you the quickest method for increasing your monthly revenue from Google. 
        <span className="text-blue-700 block mt-2">Monthly cost of only $99.</span>
      </h1>

      {/* Accent Quote block */}
      <div className="pl-0 lg:pl-5 border-l-0 lg:border-l-4 border-blue-500 my-1 py-2">
        <p className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed">
          "Do you want to get the most out of Google Business Profile without needing to spend a lot of time learning how to advertise it each month?"
        </p>
      </div>

      {/* Paragraphs */}
      <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
        <p>
          If you don't want to deal with the inconvenience of making sure you're doing everything you can to conquer Google each month, our Google Business Profile Management Service is the right fit.
        </p>
        <p>
          You can get the Master of the wilderness to handle the grunt work for you by using the Google Business Profile Management Service.
        </p>
      </div>

    </div>
  );
};

export default ManagementText;