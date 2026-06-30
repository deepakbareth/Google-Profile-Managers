import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: "How long does it take to rank on Google Maps?",
      answer: "Typically, it takes 30–90 days to see significant movement. The exact timeframe depends on your current ranking, industry competition, and local market density."
    },
    {
      question: "Can you recover a suspended Google Business profile?",
      answer: "Yes. We have extensive experience navigating Google's support systems to reinstate suspended profiles and get your business back online safely."
    },
    {
      question: "Do you post weekly updates to the profile?",
      answer: "Yes. Our Growth and Premium plans include highly optimized weekly posts (photos, updates, and offers) to keep your profile active and engaging to searchers."
    },
    {
      question: "Do you manage and reply to customer reviews?",
      answer: "Yes. We actively monitor and professionally reply to all your incoming customer reviews, which acts as a major trust signal for both customers and Google's algorithm."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-5">
            <span className="px-4 py-1.5 bg-blue-100/80 text-blue-700 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
              <MessageCircleQuestion size={16} />
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden self-start ${isOpen
                  ? 'border-blue-200 bg-blue-50/30 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[17px] sm:text-lg font-bold pr-6 ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 cursor-pointer rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-[17px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
