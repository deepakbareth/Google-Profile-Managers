import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
    const { slug, title, excerpt, category, image } = blog;

    return (
        <article className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col group h-full">
            
            {/* Image Header */}
            <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                {category && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold rounded-md shadow-sm border border-gray-200/50">
                            {category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow">
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-200 leading-snug mb-3">
                    <Link to={`/blogs/${slug}`}>
                        {title}
                    </Link>
                </h3>
                {/* Excerpt */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal line-clamp-3">
                    {excerpt}
                </p>

                {/* Read Article Action */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                        to={`/blogs/${slug}`}
                        className="inline-flex items-center gap-2 font-bold text-sm text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        Read Article
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>

        </article>
    );
};

export default BlogCard;
