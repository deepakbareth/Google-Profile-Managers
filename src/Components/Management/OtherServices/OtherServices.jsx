import React from 'react';
import ServiceCard from './ServiceCard';

// IMPORT YOUR 3 LOCAL IMAGES HERE
import optimizationImg from '../../../assets/ManagementPage/optimization.png'; // <-- Change path
import setupImg from '../../../assets/ManagementPage/setUp.png';               // <-- Change path
import supportImg from '../../../assets/ManagementPage/support.png';           // <-- Change path

const OtherServices = () => {
  // EXACT content from the screenshot
  const servicesData = [
    {
      image: optimizationImg,
      title: "Google Profile Optimization",
      price: "$99",
      unit: "PER PROFILE",
      paragraphs: [
        "Our Google Business Profile Optimization Service is ideal if you already have a Google Profile Managers listing, but you aren't 100% sure if you're doing everything you can to maximize your results.",
        "Instead of spending months researching best practices, and weeks trying to implement those ideas, our Google Business Profile Optimization Service can get you expert-level results without all the effort.",
        "With this service you will work directly with one of our Google Profile Managers experts who will audit your existing listing, and then lead the implementation of an action plan designed to bring your listing to the top of the local pack."
      ],
      bottomLinkText: "Google Business Profile Optimization Service",
      bottomLinkUrl: "#optimization"
    },
    {
      image: setupImg,
      title: "Google Business Profile Setup",
      price: "$99",
      unit: "PER PROFILE",
      paragraphs: [
        "Our Google Business Profile Setup Service is the best way to get started if you don't already have a Google Profile Managers listing and don't want to go through the pain of setting it up yourself.",
        "With this service, one of our Google Profile Managers Experts will take the time and hassle out of properly claiming, verifying, and setting up your Google Business Profile listing for maximum visibility.",
        "We have set up over 1,000 listings over the past five years, and our streamlined process gives you a listing that's distinguished from all the other competition in this digital jungle. 🌴",
        "Let the Google Profile Managers use his brain and braun to make setting up your Google Profile Managers profile easy!"
      ],
      bottomLinkText: "Google Business Profile Setup Service",
      bottomLinkUrl: "#setup"
    },
    {
      image: supportImg,
      title: "Google Business Profile Support",
      price: "$99",
      unit: "PER INCIDENT",
      paragraphs: [
        "Have a pressing issue or problem with your Google Profile Managers listing and need help getting it resolved?",
        "Well, then you've come to the right service for you. Let the experts at Google Profile Managers get you through the darkest parts of the digital jungle! 🌴",
        "Our Google Business Profile Support Service is designed to help you when you have a problem that you can't figure out or get an answer from Google.",
        "Our Google Profile Managers expert work with Google Business Profile representatives every day and can help you successfully navigate the system to get the resolution you need."
      ],
      bottomLinkText: "Google Business Profile Support Service",
      bottomLinkUrl: "#support"
    }
  ];

  return (
    <section className="w-full py-14 lg:py-22 bg-[#f8fafc] font-sans">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
           Other Google Business Profile Services
          </h2>
        </div>

        {/* 3-Column Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              price={service.price}
              unit={service.unit}
              paragraphs={service.paragraphs}
              bottomLinkText={service.bottomLinkText}
              bottomLinkUrl={service.bottomLinkUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherServices;