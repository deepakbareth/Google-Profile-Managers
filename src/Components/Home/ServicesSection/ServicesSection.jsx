import React from 'react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import bg from '../../../assets/ServiceBg/serviceBg.jpg'; // Update path if needed

const ServicesSection = () => {
  // Array holding your exact text content
  const servicesData = [
    {
      title: "Google Business Profile Management",
      description: (
        <>
          Our <em className="italic text-white">Google Business Profile Management Service</em> gives you a hands off solution for get higher rankings, greater visibility, and more business from your Google Business Profile.
        </>
      ),
      buttonText: "GBP Management",
      buttonLink: "management"
    },
    {
      title: "Google Business Profile Optimization",
      description: (
        <>
          Our <em className="italic text-white">Google Business Profile Optimization Service</em> is ideal if you already have a GBP listing, but you not 100% sure if you’re doing everything to get the best results out of your profile.
        </>
      ),
      buttonText: "GBP Optimization",
      buttonLink: "optimization"
    },
    {
      title: "Google Business Profile Setup",
      description: (
        <>
          Our <em className="italic text-white">Google Business Profile Setup Service</em> is the best way to get started if you don’t already have a GBP listing and you don’t want to go through the pain of setting it up yourself.
        </>
      ),
      buttonText: "GBP Setup",
      buttonLink: "setup"
    },
    {
      title: "Google Business Profile Support",
      description: (
        <>
          Have a pressing issue or problem with your GBP listing and need help getting it resolved? Let the experts at Google Business Profile Managers get you through the darkest parts of the digital jungle! 🌴
        </>
      ),
      buttonText: "GBP Support",
      buttonLink: "support"
    }
  ];

  return (
    <section className="relative py-14 lg:py-12 bg-gray-100 overflow-hidden font-sans">

      {/* Optional: Subtle background glows for depth */}

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Child 1: The Heading */}
        <SectionHeading />

        {/* ==========================================
            HYBRID LAYOUT: Mobile Slider + Desktop Grid
            ========================================== */}
        <div className="relative mt-8">

          {/* Hide Scrollbar styling */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {/* - MOBILE: flex, overflow-x-auto, snap-x (Creates the swipeable slider)
            - TABLET/DESKTOP: md:grid, md:overflow-visible, md:grid-cols-2 xl:grid-cols-4 (Reverts to grid)
          */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none flex-nowrap md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-6 md:pb-0 hide-scrollbar scroll-smooth items-stretch">

            {/* Child 2: Mapping over the data to render Service Cards */}
            {servicesData.map((service, index) => (
              <div
                key={index}
                // MOBILE: w-[85vw] makes it slightly smaller than the screen so the next card peeks in
                // DESKTOP: w-auto fills the grid column
                className="flex-none w-[85vw] sm:w-[320px] md:w-auto snap-center md:snap-align-none"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                  buttonLink={service.buttonLink}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;