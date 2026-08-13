import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs15.png'; // Using blogs15.png as placeholder

const BlogSection18 = () => {
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

                h1, h2, h3, h4 {
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
                        <div className="badge">Local Search SEO</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Local Search Optimization Services | Grow Local Visibility
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Boost your local visibility with expert local search optimization services designed to improve rankings, attract customers, and grow your business.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Local Search Optimization Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most people don't scroll through pages of search results anymore. They type "plumber near me" or "best coffee shop in [city]" and pick from whatever pops up first. If your business isn't showing up in that first handful of results, you're losing customers to competitors who are — even if your product or service is better.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's where <strong className="text-slate-900">local search optimization services</strong> come in. At their core, these services help your business show up when nearby customers are actively searching for what you sell. It's not about chasing generic rankings for broad, national keywords. It's about being visible to the person who's three streets away and ready to buy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a restaurant, a dental clinic, a plumbing company, a law firm, or any business that depends on local foot traffic or local enquiries, this guide will walk you through what local SEO actually involves and why it matters so much right now.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does Local Search Optimization Actually Mean?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            In simple terms, local search optimisation is the process of making it easier for search engines — and for real people — to find your business when they search with a location in mind. <Link to="/services" className="link-hover">Local SEO services for small businesses</Link> help improve your online visibility, making it easier for nearby customers to discover your products or services when they are ready to buy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about how people actually search these days:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">"Web design agency near me"</div>
                            <div className="list-item text-slate-700 text-lg">"Digital marketing company in London"</div>
                            <div className="list-item text-slate-700 text-lg">"Emergency plumber in Manchester"</div>
                            <div className="list-item text-slate-700 text-lg">"Best pizza place near me"</div>
                            <div className="list-item text-slate-700 text-lg">"Local SEO agency in Birmingham"</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Each of these searches has intent baked right in. The person isn't browsing casually — they want a business that can help them <em>right now</em>, in <em>their</em> area. Good <strong className="text-slate-900">local search optimization services</strong> work by strengthening every signal that tells search engines where you're located, what you do, and why you're trustworthy: your business listings, your website content, your reviews, and your overall online reputation.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Bother With Local SEO At All?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's the honest truth: you could have a beautifully designed website and still struggle to get customers if your local visibility is weak. A polished site means nothing if nobody nearby can find it.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Investing properly in local SEO tends to pay off in a few clear ways:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">More visibility in local search results and map listings</div>
                            <div className="list-item text-slate-700 text-lg">More website traffic from people who are genuinely nearby</div>
                            <div className="list-item text-slate-700 text-lg">More phone calls and enquiries from qualified leads</div>
                            <div className="list-item text-slate-700 text-lg">A stronger, more complete Google Business Profile</div>
                            <div className="list-item text-slate-700 text-lg">Increased trust from potential customers browsing your reviews</div>
                            <div className="list-item text-slate-700 text-lg">More foot traffic to your physical location</div>
                            <div className="list-item text-slate-700 text-lg">A stronger overall online reputation in your area</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            This is exactly why <strong className="text-slate-900">local search optimization services</strong> exist — to tie all of these pieces together instead of leaving them scattered and inconsistent.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Google Business Profile Is the Foundation
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If there's one thing you get right, make it this one. Your <Link to="/" className="link-hover">Google Business Profile</Link> (GBP) is often the very first thing a potential customer sees about your business — sometimes before they ever click through to your website.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A profile that's fully filled out and kept up to date can answer most of a customer's questions before they even pick up the phone. Make sure yours includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Accurate business name, address, and phone number</div>
                            <div className="list-item text-slate-700 text-lg">The right primary category, plus relevant secondary categories</div>
                            <div className="list-item text-slate-700 text-lg">A complete list of services you actually offer</div>
                            <div className="list-item text-slate-700 text-lg">Up-to-date opening hours (including holidays)</div>
                            <div className="list-item text-slate-700 text-lg">Real, high-quality photos of your business</div>
                            <div className="list-item text-slate-700 text-lg">A clear, well-written business description</div>
                            <div className="list-item text-slate-700 text-lg">Regular posts or updates, when relevant</div>
                            <div className="list-item text-slate-700 text-lg">Genuine customer reviews</div>
                            <div className="list-item text-slate-700 text-lg">A working link to your website</div>
                            <div className="list-item text-slate-700 text-lg">Contact details that match everywhere else online</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            This is a big reason businesses reach out for professional <strong className="text-slate-900">local search optimization services</strong> — getting a Google Business Profile fully optimised takes more attention to detail than most people expect.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">GMB profile optimisation</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Getting Local Keywords Right
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keywords still matter; they've just gotten smarter. Instead of chasing something broad like "web development", it's far more effective to target combinations that reflect how real people search in your area:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">"Web development company in Durham"</div>
                            <div className="list-item text-slate-700 text-lg">"Custom website design in Newcastle"</div>
                            <div className="list-item text-slate-700 text-lg">"Local web designer in Manchester"</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Solid local keyword research uncovers these specific combinations of service and location, which can then be woven naturally into your page titles, headings, meta descriptions, and Google Business Profile content. The key word there is <em>'naturally'</em> — search engines have gotten very good at spotting keyword stuffing, and honestly, so have readers. Write for people first.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Website Still Carries a Lot of Weight
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A website isn't optional in a local SEO strategy — it's one of the pillars. It needs to clearly explain what you do, where you operate, and how someone can get in touch.
                        </p>
                        
                        <div className="space-y-6 mt-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Location pages</strong>. If you serve more than one area, give each one its own page with genuinely useful, area-specific information — not a copy-pasted template with the city name swapped out.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Service pages</strong>. Every core service deserves its own clear page: what it is, who it's for, and where you offer it.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Contact details</strong>. Your name, address, and phone number should be easy to spot and consistent everywhere they appear.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Mobile-friendliness</strong>. A huge share of local searches happen on phones. If your site is clunky on mobile, you're losing people before they even see what you offer.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Page speed</strong>. Slow-loading pages frustrate visitors and hurt your rankings. Neither is good for business.
                            </p>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-6">
                            All of this website work is a core piece of what proper <strong className="text-slate-900">local search optimization services</strong> actually deliver — it's rarely just about the Google listing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Citations Need to Match Everywhere
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A "citation" is simply any mention of your business info across the web — directories, review sites, industry platforms, and so on. The important fields are usually your name, address, phone number, website, and category.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's the problem: if your phone number on Yelp doesn't match what's on your website, or your address is slightly different across directories, it creates confusion. Search engines read that inconsistency as a red flag, and customers might just give up and call someone else instead. Cleaning up and standardising these citations is unglamorous work, but it makes a real difference.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Really Do Matter
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Before choosing a business, most people check the reviews first. It's practically automatic at this point.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Encourage real customers to leave honest feedback, and take the time to respond to reviews — the good ones and the tough ones alike. A thoughtful reply to a negative review often says more about your business than a dozen five-star ratings.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A solid review strategy helps you:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Build genuine trust with new customers</div>
                            <div className="list-item text-slate-700 text-lg">Show that people are actually satisfied with your work</div>
                            <div className="list-item text-slate-700 text-lg">Strengthen your reputation over time</div>
                            <div className="list-item text-slate-700 text-lg">Give prospective customers useful, real-world information</div>
                            <div className="list-item text-slate-700 text-lg">Keep your audience engaged with your business</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            One important note: never fake reviews or manipulate ratings. It's not just against platform rules — it damages the trust you're trying to build in the first place.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local Content That Actually Helps People
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Publishing content around questions your local customers are already asking is one of the most underused strategies out there. A marketing agency, for example, might write about:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">How to improve your local search visibility</div>
                            <div className="list-item text-slate-700 text-lg">Common local SEO mistakes small businesses make</div>
                            <div className="list-item text-slate-700 text-lg">How a Google Business Profile helps local businesses grow</div>
                            <div className="list-item text-slate-700 text-lg">How customers actually find local services online</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Content like this pulls in visitors who are still researching, which means you're building trust with them before they've even reached out.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Keeping an Eye on Competitors
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Looking at what other local businesses are doing isn't about copying them — it's about spotting gaps. A useful competitor review might look at their targeted keywords, their GBP categories, their review volume and tone, their website structure, and their overall search visibility. More often than not, this kind of research reveals opportunities that would otherwise stay hidden.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Tracking What's Actually Working
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            SEO shouldn't be a "set it and forget it" task. Keep an eye on metrics like:
                        </p>
                        
                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Organic traffic and search impressions</div>
                            <div className="list-item text-slate-700 text-lg">Local search rankings</div>
                            <div className="list-item text-slate-700 text-lg">Google Business Profile clicks and calls</div>
                            <div className="list-item text-slate-700 text-lg">Direction requests</div>
                            <div className="list-item text-slate-700 text-lg">Leads and conversions</div>
                            <div className="list-item text-slate-700 text-lg">Review growth over time</div>
                            <div className="list-item text-slate-700 text-lg">Citation accuracy across platforms</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Regular tracking is what separates a strategy that's actually working from one that just feels like it's working.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO Gives Small Businesses a Real Shot
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Small businesses can't always out-spend larger competitors on marketing — but local SEO levels the playing field in a meaningful way. Instead of competing for impossibly broad national keywords, you're competing for your actual neighbourhood, which is a much smaller and far more winnable game.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A focused approach usually includes optimising your Google Business Profile, building out service and location pages, keeping business information accurate everywhere, collecting honest reviews, publishing useful local content, cleaning up citations, and tracking performance consistently over time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Choosing the Right Partner for Local SEO
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Not every SEO provider operates the same way, and that matters more than people realize. Look for a partner who's transparent about their process, doesn't promise unrealistic overnight results, and genuinely understands Google Business Profile management, local keyword research, citation cleanup, and review strategy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The right <strong className="text-slate-900">local search optimization services</strong> should feel like a long-term partnership focused on sustainable visibility — not a quick trick designed to game the algorithm for a month or two.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 14 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Ready to Get Found Locally?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local search has quietly become one of the biggest ways customers discover businesses like yours. A well-optimised Google Business Profile, a genuinely useful website, consistent business details, honest reviews, and smart local keyword use all work together to build a presence that actually converts.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-slate-900">Google Business Profile Managers</strong>, we help businesses build exactly this kind of presence — through profile optimisation, citation management, content strategy, review support, and ongoing performance tracking. If your business isn't showing up where it should be, investing in dedicated <strong className="text-slate-900">local search optimization services</strong> is one of the most practical steps you can take toward getting found by the customers who are already looking for you.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection18;
