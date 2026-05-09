import React from 'react';

const CaseStudyMetrics = ({ data, reverse = false }) => {
    if (!data) return null;

    // Helper function to extract the number and text separately for a premium look
    // It turns "69,281 more photo views" into Number: "69,281" and Text: "more photo views"
    const parseStat = (statString) => {
        const match = statString.match(/^([\d,]+)\s*(.*)/);
        if (match) {
            return { value: match[1], label: match[2] };
        }
        return { value: "", label: statString };
    };

    return (
        <section className="py-10 pb-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">

                {/* Main Section Title */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8 text-center">
                    {data.title}
                </h2>

                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center relative`}>

                    {/* ========================================== */}
                    {/* IMAGE AREA (Underneath on Desktop)         */}
                    {/* ========================================== */}
                    <div className="w-full lg:w-7/12 relative z-0">
                        {/* Decorative background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-blue-100/50 rounded-full blur-[60px] pointer-events-none"></div>

                        <div className="bg-white p-2 sm:p-4 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* ========================================== */}
                    {/* STATS OVERLAP CARD (Floating above Image)  */}
                    {/* ========================================== */}
                    {/* The negative margin (lg:-ml-12 or lg:-mr-12) pulls it over the image */}
                    <div className={`w-full lg:w-6/12 mt-10 lg:mt-0 relative z-10 
            ${reverse ? 'lg:-mr-12' : 'lg:-ml-12'}`}
                    >
                        <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white">

                            <p className="text-lg sm:text-[20px] text-slate-700 font-medium leading-relaxed mb-8">
                                {data.introText}
                            </p>

                            {/* Grid of Metric Widgets */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {data.stats.map((stat, index) => {
                                    const { value, label } = parseStat(stat);

                                    return (
                                        <div
                                            key={index}
                                            className="group bg-slate-50 hover:bg-cyan-50 transition-colors duration-300 p-3 rounded-xl border border-slate-100 hover:border-cyan-200"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                {/* Little Arrow Trending Icon */}
                                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                                </svg>
                                                <span className="text-[15px] sm:text-3xl font-black text-slate-900 group-hover:text-[#1a6b8f] transition-colors duration-300">
                                                    {value}
                                                </span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide leading-tight">
                                                {label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CaseStudyMetrics;