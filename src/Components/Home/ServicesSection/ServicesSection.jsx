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
      buttonText: "GBP Management"
    },
    {
      title: "Google Business Profile Optimization",
      description: (
        <>
          Our <em className="italic text-white">Google Business Profile Optimization Service</em> is ideal if you already have a GBP listing, but you not 100% sure if you’re doing everything to get the best results out of your profile.
        </>
      ),
      buttonText: "GBP Optimization"
    },
    {
      title: "Google Business Profile Setup",
      description: (
        <>
          Our <em className="italic text-white">Google Business Profile Setup Service</em> is the best way to get started if you don’t already have a GBP listing and you don’t want to go through the pain of setting it up yourself.
        </>
      ),
      buttonText: "GBP Setup"
    },
    {
      title: "Google Business Profile Support",
      description: (
        <>
          Have a pressing issue or problem with your GBP listing and need help getting it resolved? Let the experts at Google Business Profile Managers get you through the darkest parts of the digital jungle! 🌴
        </>
      ),
      buttonText: "GBP Support"
    }
  ];

  return (
    // We use a deep, premium slate/blue background here
    <section className="relative py-14 lg:py-12  bg-gray-100 overflow-hidden font-sans"
    >
      
      {/* Optional: Subtle background glows for depth */}
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Child 1: The Heading */}
        <SectionHeading />

        {/* The Grid Layout for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Child 2: Mapping over the data to render Service Cards */}
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;