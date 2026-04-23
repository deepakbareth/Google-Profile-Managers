import React from 'react';
import FeatureImage from './FeatureImage';
import LogoMarquee from './LogoMarquee';
import FeatureText from './FeatureText';

const FeatureSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-white overflow-hidden font-sans"
    

    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Main CSS Grid layout:
          - Mobile/Tablet: 1 Column (stacked)
          - Laptop/Desktop (lg+): 2 Columns (side-by-side)
          - items-center: Ensures the text and image are perfectly vertically aligned
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: Image + Featured Marquee 
              - Mobile: Bottom (order-2)
              - Desktop: Left side (order-1)
          */}
          <div className="w-full flex flex-col items-center lg:items-start order-2 lg:order-1 mt-6 md:mt-10 lg:mt-0">
            {/* The Image Component */}
            <div className="w-full max-w-[35rem] lg:max-w-none mx-auto">
              <FeatureImage />
            </div>
            
            {/* The Marquee Component */}
            <div className="w-full mt-10 md:mt-12 lg:mt-14">
              <LogoMarquee />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content 
              - Mobile: Top (order-1) so users read the pitch before seeing the image
              - Desktop: Right side (order-2)
          */}
          <div className="w-full order-1 lg:order-2 flex flex-col justify-center max-w-[40rem] lg:max-w-none mx-auto">
            <FeatureText />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;