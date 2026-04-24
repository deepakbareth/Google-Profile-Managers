import React from 'react';

const TestimonialCard = ({ quote, name, title, image }) => {
  return (
    // The key-based animation will re-trigger every time the slide changes
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-8 md:px-20 animate-fade-in">
      
      {/* Optional: Avatar (Kept small and elegant to fit the new design) */}
      <div className="w-26 h-26 rounded-full overflow-hidden border-2 border-cyan-400 mb-3 shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Location / Title (Cyan, uppercase, tracked out) */}
      <h4 className="text-cyan-400 uppercase tracking-[0.15em] text-sm font-bold mb-6">
        {title}
      </h4>

      {/* The Quote (Large, italic, elegant serif-like feel) */}
      <p className="text-[15px] md:text-2xl  text-white italic font-medium leading-relaxed md:leading-normal mb-10">
        "{quote}"
      </p>

      {/* The Name (With the horizontal lines matching your screenshot) */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-[1px] bg-slate-500"></div>
        <p className="text-white font-bold text-lg tracking-wide">
          {name}
        </p>
        <div className="w-12 h-[1px] bg-slate-500"></div>
      </div>

      {/* Inline animation for a smooth fade transition between slides */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCard;