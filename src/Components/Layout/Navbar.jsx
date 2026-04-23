import React, { useState, useEffect } from 'react';
import logo from '../../assets/websiteLogo.png'; // Make sure this path is correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  // Premium feature: Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'MANAGEMENT', href: '#' },
    { name: 'OPTIMIZATION', href: '#' },
    { name: 'SETUP', href: '#' },
    { name: 'SUPPORT', href: '#' },
    { name: 'WEB SERVICES', href: '#' },
  ];

  return (
    <>
      {/* ==============================
          MOBILE BLUR OVERLAY
          ============================== */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)} // Closes menu if user clicks outside
      />

      {/* Main Navbar Wrapper */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          
          {/* ==============================
              BOX 1: LOGO
              ============================== */}
          <div className="bg-white/95 backdrop-blur-md shadow-sm border border-gray-100 rounded-full px-5 py-2 flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Google Business Profile Managers" 
              className="h-10 w-auto object-contain" 
            />
          </div>

          {/* ==============================
              BOX 2: NAVIGATION LINKS (Desktop Only)
              ============================== */}
          <div className="hidden lg:flex bg-slate-500 shadow-sm border border-slate-200 rounded-full p-1.5 items-center justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-slate-100 transition-all duration-300 hover:bg-[#4a3b69] hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* "More" Dropdown inside the pill */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-full text-sm font-semibold text-slate-100 transition-all duration-300 hover:bg-[#4a3b69] hover:text-white">
                MORE
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <a href="#" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-[#4a3b69]">Contact Us</a>
              </div>
            </div>
          </div>

          {/* ==============================
              BOX 3: PHONE NUMBER (Desktop Only)
              ============================== */}
          <div className="hidden lg:flex bg-white/95 backdrop-blur-md shadow-sm border border-gray-100 rounded-full px-6 py-2.5 items-center">
            <a 
              href="tel:+13158981412" 
              className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide hover:text-[#4a3b69] transition-colors"
            >
              +1 315 898 1412
            </a>
          </div>

          {/* ==============================
              MOBILE MENU BUTTON (Mobile Only)
              ============================== */}
          <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-sm border border-gray-100 rounded-full p-2 flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 p-1"
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ==============================
            MOBILE NAVIGATION DROPDOWN
            ============================== */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto mt-3' 
              : 'opacity-0 -translate-y-4 scale-95 pointer-events-none absolute w-full'
          }`}
        >
          {/* Added shadow-2xl and ring to make it pop off the blurred background */}
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 rounded-3xl p-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-[#4a3b69] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div>
              <button 
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-[#4a3b69] hover:text-white transition-colors"
              >
                MORE
                <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-200 ${isMobileMoreOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                 <a href="#" className="block px-4 py-2 text-sm font-medium text-slate-500 hover:text-[#4a3b69]">Contact Us</a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <a 
                href="tel:+13158981412" 
                className="flex justify-center items-center w-full bg-slate-50 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-slate-100 transition-colors shadow-sm"
              >
                +1 315 898 1412
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;