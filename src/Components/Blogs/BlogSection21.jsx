import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs18.png'; // Using blogs18.png as placeholder

const BlogSection21 = () => {
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
                        <div className="badge">GBP Management</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile Management for Small Business
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Grow your local visibility with Google Business Profile management for small businesses. Improve rankings, engagement, and customer reach.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Management for Small Business"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a small business, you already know that a huge chunk of your customers find you online before they ever pick up the phone or walk through your door. And more often than not, that discovery happens through Google. Someone types "plumber near me" or "best coffee shop in [town]", and what shows up in that map pack and those local search results can decide whether they call you or call your competitor.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's exactly why <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> has become such a big deal over the last few years. It's not a nice-to-have anymore — it's often the first impression your business makes.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            But here's the catch: just claiming your profile and filling in a few basic details isn't enough. Google's algorithm, customer expectations, and your own business details are always shifting, which means your profile needs ongoing attention. That's where a proper strategy for <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> comes in.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <Link to="/" className="link-hover">Google Business Profile Managers</Link> we work with small business owners who'd rather spend their time running their business than fiddling with categories, photos, and review responses. Whether you're a local tradesperson, a boutique retailer, a clinic, or a service-based company, keeping your Google presence sharp can genuinely move the needle on calls, foot traffic, and sales.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does Google Business Profile Management Actually Involve?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, managing a Google Business Profile means keeping your listing accurate, current, and genuinely useful to the people looking at it. That includes your business name, address, phone number, website link, hours of operation, service list, categories, and photos.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It also goes beyond the basics — publishing regular updates, replying to reviews (good and bad), adding fresh details about what you offer, and keeping an eye on how customers are actually interacting with your listing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For a small business owner juggling staff, inventory, customers, and everything else, this kind of ongoing upkeep tends to slip down the priority list fast. That's understandable. But a structured, consistent approach to <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> makes it far easier to stay on top of, even when things get busy.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why This Matters So Much for Small Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about how people actually search these days. They look for a service, compare a handful of businesses, skim through reviews, and check directions — often all within a minute or two, on their phone.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is frequently the very first thing they see, sometimes before they've even clicked through to your website. A solid profile helps potential customers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Find your business when they search locally</div>
                            <div className="list-item text-slate-700 text-lg">See your location and hours at a glance</div>
                            <div className="list-item text-slate-700 text-lg">Call you directly from the search results</div>
                            <div className="list-item text-slate-700 text-lg">Click through to your website</div>
                            <div className="list-item text-slate-700 text-lg">Read what other customers have said</div>
                            <div className="list-item text-slate-700 text-lg">Browse real photos of your business</div>
                            <div className="list-item text-slate-700 text-lg">Understand exactly what you offer</div>
                            <div className="list-item text-slate-700 text-lg">Get directions with one tap</div>
                            <div className="list-item text-slate-700 text-lg">Spot recent updates or offers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Small businesses often can't outspend the big chains on advertising, but local search levels the playing field somewhat. Someone searching "near me" is usually close to making a decision — which makes this a genuinely high-value moment to get right. That's precisely why so many small business owners are now investing in <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> as a core part of their marketing.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/services" className="link-hover">Google Business Profile management services</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Getting Your Profile Optimised
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Optimisation is really about making sure your profile is complete, accurate, and relevant — not stuffed with fluff. This usually means reviewing your primary category, adding the right secondary categories, writing a clear business description, listing your actual services, and double-checking your contact details are correct.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Photos matter more than people expect. Clear, well-lit images of your shopfront, your team, your products, or finished work give potential customers a much better sense of who you are before they've even spoken to you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's also worth making sure the details on your profile line up with what's on your website and any other directories you're listed in. As part of effective <Link to="/services" className="link-hover">Google Business Profile management</Link>, maintaining consistent business information across all platforms is essential. Mismatched addresses, phone numbers or business details can quietly confuse both customers and Google itself, potentially affecting your local online visibility.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Keep the Basics Accurate
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            One of the simplest — yet most overlooked — parts of <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> is just keeping your information current.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Picture this: a customer finds your profile, but the phone number's outdated or the hours listed don't match reality. They'll probably just move on to the next result. It happens all the time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keep tabs on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Business name</div>
                            <div className="list-item text-slate-700 text-lg">Address</div>
                            <div className="list-item text-slate-700 text-lg">Phone number</div>
                            <div className="list-item text-slate-700 text-lg">Website URL</div>
                            <div className="list-item text-slate-700 text-lg">Regular opening hours</div>
                            <div className="list-item text-slate-700 text-lg">Holiday hours</div>
                            <div className="list-item text-slate-700 text-lg">Categories</div>
                            <div className="list-item text-slate-700 text-lg">Services offered</div>
                            <div className="list-item text-slate-700 text-lg">Business description</div>
                            <div className="list-item text-slate-700 text-lg">Photos</div>
                            <div className="list-item text-slate-700 text-lg">Booking or enquiry links</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Any time something changes — new hours, a new service, a move to a new location — update your profile as soon as you can. It's a small habit that makes your business look far more professional and trustworthy.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Professional Services for Growing Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For businesses that want consistent results without doing it all themselves, professional profile management services can take the day-to-day work off your plate. That typically covers audits, category reviews, information updates, service optimisation, photo uploads, regular posts, and review monitoring.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The right approach really depends on your industry and your customers. A local plumber, for example, might focus on emergency call-out services and coverage areas, while a café might lean more into menu updates, photos, and reviews. There's no one-size-fits-all here — which is exactly why tailored <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> tends to outperform a generic, copy-paste approach.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Don't Ignore Your Reviews
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews carry a lot of weight. Most people read a handful before deciding whether to trust a business enough to call. Responding to them — thanking people for positive feedback, addressing genuine concerns professionally — shows you're actually paying attention.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            What you shouldn't do is try to game the system with fake reviews or pressure customers into leaving glowing feedback. It's not worth the risk, and it rarely fools anyone anyway. Focus on good service and make it easy for happy customers to leave a review, and the rest tends to follow naturally.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Use Google Posts to Stay Active
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Posting regular updates keeps your profile looking active and gives customers a reason to check back. Depending on your business, that might include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">New services or products</div>
                            <div className="list-item text-slate-700 text-lg">Seasonal offers</div>
                            <div className="list-item text-slate-700 text-lg">Company news</div>
                            <div className="list-item text-slate-700 text-lg">Upcoming events</div>
                            <div className="list-item text-slate-700 text-lg">Recently completed projects</div>
                            <div className="list-item text-slate-700 text-lg">Useful tips for customers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            The goal isn't to post just for the sake of it — each update should actually be useful to someone reading it. A renovation company might share photos from a recent job; a restaurant might highlight a new seasonal dish.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO Is Bigger Than Just Your Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is a major piece of local SEO, but it's not the whole picture. A more complete local strategy also includes optimising your website's location pages, building consistent citations across directories, improving site speed, creating locally relevant content, and tracking how you're performing in local search over time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your website and your profile should work as a team. Someone might spot you on Google Maps first, then click through to your site to check pricing, read about your experience, or find your contact form. A well-built website turns that initial visibility into an actual enquiry.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Skip the Keyword Stuffing
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's tempting to cram keywords into every description and post, but it rarely helps and often looks unnatural to real customers. Google is pretty good at understanding context these days, and people can tell when they're reading something written for a search engine instead of for them.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Instead, describe what you do, who you serve, and where — in plain, natural language. A local business talking honestly about its services and coverage area will usually outperform one stuffed with repetitive phrases anyway.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Pairing Your Website With Your Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A strong local presence usually combines:
                        </p>

                        <div className="space-y-2 mt-4 ml-4">
                            <p className="text-lg text-slate-700">1. A well-optimised Google Business Profile</p>
                            <p className="text-lg text-slate-700">2. A fast, mobile-friendly website</p>
                            <p className="text-lg text-slate-700">3. Clear, specific service pages</p>
                            <p className="text-lg text-slate-700">4. Location-relevant content</p>
                            <p className="text-lg text-slate-700">5. Matching contact details everywhere</p>
                            <p className="text-lg text-slate-700">6. Strong, obvious calls to action</p>
                            <p className="text-lg text-slate-700">7. Original, useful content</p>
                            <p className="text-lg text-slate-700">8. A simple way for customers to get in touch</p>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            At Google Business Profile Managers, we help businesses build websites that support this kind of joined-up strategy. If your site feels outdated, loads slowly, or doesn't clearly say what you do, fixing that alongside your Google presence can make a real difference to how many enquiries actually come through.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Ongoing Management Beats a One-Time Fix
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Optimising your profile once is a good start, but businesses change — new services, new hours, new photos, new reviews. Ongoing <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> helps you:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Keep everything accurate over time</div>
                            <div className="list-item text-slate-700 text-lg">Stay on top of new reviews</div>
                            <div className="list-item text-slate-700 text-lg">Post regular, relevant updates</div>
                            <div className="list-item text-slate-700 text-lg">Refresh photos periodically</div>
                            <div className="list-item text-slate-700 text-lg">Catch issues before they become a problem</div>
                            <div className="list-item text-slate-700 text-lg">Keep services and offers current</div>
                            <div className="list-item text-slate-700 text-lg">Support your broader local SEO efforts</div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes Small Businesses Commonly Make
                    </h2>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Incomplete listings</strong>. Leaving out services, hours, or your website link makes it harder for people to understand what you actually do.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Outdated hours</strong>. Especially during holidays — nothing frustrates a customer more than showing up to a closed door.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Ignoring reviews</strong>. Silence can come across as indifference, even when that's not the intention.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Weak photos</strong>. Blurry or irrelevant images don't do your business any favours.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Treating the profile as a substitute for a website</strong>. They should work together, not one instead of the other.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">A scattershot local SEO approach</strong>. Slapping a city name into your description isn't a strategy — customers need genuinely useful, relevant information.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 14 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Building a Stronger Local Strategy
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Start by getting clear on your actual customers. What are they searching for? Which areas do you serve? What questions come up again and again? What sets you apart from competitors who show up alongside you in search results?
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The answers to those questions should shape your profile, your website content, and your wider SEO approach. When your profile and your site are both saying the same, clear thing, customers get a consistent experience from the first search to the final phone call.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 15 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Small Businesses Can Compete Here
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Big brands have bigger budgets, sure — but local search rewards relevance and trust more than size. Someone searching nearby usually cares more about convenience, reviews, and whether you can actually help them than which business is the biggest.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's the opening smaller businesses have. Solid <strong className="text-slate-900">Google Business Profile Management for Small Business</strong>, paired with a decent website and genuine customer reviews, can hold its own against much larger competitors in local results.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 16 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A Google Business Profile isn't just a digital business card with your phone number on it. For a lot of customers, it's the starting point of their entire journey with your business — from first search to first phone call.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Real <strong className="text-slate-900">Google Business Profile Management for Small Business</strong> blends accurate information, thoughtful optimisation, active review management, useful updates, and a website that backs it all up.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection21;
