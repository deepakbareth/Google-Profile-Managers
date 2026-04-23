import React from 'react';
import mockupImage from '../../../assets/banner.png'; // Ensure you've exported this high-quality asset

const Banner2 = () => {
  return (
    // The background perfectly matches the Navbar's parent container
    <div className="relative min-h-screen bg-[#f8fafc] pt-32 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* Decorative Background Blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4a3b69]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Hero Card Container */}
      <div className="relative w-full max-w-7xl bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-20 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#4a3b69] font-bold text-xs tracking-widest uppercase mb-8 w-max">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Local SEO Experts
          </div>

          {/* Massive, Elegant Headline utilizing Cormorant Garamond */}
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1e293b] leading-[1.05] tracking-tight">
            How Smart Companies Rank in the Local Pack & on Maps.
          </h1>
          
          {/* Paragraph */}
          <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
            We put your <strong className="text-[#1e293b]">Google Business Profile</strong> on the map with our set-up, optimization, and management services that help bring in more calls and leads.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-4 bg-[#4a3b69] text-white rounded-full font-bold tracking-wide shadow-md hover:bg-[#382c50] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View GBP Services
            </a>
            
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-[#4a3b69] rounded-full font-bold tracking-wide border-2 border-gray-200 hover:border-[#4a3b69] hover:bg-slate-50 transition-all duration-300"
            >
              Read Success Stories
            </a>
          </div>
        </div>
        
        {/* Right Image Area */}
        <div className="w-full md:w-[45%] relative flex justify-center items-center mt-8 md:mt-0">
          {/* Image Backdrop to make the mockup pop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[2rem] transform rotate-3 scale-105 border border-gray-50" />
          
          <img 
            src={mockupImage} 
            alt="Google Maps Search Results Mockup on Smartphone"
            className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner2;