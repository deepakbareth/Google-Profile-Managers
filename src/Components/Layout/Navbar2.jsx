import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/websiteLogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Track scroll position to trigger the full-width transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
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

  // Ensure absolute paths for pages and hash paths for sections
  const navLinks = [
    { name: 'MANAGEMENT', path: '/management' },
    { name: 'OPTIMIZATION', path: '/optimization' },
    { name: 'SETUP', path: '/setup' },
    { name: 'SUPPORT', path: '/support' },
    { name: 'WEB SERVICES', path: '/web-services' },
    { name: 'BLOGS', path: '/blogs' },
  ];

  return (
    <>
      {/* ==============================
          MOBILE BLUR OVERLAY
          ============================== */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 xl:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ==============================
          MAIN NAVBAR WRAPPER
          ============================== */}
      <div
        className={`fixed left-0 right-0 z-50 font-sans transition-all duration-500 ease-in-out ${isScrolled ? 'top-0 px-0' : 'top-4 px-4 sm:px-6 lg:px-8'
          }`}
      >
        <div
          className={`mx-auto bg-white flex items-center justify-between border border-gray-200 transition-all duration-500 ease-in-out ${isScrolled
            ? 'w-full max-w-full rounded-none px-4 sm:px-8 py-4 lg:px-12 shadow-sm border-x-0 border-t-0'
            : 'max-w-[80rem] rounded-full px-4 sm:px-6 py-2 md:py-3 shadow-md'
            }`}
        >
          {/* ==============================
              1. LEFT: LOGO SECTION
              ============================== */}
          <div className="flex-1 flex justify-start items-center min-w-max">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="Google Business Profile Managers"
                className={`w-auto object-contain cursor-pointer transition-all duration-500 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'
                  }`}
              />
            </Link>
          </div>

          {/* ==============================
              2. CENTER & 3. RIGHT ACTIONS
              ============================== */}
          <div className="hidden xl:flex flex-1 justify-end items-center gap-6 min-w-max">
            <div className="hidden xl:flex flex-[2] justify-center items-center space-x-4 xl:space-x-5">
              {navLinks.map((link) => {
                const isHash = link.path.startsWith('#');
                const isActive = isHash
                  ? location.hash === link.path
                  : location.pathname === link.path;

                const baseClasses = "text-[14px] font-bold transition-colors duration-300 tracking-wide whitespace-nowrap";
                const activeClasses = isActive ? "text-blue-700" : "text-[#1e293b] hover:text-blue-700";

                return isHash ? (
                  <a key={link.name} href={link.path} className={`${baseClasses} ${activeClasses}`}>
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={link.path} className={`${baseClasses} ${activeClasses}`}>
                    {link.name}
                  </Link>
                );
              })}

              {/* "MORE" Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-[14px] font-bold text-[#1e293b] hover:text-blue-700 transition-colors duration-200 tracking-wide whitespace-nowrap">
                  MORE
                  <svg className="ml-1 w-4 h-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden">

                  <Link
                    to="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-bold transition-colors ${location.pathname === '/contact-us' // <-- Changed this line
                      ? 'text-blue-700'
                      : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    Contact Us
                  </Link>

                </div>
              </div>
            </div>

            <a
              href="tel:+13158981412"
              className={`flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 rounded-full font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap ${isScrolled ? 'py-2.5 text-[14px]' : 'py-3 text-[14px]'
                }`}
            >
              +1 315 898 1412
            </a>
          </div>

          {/* ==============================
              MOBILE MENU BUTTON
              ============================== */}
          <div className="xl:hidden flex items-center justify-end flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1e293b] p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ==============================
            MOBILE NAVIGATION DROPDOWN
            ============================== */}
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out origin-top max-w-[95rem] mx-auto ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto mt-3'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none absolute w-full'
            }`}
        >
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-5 flex flex-col space-y-2 border border-gray-100 mx-4">
            {navLinks.map((link) => {
              const isHash = link.path.startsWith('#');
              const isActive = isHash
                ? location.hash === link.path
                : location.pathname === link.path;

              const baseClasses = "px-4 py-3 rounded-xl text-sm font-bold transition-colors";
              const activeClasses = isActive ? "bg-gray-100 text-blue-700" : "text-gray-900 hover:bg-gray-100 hover:text-gray-800";

              return isHash ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile More Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-bold text-[#1e293b] hover:bg-gray-100 hover:text-blue-700 transition-colors"
              >
                MORE
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-200 ${isMobileMoreOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>

                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-bold transition-colors ${location.pathname === '/contact-us' // <-- Changed this line
                    ? 'text-blue-700'
                    : 'text-gray-800 hover:text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  Contact Us
                </Link>

              </div>
            </div>

            {/* Mobile Actions (Phone) */}
            <div className="mt-4 pt-5 border-t border-gray-200 flex flex-col gap-3">
              <a
                href="tel:+13158981412"
                className="flex justify-center items-center gap-2 w-full bg-blue-700 text-white px-5 py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-800 transition-colors shadow-sm"
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