import React from 'react';
import FaqCard from './FaqCard';

const ServiceFaqs = ({ data }) => {
  return (
    <section id="FAQs" className="scroll-mt-10 w-full py-20 lg:py-28 bg-[#f4f7fa] font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
           <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            {data.title}
          </h2>
        </div>

        {/* 2-Column Grid for FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {data.items.map((faq, index) => {
            // THE MAGIC LOGIC: Check if it's the last item AND the total is an odd number
            const isLastOdd = index === data.items.length - 1 && data.items.length % 2 !== 0;
            
            return (
              <div 
                key={index} 
                className={isLastOdd ? "lg:col-span-2" : ""}
              >
                <FaqCard 
                  question={faq.question}
                  answer={faq.answer}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceFaqs;