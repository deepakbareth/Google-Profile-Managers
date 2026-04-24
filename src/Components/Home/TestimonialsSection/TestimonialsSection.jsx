import React, { useState, useEffect } from 'react';
import TestimonialHeading from './TestimonialHeading';
import TestimonialCard from './TestimonialCard';

// IMPORT YOUR CUSTOMER IMAGES HERE
import user1 from '../../../assets/TestimonialImages/sara.png'; 
import user2 from '../../../assets/TestimonialImages/ava.png';
import user3 from '../../../assets/TestimonialImages/colin.png';
import user4 from '../../../assets/TestimonialImages/sydney.png';
import bg from '../../../assets/TestimonialImages/bg.jpg';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  // Optional: Auto-play functionality
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <section className="relative py-12 lg:py-14 overflow-hidden font-sans">
      
      {/* ==========================================
          BEAUTIFUL PROFESSIONAL BACKGROUND IMAGE 
          ========================================== */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bg}')` }}
      >
        {/* Darkened overlay */}
        <div className="absolute inset-0 bg-[#242b35]/90 "></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Child 1: Heading */}
        <TestimonialHeading />

        {/* ==========================================
            THE CENTERED SLIDER
            ========================================== */}
        <div className="relative w-full flex items-center justify-center min-h-[350px] my-8 md:my-12">
          
          {/* DESKTOP ONLY: Left Arrow */}
          <button 
            onClick={prevSlide}
            className="hidden md:block absolute left-4 z-20 p-2 text-slate-500 hover:text-white transition-colors duration-300"
            aria-label="Previous Testimonial"
          >
            <svg className="w-10 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Child 2: Active Testimonial Card */}
          <div key={currentIndex} className="w-full">
            <TestimonialCard 
              name={testimonialsData[currentIndex].name}
              title={testimonialsData[currentIndex].title}
              quote={testimonialsData[currentIndex].quote}
              image={testimonialsData[currentIndex].image}
            />
          </div>

          {/* DESKTOP ONLY: Right Arrow */}
          <button 
            onClick={nextSlide}
            className="hidden md:block absolute right-4 z-20 p-2 text-slate-500 hover:text-white transition-colors duration-300"
            aria-label="Next Testimonial"
          >
            <svg className="w-10 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* ==========================================
            CONTROLS: DESKTOP VS MOBILE
            ========================================== */}

        {/* DESKTOP ONLY: Standard Dot Indicators */}
        <div className="hidden md:flex gap-3 mb-16">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* MOBILE ONLY: Glassmorphism Pill Controller (Matches Screenshot 2) */}
        <div className="flex md:hidden items-center justify-between gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-2 mb-10 w-fit shadow-xl">
          
          {/* Mobile Left Arrow */}
          <button 
            onClick={prevSlide} 
            className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Mobile Pill Indicators */}
          <div className="flex items-center gap-2 px-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-[#71a1a6] shadow-[0_0_8px_rgba(1,191,36,0.6)]' // Glowing yellow/orange active pill
                    : 'w-4 bg-white/30' // Gray inactive pill
                }`}
              />
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button 
            onClick={nextSlide} 
            className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ========================================== */}

        {/* Bottom Action Button */}
        <div className="flex justify-center w-full px-4 sm:px-0 mt-4 md:mt-0">
          <a 
            href="#" 
            className="w-full sm:w-auto flex justify-center items-center px-8 py-4 bg-transparent border-2 border-cyan-500 text-slate-100 rounded-full font-bold text-sm md:text-xl tracking-wide shadow-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:-translate-y-1 text-center"
          >
            Read More Google Business Profile Managers Reviews
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;