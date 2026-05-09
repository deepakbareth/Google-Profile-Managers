import React from 'react';

const ServicesIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="pt-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8 text-center">
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