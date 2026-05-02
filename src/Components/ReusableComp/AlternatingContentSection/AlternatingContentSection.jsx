import React from 'react';

const AlternatingContentSection = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {data.map((item, index) => {
          // Check if the index is odd (1, 3, 5). If it is, the image goes on the left.
          const isImageLeft = index % 2 !== 0;

          return (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 last:mb-0"
            >
              
              {/* TEXT BLOCK */}
              {/* On mobile, text is always order-2 (under the image). On desktop, it changes based on isImageLeft */}
              <div className={`order-2 flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-3xl font-bold text-[#1a6b8f] mb-6">
                  {item.title}
                </h3>
                
                {/* We map through paragraphs in case you have multiple paragraphs per section */}
                <div className="space-y-4">
                  {item.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-slate-600 text-[17px] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* IMAGE BLOCK */}
              {/* On mobile, image is always order-1 (top). On desktop, it changes based on isImageLeft */}
              <div className={`order-1 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group">
                  {/* Optional: Subtle overlay for premium feel */}
                  <div className="absolute inset-0 bg-[#1a6b8f]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default AlternatingContentSection;