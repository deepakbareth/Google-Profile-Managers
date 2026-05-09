import React from 'react';
import TestimonialCard from './TestimonialCard';


const TestimonialsSection = ({ data }) => {
  return (
    <section className="relative w-full py-10 bg-[#f8fafc] font-sans overflow-hidden">

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            {data.title}
          </h2>
        </div>

        {/* Testimonials Grid (1 Column on Mobile, 2 on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {data.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;