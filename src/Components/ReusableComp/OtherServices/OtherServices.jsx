import React from 'react';
import ServiceCard from './ServiceCard';

const OtherServices = ({ data }) => {
  return (
    <section className="w-full py-14 lg:py-22 bg-[#f8fafc] font-sans">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            {data.title}
          </h2>
        </div>

        {/* 3-Column Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {data.items.map((service, index) => (
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