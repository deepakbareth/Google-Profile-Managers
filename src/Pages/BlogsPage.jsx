import React from 'react';
import { blogsList } from '../Data/BlogsData';
import BlogCard from '../Components/Blogs/BlogCard';

function BlogsPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 font-sans pt-28 pb-20">

            {/* Simple & Clean Header */}
            {/* <header className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <span className="text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
                        Resources & Insights
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Google Business Profile Blogs
                    </h1>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                        Practical guides, local SEO tips, and updates to help your business rank higher and attract more local customers.
                    </p>
                </div>
            </header> */}

            {/* Clean Grid Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {blogsList.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </main>

        </div>
    );
}

export default BlogsPage;