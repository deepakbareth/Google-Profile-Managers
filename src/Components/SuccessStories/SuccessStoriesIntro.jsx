import React from 'react';

const SuccessStoriesIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="relative py-4 bg-slate-50 md:px-8  overflow-hidden">

            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#36b5cc] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl relative z-10">

                {/* Main Floating Card */}
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden group">

                    {/* ========================================== */}
                    {/* LEFT: Image Stage                          */}
                    {/* ========================================== */}
                    <div className="w-full lg:w-5/12 relative bg-gradient-to-br from-slate-50 to-[#f0f9ff] flex items-center justify-center p-12 lg:p-16 overflow-hidden">

                        {/* Animated Glow Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-300 rounded-full blur-[60px] opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"></div>

                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1a6b8f 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

                        <img
                            src={data.image}
                            alt="Master of Local Search"
                            className="relative z-10 w-full max-w-[350px] drop-shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-3"
                        />
                    </div>

                    {/* ========================================== */}
                    {/* RIGHT: Content Area                        */}
                    {/* ========================================== */}
                    <div className="w-full lg:w-7/12 p-10 sm:p-14 lg:p-20 flex flex-col justify-center">

                        {/* Modern Eyebrow Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-600">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                            <span className="text-cyan-700 text-sm font-bold tracking-widest uppercase">
                                Success Stories
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                            {data.heading}
                        </h2>

                        {/* Frosted Glass Highlight Box for Subheading */}
                        <div className="bg-gradient-to-r from-cyan-50 to-transparent p-6 sm:p-8 rounded-2xl border-l-4 border-cyan-500 mb-8">
                            <p className="text-[12px] sm:text-[20px] text-slate-800 font-semibold italic leading-relaxed">
                                "{data.subHeading}"
                            </p>
                        </div>

                        {/* Paragraph */}
                        <p className="text-slate-500 text-lg sm:text-[19px] leading-relaxed font-medium">
                            {data.paragraph}
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SuccessStoriesIntro;