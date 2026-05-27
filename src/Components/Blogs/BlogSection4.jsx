import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs2.png';
import articleHeroImg3 from '../../assets/blogs/blogs3.png';

const BlogSection4 = () => {
    const [animateOnScroll, setAnimateOnScroll] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('[data-animate]');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    el.classList.add('animate-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-20">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Playfair+Display:wght@700;800&display=swap');

                * {
                    font-family: 'Sora', sans-serif;
                }

                h1, h2 {
                    font-family: 'Playfair Display', serif;
                }

                .animate-in {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .gradient-accent {
                    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                }

                .section-divider {
                    height: 2px;
                    background: linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.3) 50%, rgba(37, 99, 235, 0.1) 100%);
                }

                .image-frame {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                }

                .image-frame::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    // background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, transparent 100%);
                    pointer-events: none;
                    z-index: 1;
                }

                .image-frame img {
                    width: 100%;
                    height: auto;
                    max-height: 450px;
                    object-fit: contain;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
                }

                .image-frame:hover img {
                    transform: scale(1.03);
                }

                .list-item {
                    position: relative;
                    padding-left: 28px;
                    margin-bottom: 16px;
                }

                .list-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 6px;
                    width: 8px;
                    height: 8px;
                    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                    border-radius: 50%;
                }

                .highlight-box {
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(29, 78, 216, 0.03) 100%);
                    border-left: 4px solid #2563eb;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 24px 0;
                }

                .link-hover {
                    position: relative;
                    color: #2563eb;
                    font-weight: 600;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .link-hover::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #2563eb;
                    transition: width 0.3s ease;
                }

                .link-hover:hover {
                    color: #1e40af;
                }

                .link-hover:hover::after {
                    width: 100%;
                }

                .section-container {
                    opacity: 0;
                    animation-fill-mode: forwards;
                }

                [data-animate] {
                    opacity: 0;
                }

                .badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                    color: white;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 16px;
                }

                @media (max-width: 640px) {
                    h1 {
                        font-size: 1.75rem !important;
                        line-height: 1.2;
                    }

                    h2 {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">

                {/* Section 1 - Hero */}
                <div className="section-container mb-20" data-animate>
                    <div className="mb-8">
                        <div className="badge">Local SEO Excellence</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Improve Rankings With Google Business Profile Management Services
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            A properly managed Google Business Profile is essential for local businesses seeking visibility in today's digital landscape.
                        </p>
                    </div>

                    <div className="image-frame mt-10 ">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Management"
                            className='object-contain'
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you've ever searched "best pizza near me" or "plumber open now", you already understand why showing up on Google matters. That search habit — grabbing a phone and looking for the nearest option — is what your potential customers do every single day. And if your business isn't showing up, or showing up with wrong hours and no photos, someone else is getting that call.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is the gap that Google Business Profile management services are built to close.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        At Google Profile Managers, we work with local business owners who are great at what they do but don't have time to babysit a Google listing. Our job is to make sure that when someone searches for your type of business, your profile actually earns their click.
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What a Google Business Profile Actually Does for You
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think of your Google Business Profile as the front door to your business — except it's visible to anyone searching in your area, 24/7. It shows your address, phone number, hours, photos, reviews, and even recent posts. Done right, it builds an instant first impression before a customer ever visits your website.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Done poorly — or left untouched after the initial setup — it can quietly hurt you. Outdated hours frustrate customers. Missing photos make businesses look abandoned. Unanswered reviews send a message that nobody's paying attention.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                Read more – <Link to="/setup" className="link-hover">Google Business Profile Setup</Link>
                            </p>
                        </div>

                        <p className="text-lg text-slate-700 font-semibold mb-8">
                            A few things a properly managed profile can do:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">
                                Push your business into Google's local pack (the top three results that appear before everything else)
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Drive more calls and direction requests directly from search
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Build trust with customers who are comparing you to competitors
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Improve the volume and quality of your reviews over time
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Increase foot traffic and website visits without spending on ads
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this happens automatically. It takes consistent, knowledgeable upkeep — which is exactly where professional Google Business Profile management services come in.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <div className="image-frame mb-10 ">
                        <img
                            src={articleHeroImg3}
                            alt="What Profile Management Actually Involves"
                        />
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What "Profile Management" Actually Involves
                    </h2>

                    <p className="text-lg text-slate-700 leading-relaxed mb-10">
                        A lot of businesses assume that once they've set up a profile, the work is done. It isn't. Google rewards profiles that stay active, accurate, and engaging. Here's what ongoing management actually looks like in practice:
                    </p>

                    <div className="space-y-6">
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Profile Setup and Verification:</strong> Getting this step right from the beginning prevents problems down the road. Wrong categories, duplicate listings, and unverified profiles all chip away at your local visibility.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Business Information Accuracy:</strong> Your name, address, phone number, and hours need to be consistent not just on Google but across every directory where your business appears. Even small discrepancies can confuse Google's algorithm and lower your rankings.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Keyword-Rich Descriptions:</strong> The words you use in your business description, posts, and service listings affect what searches you show up for. Strategic placement of relevant terms — including naturally integrating <strong>Google Business Profile management services</strong> language where appropriate — helps Google understand what your business offers.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Regular Posts and Updates:</strong> Google lets you publish posts directly to your profile — promotions, events, new services, and seasonal hours. Most businesses never use this feature. The ones that do have a clear edge over competitors whose profiles look static.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Photo Management:</strong> Profiles with photos get significantly more clicks than those without. High-quality images of your team, location, work, or products make a profile feel real and trustworthy. This matters more than most business owners realise.
                        </div>
                    </div>

                    <div className="mt-10 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Review Monitoring and Responses Reviews are one of the strongest local ranking signals Google uses. Getting more of them, and responding to them professionally, is something that requires consistent attention. Ignoring a negative review or leaving questions unanswered damages credibility fast.
                        </p>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Analytics Review Google provides data on how many people viewed your profile, what they searched to find it, how many clicked for directions, and more. Reviewing this regularly tells you what's working and where there's room to improve.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                Read more – <Link to="/optimization" className="link-hover">Google Business Profile Optimization Service</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Most Businesses Don't Do This Themselves
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Honestly? It's not complicated, but it is time-consuming. Between running a business, managing staff, serving customers, and handling everything else on the to-do list, most owners just don't have the bandwidth to stay on top of it.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            And Google doesn't make it easier. The platform changes regularly. Features get added. Algorithm updates shift what matters for rankings. Keeping up requires attention that most business owners — reasonably — can't spare.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's the real reason professional Google Business Profile management services exist. Not because the work is mysterious, but because doing it consistently and correctly takes time and expertise that's better spent by someone who focuses on it full-time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Who Benefits Most from Profile Management?
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-10">
                        Short answer: almost any local business. But a few industries see particularly clear results:
                    </p>

                    <div className="space-y-4">
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Restaurants and Food Businesses:</strong> People searching for food are ready to act immediately. A complete, photo-rich profile with strong reviews can be the difference between a full table and an empty one on a slow night.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Medical and Dental Clinics:</strong> Patients choose providers based on trust. A well-maintained profile with accurate information and genuine reviews significantly affects whether a new patient books with you or scrolls past.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Home Service Businesses:</strong> Electricians, plumbers, HVAC technicians, and cleaners are almost entirely dependent on local search for new leads. This is one area where a strong profile pays off fast.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Retail store profiles:</strong> can feature products, hours, special offers, and events — giving local shoppers a reason to come in rather than order online.
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Law Firms and Professional Services:</strong> Credibility is everything in these industries. A thorough, active profile with professional photos and thoughtful review responses builds the kind of authority that converts searches into consultations.
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Common Mistakes That Quietly Kill Local Visibility
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-10">
                        Most businesses aren't failing at Google Business Profiles because they're doing something dramatically wrong. It's usually a handful of smaller issues that compound over time:
                    </p>

                    <div className="space-y-3">
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Leaving sections incomplete —</strong> Google factors in profile completeness when ranking results
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Never posting updates –</strong> An inactive profile looks like an inactive business
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Ignoring reviews —</strong> Both positive and negative ones deserve responses
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Using low-resolution or irrelevant photos —</strong> Stock photos and blurry phone shots don't build trust
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Wrong or inconsistent categories —</strong> This affects which searches your business shows up for
                        </div>
                        <div className="list-item text-slate-700 text-lg">
                            <strong className="text-slate-900">Outdated hours —</strong> Nothing frustrates a customer more than showing up when you're closed
                        </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mt-10">
                        These are fixable problems. But fixing them requires someone to actually look at the profile regularly — which is exactly what most businesses skip.
                    </p>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Local SEO and Your Profile Connect
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile doesn't work in isolation. It's one piece of a broader local SEO picture that includes your website, backlinks, local directory listings, and more. But it's a heavy-hitting piece.
                        </p>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google uses signals from your profile to determine relevance (does this business match what the user searched?), distance (how close is it?), and prominence (how well-known and trusted is this business online?). Strong <strong>Google Business Profile management services</strong> address all three of these areas directly.
                        </p>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Pair a fully optimized profile with a solid website and consistent local citations, and you've built a local search presence that's genuinely hard for competitors to beat.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <div className="image-frame mb-10 ">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                            alt="What We Do at Google Profile Managers"
                        />
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What We Do at Google Profile Managers
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong>Google Business Profile management services</strong>, we handle every piece of this for you. Our process starts with a full audit of your current profile — what's working, what's missing, and what's actively hurting your visibility.
                        </p>

                        <p className="text-lg text-slate-700 font-semibold mb-6">
                            From there, we handle the following:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">
                                Complete profile optimization, including descriptions, categories, and attributes
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Ongoing post creation and scheduling
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Photo uploads and management
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Review monitoring and response drafting
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Monthly reporting on performance and local search visibility
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Keeping up with Google's platform changes so you don't have to
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            We don't do cookie-cutter strategies. Every business has a different competitive landscape, different customers, and different goals. Our approach reflects that.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 - CTA */}
                <div className="section-container mb-0" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Bottom Line
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local search isn't slowing down. More people are searching on mobile, using voice search, and making decisions faster than ever. If your Google Business Profile isn't accurate, active, and optimised, you're handing customers to competitors who are.
                        </p>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Investing in <strong>Google Business Profile management services</strong> isn't about gaming an algorithm. It's about showing up professionally when potential customers are actively looking for what you offer. That's a straightforward win for any local business.
                        </p>

                        <div className="highlight-box mt-8">
                            <p className="text-lg text-slate-900 leading-relaxed">
                                If you want to stop leaving local visibility on the table, <strong>Google Profile Managers</strong> is ready to help. Reach out and let's talk about what's possible for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection4;