import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  // Setup State for Form Data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Setup State for UI Feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call (Replace this with your actual fetch/axios call)
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Subtle Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#1a6b8f]/5 to-transparent blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#36b5cc]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Content & Contact Info (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center pt-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a6b8f] mb-6 leading-[1.15] tracking-tight">
              Stop monkeying around! It's time to work with the Master of Local Search.
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hey there explorer! Feeling a little lost when it comes to your Google Business Profile and how to rank higher on Google Maps and the local pack? Let me help!
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Please fill out the form or contact Google Profile Managers directly using the details below. We look forward to hearing from you and helping you get to the top of the SERPS! Now, back to bananas ...
            </p>

            <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent mb-10"></div>

            {/* Contact Details */}
            <div className="flex flex-col space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Company Info */}
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-3">Google Profile Managers</h4>
                  <a href="mailto:Info@GoogleProfileManagers.com" className="group flex items-center text-slate-600 hover:text-[#1a6b8f] transition-colors">
                    <Mail className="w-5 h-5 mr-2 text-[#36b5cc] group-hover:text-[#1a6b8f] transition-colors" />
                    <span className="font-medium">Info@GoogleProfileManagers.com</span>
                  </a>
                </div>

                {/* Phone & Socials */}
                <div>
                  <a href="tel:+13158981412" className="group flex items-center text-slate-800 hover:text-[#1a6b8f] transition-colors mb-5">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-[#1a6b8f] transition-colors">
                      <Phone className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold text-lg">+1 315 898 1412</span>
                  </a>

                  {/* Raw SVG Social Icons */}
                  <div className="flex space-x-3">
                    {/* Instagram */}
                    <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-[#1a6b8f] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-[#1a6b8f] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-[#1a6b8f] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: The Form (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7">
            {/* Glassmorphism Card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(26,107,143,0.1)] border border-white p-8 md:p-12 relative overflow-hidden">
              
              {/* Subtle top inner glow for glass effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>

              {/* Success Message Alert */}
              {isSuccess && (
                <div className="mb-8 bg-teal-50/80 backdrop-blur-sm border border-teal-200 text-teal-800 px-5 py-4 rounded-xl flex items-center animate-fade-in-down">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">Thanks for reaching out! We'll get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Name Fields */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Name <span className="text-red-400 font-normal italic ml-1">(Required)</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-[#1a6b8f]/10 focus:border-[#1a6b8f] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400"
                      />
                      <span className="text-xs font-medium text-slate-500 mt-1.5 block px-1">First</span>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-[#1a6b8f]/10 focus:border-[#1a6b8f] focus:bg-white transition-all outline-none text-slate-800 placeholder-slate-400"
                      />
                      <span className="text-xs font-medium text-slate-500 mt-1.5 block px-1">Last</span>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email <span className="text-red-400 font-normal italic ml-1">(Required)</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-[#1a6b8f]/10 focus:border-[#1a6b8f] focus:bg-white transition-all outline-none text-slate-800"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone <span className="text-red-400 font-normal italic ml-1">(Required)</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-[#1a6b8f]/10 focus:border-[#1a6b8f] focus:bg-white transition-all outline-none text-slate-800"
                  />
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    How can we help you? <span className="text-red-400 font-normal italic ml-1">(Required)</span>
                  </label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-[#1a6b8f]/10 focus:border-[#1a6b8f] focus:bg-white transition-all outline-none text-slate-800 resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`group w-full md:w-auto inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 transform ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-[#1a6b8f] hover:bg-[#135470] hover:shadow-[#1a6b8f]/30 hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;