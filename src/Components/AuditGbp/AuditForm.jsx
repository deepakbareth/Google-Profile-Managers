import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

const AuditForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        listingUrl: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.listingUrl.trim()) newErrors.listingUrl = 'Listing URL is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would typically send data to your backend, Formspree, or EmailJS
            // console.log("Form Data Submitted:", formData);

            setSubmitStatus('success');
            setFormData({ fullName: '', email: '', phone: '', message: '', listingUrl: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative py-16 bg-white overflow-hidden font-sans border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 relative">
                    {submitStatus === 'success' ? (
                        <div className="py-12 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                            <p className="text-slate-600 font-medium">
                                Thank you for reaching out. Our team will review your property and get back to you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitStatus('idle')}
                                className="mt-8 text-blue-600 font-bold hover:text-blue-700 underline"
                            >
                                Submit another request
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 text-center">
                                <h3 className="text-3xl font-bold text-slate-900 mb-3">Get Your Website</h3>
                                <p className="text-slate-500 text-[15px] font-medium max-w-lg mx-auto">
                                    Fill out the details below and our team will review your property for hands-off management.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-blue-600/20'} focus:outline-none focus:ring-2 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400`}
                                        placeholder="Enter Your Name"
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-blue-600/20'} focus:outline-none focus:ring-2 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400`}
                                        placeholder="Enter Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400"
                                        placeholder="+1 Phone Number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400 resize-y min-h-[120px]"
                                        placeholder="Enter your message or additional details..."
                                    ></textarea>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-[13px] font-bold uppercase tracking-wider text-slate-500">Airbnb / VRBO Listing URL <span className="text-red-500">*</span></label>
                                        <span className="text-[11px] text-blue-500 uppercase tracking-wide font-bold bg-blue-50 px-2 py-1 rounded-md">verified live</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="listingUrl"
                                        value={formData.listingUrl}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl border ${errors.listingUrl ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-blue-600/20'} focus:outline-none focus:ring-2 focus:border-blue-600 transition-colors bg-slate-50/50 text-slate-900 font-medium placeholder-slate-400`}
                                        placeholder="e.g., 12345678 & paste your listing link"
                                    />
                                    {errors.listingUrl && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.listingUrl}</p>}
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-semibold text-center">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-[16px] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            <>
                                                Submit Details
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-[13px] text-slate-500 font-medium pt-2 flex items-center justify-center gap-2">
                                    <ShieldCheck size={14} className="text-emerald-500" /> We'll only use this to review your listing and follow up — no spam.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AuditForm;
