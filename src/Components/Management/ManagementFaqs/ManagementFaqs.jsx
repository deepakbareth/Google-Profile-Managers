import React from 'react';
import FaqCard from './FaqCard';

const ManagementFaqs = () => {
  // EXACT text from the screenshot
  const faqsData = [
    {
      question: "Is there a contract?",
      answer: <>No! We work month-to-month, so there are no contracts or long-term commitments. However, many of our customers have worked with the Google Profile Managers for years!</>
    },
    {
      question: "How much does this service cost every month?",
      answer: <>We charge $250 per month, per location. We do offer special pricing for those who have more than one location under management. <a href="contact-us" className="text-blue-500 hover:text-blue-700 transition-colors">Please contact us for more information.</a></>
    },
    {
      question: "How much does it cost if I have more than one listing?",
      answer: <>We offer a sliding scale discount for more than one location, up to 50% off. We also offer special discounts for those with listings that may not need unique posts each week. <a href="contact-us" className="text-blue-500 hover:text-blue-700 transition-colors">Please contact us for more information.</a></>
    },
    {
      question: "Who creates the content and images for posts?",
      answer: <>We do! We have a US-based team of designers and writers who collaborate to create each Post. Of course, we appreciate any insights, images, videos, or promotions you might have, but the Google Profile Managers expert team of account managers, designers, and writers can happily deliver without any resources.</>
    },
    {
      question: "Do I get to approve or request edits on posts??", // Exact double question mark from screenshot
      answer: <>Yes, of course you do. After your first month, you will get Posts sent to you for approval before the upcoming month or billing period. We will then make any requested edits from your feedback. Once approved, we will schedule all of your Posts to roll out throughout the month.</>
    },
    {
      question: "How do you help me get more Google reviews?",
      answer: <>We provide you with a Google Profile Managers tool that makes it easy for you to ask for Google reviews via text or email. This is the most effective way to get customers to leave five-star reviews on Google. Plus, you don't have to awkwardly ask in person.</>
    }
  ];

  return (
    <section id="FAQs" className="scroll-mt-10 w-full py-20 lg:py-28 bg-[#f4f7fa] font-sans">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
           <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            Google Business Profile Management Service FAQs
          </h2>
        </div>

        {/* 2-Column Grid for FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {faqsData.map((faq, index) => (
            <FaqCard 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManagementFaqs;