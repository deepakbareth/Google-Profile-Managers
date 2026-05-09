// import React from 'react';
// import ServiceText from './ServiceText';
// import ServiceImage from './ServiceImage';

// const ServiceHero = ({ data }) => {
//   return (
//     <section className="relative pt-12 pb-16 lg:pb-14 bg-white overflow-hidden font-sans">
//       <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//           {/* LEFT COLUMN: Text */}
//           <div className="order-2 lg:order-1 w-full mt-4 lg:mt-0">
//             <ServiceText data={data} />
//           </div>

//           {/* RIGHT COLUMN: Image & Tabs */}
//           <div className="order-1 lg:order-2 w-full">
//             <ServiceImage image={data.image} />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHero;


import React from 'react';

const ServiceHero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ========================================== */}
          {/* LEFT COLUMN: Main Text Content             */}
          {/* ========================================== */}
          {/* Added order-2 lg:order-1 to move this below the image on mobile */}
          <div className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">

            {/* Main Headings */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[35px] font-extrabold text-[#0f172a] leading-[1.2] mb-4 tracking-tight">
                {data.title}
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                {data.titleHighlight}
              </p>
            </div>

            {/* Standard Paragraphs */}
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: Image & Italic Subtitle      */}
          {/* ========================================== */}
          {/* Added order-1 lg:order-2 to move this to the top on mobile */}
          <div className="flex flex-col w-full items-center lg:items-end order-1 lg:order-2">

            {/* Image Stage */}
            <div className="relative w-full flex justify-center lg:justify-end mb-8">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

              <img
                src={data.image}
                alt="Google Business Profile Optimization"
                className="relative z-10 w-full max-w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-xl"
              />
            </div>

            {/* MOVED UNDER IMAGE: The Italicized Subtitle Block */}
            <div className="border-l-[4px] border-blue-600 pl-6 w-full max-w-[600px] lg:mr-auto lg:ml-auto xl:ml-0 xl:mr-0">
              <p className="text-lg sm:text-[20px] text-slate-800 font-medium italic leading-relaxed">
                "{data.italicSubtitle}"
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;