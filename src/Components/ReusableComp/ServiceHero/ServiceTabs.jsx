import React from 'react';

const ServiceTabs = () => {
  const tabs = ['Overview', 'how-it-works', 'FAQs'];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex justify-between items-center bg-slate-50/80 backdrop-blur-md rounded-2xl p-2 mt-8 shadow-sm border border-slate-100">
      {tabs.map((tab, idx) => (
        <a 
          href={`#${tab}`}
          key={idx}
          onClick={(e) => handleScroll(e, tab)}
          className="flex-1 py-3 px-2 sm:px-4 rounded-xl text-center font-bold text-[12px] md:text-[15px] sm:text-base transition-all duration-300 hover:text-blue-600 hover:bg-slate-100/50"
        >
          {tab.replace('-', ' ').toUpperCase()} {/* Formats 'how-it-works' back to 'HOW IT WORKS' for the UI */}
        </a>
      ))}
    </div>
  );
};

export default ServiceTabs;