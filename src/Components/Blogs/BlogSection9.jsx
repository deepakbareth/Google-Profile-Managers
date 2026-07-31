import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs6.png'; // Fallback to blogs.png or blogs6.png if created later

const BlogSection9 = () => {
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
        <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-5">
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
                    top: 10px;
                    width: 6px;
                    height: 6px;
                    background: #000000;
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
                        <div className="badge">Local SEO Services</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Local SEO Services for Small Businesses | GBP SEO
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Local SEO Services for Small Businesses"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a small business, you already know how much word-of-mouth matters. But these days, before someone calls you, visits your shop, or asks for a quote, they Google you first. They search on their phone while standing outside a restaurant, sitting in traffic, or scrolling on the couch at night. And if your business doesn't show up when they search, you've basically lost that customer to a competitor who did.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is exactly why <strong className="text-slate-900">Local SEO services for small businesses</strong> have become so important over the past few years. It's not a "nice to have" anymore — it's how people find businesses like yours in 2026.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile Managers</Link>, this is all we focus on. We help small businesses show up on Google Maps, look professional the moment someone finds them, and turn that visibility into actual phone calls, direction requests, and walk-ins. That's the whole point of good <strong className="text-slate-900">Local SEO services for small businesses</strong> — not just rankings for the sake of rankings, but real enquiries landing in your inbox and on your phone.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Do Google Maps SEO Services Actually Do?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Let's break this down simply. When someone types "plumber near me," "best dentist near me," or "digital marketing agency in my area" into Google, they're usually shown a map with three highlighted businesses — what's known as the local map pack — along with your name, address, phone number, opening hours, reviews, and photos.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Getting into that map pack (or at least showing up higher when someone scrolls further) is what Google Maps SEO services are built around. Google decides who shows up based on a few things: how relevant your profile is to the search, how close you are to the person searching, and how well-known or "trusted" your business appears based on reviews, links, and activity.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That third part — prominence — is where most small businesses fall behind. Not because they're doing anything wrong, but because they've never had the time to properly manage it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why This Matters More Than Ever for Small Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's the honest truth: most people don't scroll past the first few results. If your business isn't showing up in that initial map pack or the top of local search, you're invisible to a huge chunk of potential customers — even if you're the best business in your area.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A properly optimised Google Business Profile can help you:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Show up more often in local searches</div>
                            <div className="list-item text-slate-700 text-lg">Get more clicks to your website</div>
                            <div className="list-item text-slate-700 text-lg">Receive more phone calls directly from your listing</div>
                            <div className="list-item text-slate-700 text-lg">Get more "get directions" requests</div>
                            <div className="list-item text-slate-700 text-lg">Build trust before a customer even contacts you</div>
                            <div className="list-item text-slate-700 text-lg">Show off your work through photos and posts</div>
                            <div className="list-item text-slate-700 text-lg">Collect reviews that keep bringing in new customers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            But here's the catch—just creating a Google Business Profile and leaving it alone isn't enough. Profiles that sit untouched for months tend to lose visibility over time. This is exactly why so many small business owners eventually look for <strong className="text-slate-900">Local SEO services for small businesses</strong> that actually manage and update listings on an ongoing basis, rather than a one-time setup and forget approach.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">Google Business Profile Optimisation</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Your Google Business Profile Affects Your Maps Ranking
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is basically your digital shopfront. It's often the very first impression a potential customer gets of your business, even before they visit your website.
                        </p>
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Good <strong className="text-slate-900">Local SEO services for small businesses</strong> typically involve:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Choosing the right primary and secondary business categories</div>
                            <div className="list-item text-slate-700 text-lg">Writing a clear, natural business description</div>
                            <div className="list-item text-slate-700 text-lg">Keeping services and products updated</div>
                            <div className="list-item text-slate-700 text-lg">Adding and refreshing photos regularly</div>
                            <div className="list-item text-slate-700 text-lg">Making sure your local keywords are used naturally, not stuffed in awkwardly</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Your profile should answer the obvious questions a customer has in seconds: What do you do? Where are you located? Are you open right now? How do I contact you? And — maybe most importantly — should I trust you?
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your phone number is wrong, your hours are outdated, or your address doesn't match what's on your website, that's not just annoying — it actively hurts your visibility. Google notices these inconsistencies, and so do customers.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Core Pieces of a Solid Local SEO Strategy
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Getting Your Google Business Profile Right</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                This is step one, always. A complete, accurate, well-categorised profile gives Google (and customers) the clearest possible picture of your business. That means filling in your business name, address or service area, phone number, website, hours, services, products, and photos — properly, not half-heartedly.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Researching the Right Local Keywords</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Instead of chasing broad, competitive terms, small businesses do much better targeting specific, local phrases — things like "emergency plumber in Manchester" or "hair salon near Birmingham". These are the searches real people type when they're ready to actually book or buy, not just browse. This is one of the biggest reasons <strong className="text-slate-900">Local SEO services for small businesses</strong> focus so heavily on local intent rather than generic national keywords.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Keeping Your Business Information Consistent</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Your name, address, and phone number need to match everywhere — your website, your Google profile, and any directories you're listed on. Even small inconsistencies, like a slightly different phone number on one listing, can confuse search engines about which information to trust.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">4. Managing Reviews Properly</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Reviews carry a surprising amount of weight. Most people check them before ever picking up the phone. Encouraging genuine customers to leave honest reviews — and actually responding to them, good or bad — shows both Google and future customers that you're active and that you care.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">5. Using Photos and Videos That Actually Show Your Business</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                A profile with real, recent photos feels far more trustworthy than one with a single blurry logo from years ago. Restaurants should show their food and interior. Builders should show finished projects. Salons should show their space and their work. It doesn't need to be professional-grade photography — it just needs to be current and honest.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO Is Bigger Than Just Your Google Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            While your Google Business Profile is central to all of this, a genuinely complete strategy usually stretches further — into your website's own SEO, local citations across directories, location-specific content, and ongoing reputation management.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            This is really the full picture of what <strong className="text-slate-900">Local SEO services for small businesses</strong> should cover:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Google Business Profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">On-site website SEO</div>
                            <div className="list-item text-slate-700 text-lg">Citation and directory management</div>
                            <div className="list-item text-slate-700 text-lg">Local content creation</div>
                            <div className="list-item text-slate-700 text-lg">Review monitoring and response</div>
                            <div className="list-item text-slate-700 text-lg">Competitor research</div>
                            <div className="list-item text-slate-700 text-lg">Technical SEO fixes</div>
                            <div className="list-item text-slate-700 text-lg">Local link building</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            When these pieces work together instead of in isolation, your local visibility becomes far more stable — you're not relying on just one channel. Effective <Link to="/management" className="link-hover">Google Business Profile Management</Link> helps keep your business visible in local search while strengthening your overall online presence.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Ongoing Management Beats a One-Time Setup
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's something a lot of business owners don't realise until later: your Google Business Profile isn't a "set it and forget it" tool. Profiles need regular attention — new photos, updated services, fresh posts, and monitored reviews — to stay active in Google's eyes.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Ongoing Google Business Profile management often includes publishing updates about new services, seasonal offers, recent projects, or company news. This kind of regular activity signals to Google that your business is alive and active, which tends to help your visibility over time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Common Mistakes That Quietly Hurt Local Rankings
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            We see the same handful of mistakes over and over:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Leaving sections of the profile blank</strong>, which makes the listing look unfinished</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Wrong contact details or hours</strong>, which damages trust fast</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Ignoring reviews</strong>, which makes a business look inactive</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Keyword stuffing</strong>, cramming the same phrase in unnaturally until it reads badly</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Mismatched business details</strong> across different websites and directories</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Long stretches with no updates</strong>, leaving customers with outdated information</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of these are complicated to fix — they just require someone paying attention, which is often the missing piece for busy small business owners.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Small Businesses Choose to Bring in Help
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most business owners get why local SEO matters. What they usually don't have is the time to sit down and manage categories, keywords, reviews, and photos week after week on top of actually running their business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is the real value behind professional <strong className="text-slate-900">Local SEO services for small businesses</strong> — someone else handles the audits, the keyword research, the profile updates, the review strategy, and the ongoing monitoring, so you can stay focused on your actual work while your visibility improves in the background.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Google Business Profile Managers Can Help Your Business
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Business Profile Managers</strong>, we work specifically with small businesses that want to be found by the right people, at the right moment, without having to become SEO experts themselves.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Our approach typically includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">A full review of your existing Google Business Profile</div>
                            <div className="list-item text-slate-700 text-lg">Identifying quick wins and bigger opportunities</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword research targeted to your area and industry</div>
                            <div className="list-item text-slate-700 text-lg">Cleaning up and improving your profile information</div>
                            <div className="list-item text-slate-700 text-lg">Optimising categories and services</div>
                            <div className="list-item text-slate-700 text-lg">Supporting a genuine, ongoing review strategy</div>
                            <div className="list-item text-slate-700 text-lg">Regular monitoring so your visibility keeps improving, not stalling</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Whether you're starting from scratch or trying to fix a profile that's underperforming, the goal is always the same — make it easier for the right customers to find you, right when they're searching.
                        </p>

                        <div className="highlight-box mt-8">
                            <p className="text-lg text-slate-900 font-bold mb-2">Final Thoughts</p>
                            <p className="text-slate-700">
                                Local visibility isn't a bonus anymore — it's often the deciding factor in whether a customer chooses you or the business next door. A strong presence on Google Maps puts you in front of people who are already looking for exactly what you offer, at the exact moment they're ready to act. That's the real value of <strong className="text-slate-900">Local SEO services for small businesses</strong> — not just better rankings on paper, but more calls, more direction requests, and more customers walking through your door.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection9;
