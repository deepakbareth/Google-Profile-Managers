import React from 'react';

const ServicesIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a6b8f] text-center mb-10">
                    {data.Heading}
                </h2>

                {/* Paragraphs Container */}
                <div className="space-y-6 text-slate-700 text-lg md:text-[19px] text-center leading-relaxed">
                    {data.paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesIntro;