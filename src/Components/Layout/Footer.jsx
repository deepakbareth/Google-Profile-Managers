import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-10 pb-5 font-sans border-t border-white/5">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN (Takes up more space) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-6 max-w-2xl">
              Google Profile Managers is The Master of Local Search 🌴
            </h2>
            
            <p className="text-slate-300 text-[17px] leading-relaxed mb-10 max-w-2xl font-medium">
              Google Profile Managers sets up, optimizes, and manages Google Business Profiles for businesses, multi-location enterprises, and partners who want to white label industry leading GBP services.
            </p>
            
            {/* Modernized "Dominate Now!" Button */}
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-white/20 text-white rounded-xl font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#0f172a] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Dominate Now!
            </a>
          </div>

          {/* RIGHT COLUMN (Info and Socials) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col lg:items-end text-left lg:text-right">
            
            <div className="mb-8">
              <h4 className="text-white font-bold text-xl mb-2">
                Google Profile Managers
              </h4>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-lg font-medium inline-block">
                Services
              </a>
            </div>

            {/* Phone Number with Mobile Icon */}
            <a 
              href="tel:+13158981412" 
              className="flex items-center lg:justify-end gap-3 text-white font-bold text-xl mb-10 hover:text-blue-400 transition-colors group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              +1 315 898 1412
            </a>

            {/* Social Icons Container */}
            <div className="flex items-center lg:justify-end gap-4">
              {/* Instagram */}
              <a href="#" className="flex justify-center items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Twitter / X */}
              <a href="#" className="flex justify-center items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="flex justify-center items-center w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0f172a] hover:border-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[15px] font-medium">
            © Google Profile Managers, 2023
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;