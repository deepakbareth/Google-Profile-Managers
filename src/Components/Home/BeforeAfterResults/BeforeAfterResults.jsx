// import React from 'react';
// import { ArrowRight, TrendingUp, Store, Stethoscope, Utensils, BarChart3 } from 'lucide-react';

// const BeforeAfterResults = () => {
//   const results = [
//     {
//       type: 'Local Salon',
//       icon: <Store size={18} />,
//       metricName: 'Map Pack Ranking',
//       before: '#18',
//       after: '#3',
//       growth: 'Top 3 Placement'
//     },
//     {
//       type: 'Dental Clinic',
//       icon: <Stethoscope size={18} />,
//       metricName: 'Inbound Calls / Mo',
//       before: '12',
//       after: '68',
//       growth: '+466% Increase'
//     },
//     {
//       type: 'Restaurant',
//       icon: <Utensils size={18} />,
//       metricName: 'Customer Reviews',
//       before: '4',
//       after: '79',
//       growth: '+1875% Increase'
//     }
//   ];

//   return (
//     <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden font-sans">

//       {/* Subtle Background Pattern for Authenticity */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
//       </div>

//       <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

//         {/* ========================================== */}
//         {/* Section Heading                            */}
//         {/* ========================================== */}
//         <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
//           <div className="inline-flex items-center justify-center space-x-2 mb-5">
//             <span className="px-4 py-1.5 bg-blue-100/80 text-blue-700 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
//               <BarChart3 size={16} />
//               REAL CLIENT RESULTS
//             </span>
//           </div>

//           <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
//             Proven Before & After <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Growth</span>
//           </h2>

//           <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed font-medium">
//             See the transformative power of a fully optimized Google Business Profile. These aren't just vanity metrics; they are real drivers of local revenue.
//           </p>
//         </div>

//         {/* ========================================== */}
//         {/* Results Grid                               */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
//           {results.map((result, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative group flex flex-col"
//             >

//               {/* Header: Industry & Badge */}
//               <div className="flex justify-between items-start mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
//                     {result.icon}
//                   </div>
//                   <h3 className="text-[17px] font-bold text-slate-900">{result.type}</h3>
//                 </div>

//                 {/* Growth Pill */}
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide border border-emerald-100/50">
//                   <TrendingUp size={12} />
//                   {result.growth}
//                 </span>
//               </div>

//               {/* Metric Title */}
//               <div className="mb-6">
//                 <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Measured Metric</p>
//                 <p className="text-xl font-bold text-slate-800">{result.metricName}</p>
//               </div>

//               {/* Before & After Side-by-Side Comparison */}
//               <div className="mt-auto bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between">

//                 {/* Before */}
//                 <div className="flex flex-col">
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Before</span>
//                   <span className="text-2xl font-bold text-slate-400 line-through decoration-slate-300 decoration-2">
//                     {result.before}
//                   </span>
//                 </div>

//                 {/* Arrow */}
//                 <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-500 z-10 group-hover:scale-110 transition-transform duration-300">
//                   <ArrowRight size={18} strokeWidth={2.5} />
//                 </div>

//                 {/* After */}
//                 <div className="flex flex-col text-right">
//                   <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">After</span>
//                   <span className="text-3xl font-extrabold text-emerald-600">
//                     {result.after}
//                   </span>
//                 </div>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BeforeAfterResults;

import React from 'react';
import { ArrowRight, TrendingUp, Store, Stethoscope, Utensils } from 'lucide-react';

const BeforeAfterResults = () => {
  const results = [
    {
      type: 'Local Salon',
      icon: <Store size={22} />,
      before: 'Rank #18',
      after: 'Rank #3'
    },
    {
      type: 'Dental Clinic',
      icon: <Stethoscope size={22} />,
      before: '12 Calls/mo',
      after: '68 Calls/mo'
    },
    {
      type: 'Restaurant',
      icon: <Utensils size={22} />,
      before: '4 Reviews',
      after: '79 Reviews'
    }
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            Proven Before & After <span className="text-blue-700">Results</span>
          </h2>
          <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed font-medium">
            See the transformative power of a fully optimized Google Business Profile. These metrics show how we drive real growth and conversions.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 relative overflow-hidden group">

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-100 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-blue-700">
                  {result.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{result.type}</h3>
              </div>

              <div className="space-y-3">
                {/* Before Box */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 flex justify-between items-center shadow-sm">
                  <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">Before</span>
                  <span className="text-lg font-medium text-slate-500 line-through decoration-gray-300">{result.before}</span>
                </div>

                {/* Arrow indicator */}
                <div className="flex justify-center -my-5 relative z-10">
                  <div className="bg-blue-600 text-white rounded-full p-2 border-[6px] border-gray-50 shadow-sm">
                    <ArrowRight size={18} className="rotate-90 md:rotate-0" />
                  </div>
                </div>

                {/* After Box */}
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex justify-between items-center shadow-sm ring-1 ring-emerald-500/10">
                  <span className="text-[13px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                    <TrendingUp size={14} /> After
                  </span>
                  <span className="text-xl font-bold text-emerald-700">{result.after}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterResults;