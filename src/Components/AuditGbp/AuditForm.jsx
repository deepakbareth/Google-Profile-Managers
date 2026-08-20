import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const AuditForm = () => {
    return (
        <section className="relative py-16 bg-white overflow-hidden font-sans border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 relative">
                    <div className="mb-8 text-center">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">Get Your Website</h3>
                        <p className="text-slate-500 text-[15px] font-medium max-w-lg mx-auto">
                            Fill out the details below and our team will review your property for hands-off management.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                                placeholder="+1 Phone Number"
                            />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400 resize-y min-h-[120px]"
                                placeholder="Enter your message or additional details..."
                            ></textarea>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500">Airbnb / VRBO Listing URL</label>
                                <span className="text-[11px] text-blue-500 uppercase tracking-wide font-bold bg-blue-50 px-2 py-1 rounded-md">verified live</span>
                            </div>
                            <input
                                type="text"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                                placeholder="e.g., 12345678 & paste your listing link"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full cursor-pointer group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-[16px] flex items-center justify-center gap-3"
                            >
                                Submit Details
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <p className="text-center text-[13px] text-slate-500 font-medium pt-2 flex items-center justify-center gap-2">
                            <ShieldCheck size={14} className="text-emerald-500" /> We'll only use this to review your listing and follow up — no spam.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AuditForm;
