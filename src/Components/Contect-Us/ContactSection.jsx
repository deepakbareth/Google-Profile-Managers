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

    // Simulate an API call
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
    <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden font-sans">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated-like Glows */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-400/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-cyan-400/10 rounded-full blur-[150px] transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: Content & Contact Info */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center order-2 lg:order-1 mt-10 lg:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-[35px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-[1.2] tracking-tight mb-6">
              Stop monkeying around! It's time to work with the Master of Local Search.
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              Hey there explorer! Feeling a little lost when it comes to your Google Business Profile and how to rank higher on Google Maps and the local pack? Let me help!
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Please fill out the form or contact Google Profile Managers directly using the details below. We look forward to hearing from you and helping you get to the top of the SERPS! Now, back to bananas...
            </p>

            <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent mb-10"></div>

            {/* Contact Details */}
            <div className="flex flex-col space-y-8">

              <div className="flex flex-col sm:flex-row gap-8 lg:flex-col xl:flex-row justify-between">
                {/* Email Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-lg mb-4 tracking-wide uppercase text-sm">Email Us</h4>
                  <a href="mailto:Info@GoogleProfileManagers.com" className="group flex items-start text-slate-600 hover:text-blue-700 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-base mt-2 truncate">Info@GoogleProfileManagers.com</span>
                  </a>
                </div>

                {/* Phone Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-lg mb-4 tracking-wide uppercase text-sm">Call Us</h4>
                  <a href="tel:+13158981412" className="group flex items-center text-slate-800 hover:text-blue-700 transition-all duration-300">
                    <div className="w-5 h-5 rounded-xl flex items-center justify-center mr-4  transition-all duration-300 flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-500 group-hover:blue-600 transition-colors" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">+1 315 898 1412</span>
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <h4 className="font-bold text-slate-900 text-lg mb-4 tracking-wide uppercase text-sm">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* X / Twitter */}
                  <a href="https://x.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-8 sm:p-10 md:py-5 py-5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)]">

              {/* Subtle top inner glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
                <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
              </div>

              {/* Success Message Alert */}
              {isSuccess && (
                <div className="mb-8 bg-teal-50/80 backdrop-blur-sm border border-teal-200 text-teal-800 px-5 py-4 rounded-xl flex items-center animate-fade-in-down">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">Thanks for reaching out! We'll get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-800 font-medium placeholder-slate-400"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-800 font-medium placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-800 font-medium placeholder-slate-400"
                  />
                </div>

                {/* Phone Field */}
                <div className="relative group">
                  <label className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-800 font-medium placeholder-slate-400"
                  />
                </div>

                {/* Textarea */}
                <div className="relative group">
                  <label className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">
                    How can we help you? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-800 font-medium placeholder-slate-400 resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full flex items-center justify-center px-8 py-4.5 text-white font-bold text-lg rounded-xl transition-all duration-300 transform ${isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1'
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
                      <span className="flex items-center tracking-wide">
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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