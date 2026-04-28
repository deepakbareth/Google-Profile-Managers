import React from 'react';
import ManagementText from './ManagementText';
import ManagementImage from './ManagementImage';

const ManagementHero = () => {
  return (
    // Added pt-32 to account for the fixed Navbar
    <section className="relative pt-12 pb-16  lg:pb-14 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: Text 
              Mobile: Goes to bottom (order-2)
              Desktop: Goes to left side (lg:order-1)
          */}
          <div className="order-2 lg:order-1 w-full mt-4 lg:mt-0">
            <ManagementText />
          </div>

          {/* RIGHT COLUMN: Image & Tabs 
              Mobile: Goes to top (order-1)
              Desktop: Goes to right side (lg:order-2)
          */}
          <div className="order-1 lg:order-2 w-full">
            <ManagementImage />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagementHero;