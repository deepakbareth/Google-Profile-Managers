import React from 'react';

const Skeleton = () => {
    return (
        // Main container with max-width and centering
        <div className="max-w-7xl mx-auto w-full p-6 md:p-10 flex flex-col gap-8 min-h-[60vh]">

            {/* Title / Header Area */}
            <div className="h-10 md:h-14 bg-slate-200 rounded-lg w-2/4 md:w-1/3 animate-pulse"></div>

            {/* Hero / Big Banner Area */}
            <div className="h-64 md:h-96 w-full bg-slate-200 rounded-2xl animate-pulse"></div>

            {/* Paragraph / Text Lines */}
            <div className="space-y-4 w-full mt-4">
                <div className="h-4 md:h-5 bg-slate-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 md:h-5 bg-slate-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 md:h-5 bg-slate-200 rounded-md w-5/6 animate-pulse"></div>
                <div className="h-4 md:h-5 bg-slate-200 rounded-md w-2/3 animate-pulse"></div>
            </div>

        </div>
    );
};

export default Skeleton;