import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] relative overflow-hidden font-sans border-t border-white/5 pt-20 pb-8">

      {/* Premium Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a6b8f] to-transparent rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ========================================== */}
          {/* COLUMN 1: Brand & CTA (Takes up 5 columns) */}
          {/* ========================================== */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl font-bold text-white leading-tight tracking-tight mb-5">
              Google Profile Managers
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium max-w-md">
              We set up, optimize, and manage Google Business Profiles for businesses, multi-location enterprises, and partners who want to white label industry-leading local search services.
            </p>

            {/* Premium "Dominate Now!" Button */}
            <a
              href="contact-us"
              className="inline-flex justify-center items-center px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold tracking-wide transition-all duration-300 hover:bg-[#1a6b8f] hover:border-[#1a6b8f] hover:shadow-[0_0_30px_rgba(26,107,143,0.4)] hover:-translate-y-1"
            >
              Dominate Now!
            </a>
          </div>

          {/* ========================================== */}
          {/* COLUMN 2: Quick Links (Takes up 3 columns) */}
          {/* ========================================== */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col">
            <h4 className="text-white font-bold text-lg tracking-wide uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['MANAGEMENT', 'OPTIMIZATION', 'SETUP', 'SUPPORT', 'WEB-SERVICES', 'CONTACT-US'].map((link, index) => (
                <li key={index}>
                  <Link to={`/googleprofilemanagers/${link.toLocaleLowerCase()}`} className="group flex items-center text-slate-400 hover:text-white transition-all duration-300 font-medium text-base">
                    {/* Animated Arrow on Hover */}
                    <svg className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#36b5cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================== */}
          {/* COLUMN 3: Contact Info (Takes up 4 columns) */}
          {/* ========================================== */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col">
            <h4 className="text-white font-bold text-lg tracking-wide uppercase mb-6">
              Get in Touch
            </h4>

            <div className="flex flex-col space-y-6 mb-8">
              {/* Email Button/Link */}
              <a
                href="mailto:Info@GoogleProfileManagers.com"
                className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-[#1a6b8f] group-hover:border-[#1a6b8f] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="font-medium text-base break-all">Info@GoogleProfileManagers.com</p>
                </div>
              </a>

              {/* Phone Button/Link */}
              <a
                href="tel:+13158981412"
                className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-[#1a6b8f] group-hover:border-[#1a6b8f] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="font-medium text-lg">+1 315 898 1412</p>
                </div>
              </a>
            </div>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' className="flex justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#1a6b8f] hover:border-[#1a6b8f] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://x.com/" target='_blank' rel='noreferrer' className="flex justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#1a6b8f] hover:border-[#1a6b8f] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' className="flex justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#1a6b8f] hover:border-[#1a6b8f] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Divider, Copyright, and Legal Links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Google Profile Managers. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;