import React from 'react';

const TestimonialCard = ({ quote, author, image }) => {
  return (
    <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] group flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start z-10">
      
      {/* Decorative Background Quote Icon */}
      <svg className="absolute top-6 left-6 w-16 h-16 text-blue-50 opacity-50 transition-transform duration-500 group-hover:scale-110 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.132 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      {/* Author Avatar Image */}
      <div className="relative flex-shrink-0 z-10">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-100 to-blue-50">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover rounded-full shadow-sm"
          />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="flex-1 text-center md:text-left z-10 pt-2">
        <p className="text-[17px] md:text-lg text-slate-700 italic leading-relaxed font-medium mb-6">
          {quote}
        </p>
        <p className="text-[15px] md:text-[16px] text-[#0d5c87] font-bold tracking-wide">
          {author}
        </p>
      </div>

    </div>
  );
};

export default TestimonialCard;