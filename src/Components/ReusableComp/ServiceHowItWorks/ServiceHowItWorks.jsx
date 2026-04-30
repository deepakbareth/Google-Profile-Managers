import StepCard from '../../Management/HowItWorksSection/StepCard.jsx';

import React from 'react';


const ServiceHowItWorks = ({ data }) => {
  return (
    <section id="how-it-works" className="scroll-mt-10 relative py-14 lg:py-22 bg-[#f8fafc] font-sans overflow-hidden">
      
      {/* Subtle Background Pattern Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-cyan-50/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================
            HEADER
            ========================================== */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
             {data.title}
          </h2>
          <p className="text-lg md:text-[20px] text-slate-600 font-bold">
            {data.subtitle}
          </p>
        </div>

        {/* ==========================================
            TIMELINE STEPS
            ========================================== */}
        <div className="flex flex-col">
          {data.steps.map((step, index) => (
            <StepCard 
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === data.steps.length - 1} // Tells the card to hide the connecting line on the final step
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceHowItWorks;