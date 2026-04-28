import React from 'react';

const ManagementTabs = () => {
  const tabs = ['Overview', 'how-it-works', 'FAQs'];

  // This function intercepts the click and makes it smooth
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Stops the instant snap
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
          onClick={(e) => handleScroll(e, tab)} // Added the smooth scroll trigger here
          className={`flex-1 py-3 px-2 sm:px-4 rounded-xl text-center font-bold text-[12px] md:text-[15px] sm:text-base transition-all duration-300 hover:text-blue-600 hover:bg-slate-100/50`}
        >
          {tab.toLocaleUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default ManagementTabs;