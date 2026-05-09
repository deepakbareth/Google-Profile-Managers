import React from 'react';
import CaseStudyMetrics from './CaseStudyMetrics'; // Import the reusable component we just made

const CaseStudiesSection = ({ data }) => {
    const studiesData = Array.isArray(data) ? data : data?.caseStudiesData || [];
    return (
        <section className="bg-slate-50 py-10">
            <div className="container mx-auto px-4">



                {/* Map through the data array */}
                <div className="space-y-12 lg:space-y-0">
                    {studiesData.map((study, index) => (
                        <CaseStudyMetrics
                            key={index}
                            data={study}
                            // This is the magic part: it flips the layout for every odd-numbered item!
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CaseStudiesSection;