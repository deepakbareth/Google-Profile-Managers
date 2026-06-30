import React from 'react';
import { Phone, MessageCircle, CalendarClock } from 'lucide-react';
import whatsappIcon from "../../../assets/whatsapp-icon.png"

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-3">

      {/* 1. Book Call (Secondary Action) */}
      <a
        href="/contact-us"
        className="group relative flex items-center justify-center w-12 h-12 bg-white border border-slate-100 rounded-full text-blue-600 shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
        aria-label="Book Call"
      >
        <CalendarClock size={20} />
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Book a Call
        </span>
      </a>

      {/* 2. Call Now (Secondary Action) */}
      <a
        href="tel:+13158981412"
        className="group relative flex items-center justify-center w-12 h-12 bg-white border border-slate-100 rounded-full text-blue-600 shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone size={20} />
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Call +1 315-898-1412
        </span>
      </a>

      {/* 3. WhatsApp (Primary Action - Slightly larger & colored) */}
      <a
        href="https://wa.me/13158981412"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-15 h-15  rounded-full text-white  hover:-translate-y-1 transition-all duration-300 mt-1"
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-15 md:h-15" />
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
};

export default FloatingCTA;