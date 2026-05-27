import React from 'react';

const Blogs = ({ data }) => {
    if (!data) return null;

    const { seo, article } = data;

    return (
        <div className="w-full bg-[#f3f3f3] px-5 py-35">
            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">

                {/* Title */}
                <p className="text-[18px] text-black text-start">
                    <span className="font-bold">Title - </span>
                    {seo?.title}
                </p>

                {/* Meta Description */}
                <p className="text-[18px] text-black mt-6 leading-[32px]">
                    <span className="font-bold">Meta description - </span>
                    {seo?.metaDescription}
                </p>

                {/* Heading */}
                <h1 className="text-[58px] leading-[70px] text-center font-normal text-black mt-16 max-w-[1100px]">
                    {article?.heading}
                </h1>

                {/* Image */}
                <img
                    src={article?.image}
                    alt={article?.heading}
                    className="w-full h-100 mt-5 object-contain"
                />

                {/* Paragraphs */}
                <div className="mt-8 space-y-8">
                    {article?.paragraphs?.map((para, index) => (
                        <p
                            key={index}
                            className="text-[20px] leading-[38px] text-black"
                            dangerouslySetInnerHTML={{ __html: para }}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blogs;