import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const FreeAuditForm = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-blue-50/50 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Text Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <Zap size={14} className="text-blue-400" />
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-black leading-[1.15] tracking-tight mb-6">
              Get Your Free Google Business Profile <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight">Audit</span>
            </h2>

            <p className="text-[17px] sm:text-lg text-slate-700 leading-relaxed font-medium mb-10 max-w-xl mx-auto lg:mx-0">
              Find out exactly what's holding your local ranking back. We'll manually review your profile and give you a step-by-step roadmap to dominate your local market.
            </p>

            <div className="hidden lg:block space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                  <ShieldCheck size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg mb-1.5">Comprehensive Analysis</h4>
                  <p className="text-slate-700 text-[15px] leading-relaxed">We manually check over 40+ ranking factors on your profile to identify critical gaps.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg mb-1.5">Actionable Growth Strategy</h4>
                  <p className="text-slate-700 text-[15px] leading-relaxed">Get a custom, step-by-step plan you can implement to beat your local competitors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Claim Your Free Audit</h3>
              <p className="text-slate-500 text-sm font-medium">Fill out the details below and we'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                  placeholder="Your Company LLC"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Website</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                    placeholder="www.example.com"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                    placeholder="New York, NY"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full cursor-pointer group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-[16px] flex items-center justify-center gap-3"
                >
                  Get Free Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-center text-[13px] text-slate-500 font-medium pt-2 flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" /> We respect your privacy. No spam ever.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeAuditForm;
