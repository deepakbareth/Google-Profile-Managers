import React from 'react';
import StepCard from './StepCard.jsx';

const HowItWorksSection = () => {
  // Exact text from your original screenshot
  const stepsData = [
    {
      title: "1. You Provide Us With Your Locationn",
      description: "Everything begins with getting to know you better! We will obtain all of the facts about your business location that the Managers requires to properly manage your GMB listing using our simple Google Business Profile Management Service form. This should take you approximately ten minutes to finish."
    },
    {
      title: "2. We Audit Your Profile (or Begin Verification)",
      description: "Benchmarking your present performance is the next stage in our Google Business Profile Management Service. The Managers personally audits your GMB listing in 100 steps based on all of the best practises we've acquired over the last 5 years. You will receive a full checklist outlining the status of your listing. If you don't already have a Google Business Profile listing, we'll claim and verify one for you at this stage!"
    },
    {
      title: "3. We Develop an Action Plan Based on Your Profile",
      description: "Following the completion of an audit, your account manager will develop a customised action plan to optimise your GMB listing. This will direct the Managers as he battles his way through the digital jungle, allowing your profile to succeed."
    },
    {
      title: "4. We optimise and improve your Google Business Profile listing.",
      description: "It's now time for the GMB Managers team to get down to business. Your account manager and their team will take over to guarantee that any essential adjustments to optimise your listing are made. Throughout this procedure, your account manager will keep you informed at every step of the journey."
    },
    {
      title: "5. Every month, we manage and promote your profile.",
      description: "Now that your Google Business Profile Profile has been optimised, it's time to start marketing! Your account manager will handle posts, Q&A, reviews, spam reports, profile monitoring, and reporting once a month. This ensures that your listing continues to get visibility, traffic, calls, and new customers!"
    },
    {
      title: "You see improved rankings, increased traffic, phone calls, and revenue!",
      description: "Because your Google Business Profile listing is being correctly handled, you should begin to see more results within 30 to 90 days of the work being completed. While the Managers is working on your GMB profile, you will have time to prepare for the new opportunities and clients that will be coming your way.."
    }
  ];

  return (
    <section id="how-it-works"  className="scroll-mt-10 relative py-14 lg:py-22 bg-[#f8fafc] font-sans overflow-hidden">
      
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
             How Our Google Business Profile Management Service Works
          </h2>
          <p className="text-lg md:text-[20px] text-slate-600 font-bold">
            The Google Profile Managers Google Business Profile Management Service involves 6 steps:
          </p>
        </div>

        {/* ==========================================
            TIMELINE STEPS
            ========================================== */}
        <div className="flex flex-col">
          {stepsData.map((step, index) => (
            <StepCard 
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === stepsData.length - 1} // Tells the card to hide the connecting line on the final step
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;