import React from 'react';
import ServiceText from './ServiceText';
import ServiceImage from './ServiceImage';

const ServiceHero = ({ data }) => {
  return (
    <section className="relative pt-12 pb-16 lg:pb-14 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: Text */}
          <div className="order-2 lg:order-1 w-full mt-4 lg:mt-0">
            <ServiceText data={data} />
          </div>

          {/* RIGHT COLUMN: Image & Tabs */}
          <div className="order-1 lg:order-2 w-full">
            <ServiceImage image={data.image} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;