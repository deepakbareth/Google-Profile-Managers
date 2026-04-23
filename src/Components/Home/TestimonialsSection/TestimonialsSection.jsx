import React from 'react';
import TestimonialHeading from './TestimonialHeading';
import TestimonialCard from './TestimonialCard';

// IMPORT YOUR CUSTOMER IMAGES HERE
import user1 from '../../../assets/TestimonialImages/sara.png'; 
import user2 from '../../../assets/TestimonialImages/ava.png';
import user3 from '../../../assets/TestimonialImages/colin.png';
import user4 from '../../../assets/TestimonialImages/sydney.png';
import bg from '../../../assets/TestimonialImages/bg.jpg';

const TestimonialsSection = () => {
  // Exact text content from your screenshot
  const testimonialsData = [
    {
      name: "Sara Vella",
      title: "GM, National Overhead Door",
      quote: "In a competitive industry such as overhead garage doors, we're always looking for a way to get an edge. Google Business Profile Managers has made it easy for us to get great results from our profile without having to do any of the work ourselves.",
      image: user1
    },
    {
      name: "Dr. Ava Shamban",
      title: "Founder, Ava MD and Skin Five",
      quote: "We use to spend countless hours trying to keep up with Google and all the new opportunities. Thanks to Google Business Profile Managers, my staff can spend their time focusing on caring for all the new patients they bring to the practice each week.",
      image: user2
    },
    {
      name: "Colin Whitman",
      title: "Partner, Mr. Smith",
      quote: "We rely on Google Business Profile Managers to optimize our client's listings and they've never let us down. We get quick turn around on services and love being able to reach out to an expert when we have a question from a client we can't answer.",
      image: user3
    },
    {
      name: "Sydney",
      title: "Manager, IOIO Studio",
      quote: "Google Business Profile Managers originally helped us with a major issue that took down our Google business listing, and now five months later, I couldn't imagine not working with them every month. They save me a ton of time!",
      image: user4
    }
  ];

  return (
    <section className="relative py-10 lg:py-12 overflow-hidden font-sans">
      
      {/* ==========================================
          BEAUTIFUL PROFESSIONAL BACKGROUND IMAGE 
          ========================================== */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center "
        style={{ 
          // Replace this URL with your own background asset if you prefer!
          backgroundImage: `url('${bg}')`
        }}
      >
        {/* Dark overlay to make the white cards and text highly readable */}
        <div className="absolute inset-0 bg-[#0f172a]/1 backdrop-blur-[8px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Child 1: Heading */}
        <TestimonialHeading />

        {/* The Grid Layout for the Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          
          {/* Child 2: Mapping the Testimonial Cards */}
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}

        </div>

        {/* Bottom Full-Width Action Button */}
        <div className="flex justify-center">
          <a 
            href="#" 
            className="w-full lg:w-auto flex justify-center items-center px-10 py-5 bg-blue-600 text-center text-white rounded-xl font-bold text-lg md:text-xl tracking-wide shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Read More Google Business Profile Managers Reviews
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;