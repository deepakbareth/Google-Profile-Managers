import React from 'react';
import TestimonialCard from './TestimonialCard';

// IMPORT YOUR IMAGES HERE
import saraImg from '../../../assets/TestimonialImages/sara.png';
import avaImg from '../../../assets/TestimonialImages/ava.png';

const TestimonialsSection = () => {
  // Exact content mapped from your screenshot
  const testimonialsData = [
    {
      // Put `saraImg` here once imported
      image: saraImg, 
      quote: "We're always looking for ways to gain an advantage in a competitive industry like overhead garage doors. Google Profile Managers has made it simple for us to achieve excellent results from our profiles without having to perform any of the effort ourselves.",
      author: "– Sara Vella, National Overhead Door Co"
    },
    {
      // Put `avaImg` here once imported
      image: avaImg, 
      quote: "We used to spend hours trying to stay up with Google and all of the new prospects. My team can now devote their time to caring for all of the new patients they bring to the practise each week, thanks to Google Profile Managers.",
      author: "– Dr. Ava Shamban, Ava MD, Skin Five"
    }
  ];

  return (
    <section className="relative w-full py-10  bg-[#f8fafc] font-sans overflow-hidden">
      
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
             What customers say about Google Profile Managers Services
          </h2>
        </div>

        {/* Testimonials Grid (1 Column on Mobile, 2 on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {testimonialsData.map((testimonial, index) => (
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