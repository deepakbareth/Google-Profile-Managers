import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsList } from '../Data/BlogsData';
import BlogCard from '../Components/Blogs/BlogCard';
import { ChevronRight, ArrowLeft, AlertCircle, Home as HomeIcon } from 'lucide-react';

function BlogPostDetailPage() {
    const { slug } = useParams();

    // Find matching blog post by slug
    const blog = blogsList.find((item) => item.slug === slug);

    // Scroll to top on page mount or slug change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Handle invalid/missing blog post slug
    if (!blog) {
        return (
            <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 pt-28 pb-20 font-sans">
                <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center max-w-lg w-full">
                    <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <AlertCircle size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-3">Blog Post Not Found</h1>
                    <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                        The article you are looking for might have been moved, renamed, or is currently under maintenance.
                    </p>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:bg-blue-800 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to All Blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Filter out current blog for related posts
    const relatedBlogs = blogsList.filter((item) => item.slug !== slug);

    const ArticleComponent = blog.component;

    return (
        <div className="min-h-screen bg-white font-sans pt-24 sm:pt-28 pb-16">

            {/* Enhanced Sleek Breadcrumb & Action Header */}
            <div className="bg-slate-50/80 backdrop-blur-md border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">

                    {/* Left: Breadcrumb Trail */}
                    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 hover:text-blue-700 transition-colors py-1"
                        >
                            <HomeIcon size={14} className="text-slate-500" />
                            <span>Home</span>
                        </Link>

                        <ChevronRight size={14} className="text-slate-400" />

                        <Link
                            to="/blogs"
                            className="hover:text-blue-700 transition-colors py-1"
                        >
                            Blogs
                        </Link>

                        <ChevronRight size={14} className="text-slate-400" />


                        <span className="text-slate-900 font-bold truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                            {blog.title}
                        </span>
                    </nav>

                    {/* Right: Quick Back Button */}


                </div>
            </div>

            {/* Main Article Content */}
            <main>
                {ArticleComponent ? (
                    <ArticleComponent />
                ) : (
                    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{blog.title}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">{blog.excerpt}</p>
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl text-blue-800 font-semibold">
                            Full article content for this post is being updated. Check back soon!
                        </div>
                    </div>
                )}
            </main>

            {/* Related Articles Section
            {relatedBlogs.length > 0 && (
                <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 mt-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Related Articles</h3>
                                <p className="text-slate-600 text-sm mt-1 font-medium">More guides & local SEO tips</p>
                            </div>
                            <Link
                                to="/blogs"
                                className="text-sm font-bold text-blue-700 hover:underline"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedBlogs.map((item) => (
                                <BlogCard key={item.id} blog={item} />
                            ))}
                        </div>
                    </div>
                </section>
            )} */}

        </div>
    );
}

export default BlogPostDetailPage;
