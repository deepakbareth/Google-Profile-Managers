import React from 'react';

const TrustSignals = () => {
  const listItems = [
    "50+ Profiles Managed",
    "100+ Reviews Generated",
    "Top 3 Map Rankings Achieved",
    "Monthly Reporting",
    "24/7 Support"
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden font-sans border-y border-gray-100">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Text/Heading Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">


            {/* UPDATED HEADING */}
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
              Build Unshakable <span className="text-blue-700">Social Proof</span>
            </h2>

            {/* UPDATED SUBHEADING */}
            <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed font-medium">
              We turn your Google Business Profile into a conversion engine by amplifying the trust signals that local customers actually care about.
            </p>
          </div>

          {/* List Items Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">

              {/* UPDATED LIST HEADING */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-6 border-b border-gray-100 pb-4">
                Our Track Record:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5 w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center border border-emerald-200">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[17px] sm:text-lg text-slate-700 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSignals;