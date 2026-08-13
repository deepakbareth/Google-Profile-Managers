import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs13.png'; // Using blogs13.png as it will likely be the next one

const BlogSection16 = () => {
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
                        <div className="badge">Local SEO Consultant</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile Consultant | Local SEO Expert
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Hire a Google Business Profile consultant to optimise your profile, improve local visibility, attract more customers and grow your business online.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Consultant"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your business relies on local customers, showing up in the right spot on Google Search and Google Maps isn't optional anymore — it's how people find you. For a lot of potential customers, your Google Business Profile is the very first impression they get of your company, often before they ever visit your website. Get that profile right, and it can quietly bring in more calls, more foot traffic, and more genuine enquiries every single week.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            But here's the part most business owners don't realise until later: setting up the profile is the easy bit. Keeping the information accurate, posting updates that actually matter, staying on top of reviews, and steadily building your local search presence — that's an ongoing job, not a one-time task. This is exactly why so many businesses eventually bring in a <strong className="text-slate-900">Google Business Profile consultant</strong> to handle it properly.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <Link to="/" className="link-hover">Google Business Profile Managers</Link>, we work with businesses of all sizes to get more out of their Google presence — through hands-on profile management, smart optimisation, and local marketing that's tailored to how customers actually search. Whether you're running a single local shop or managing several locations across a city, having someone who understands the platform can make a real difference to how visible — and how trustworthy — your business looks online.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Exactly Is a Google Business Profile?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A Google Business Profile is a free listing that lets your business show up across both Google Search and Google Maps. It's where customers see your business name, address, phone number, website link, opening hours, the services you offer, your photos, and — importantly — what other customers have said about you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When someone nearby searches for a service you offer, Google pulls together the most relevant local businesses and displays them front and centre. That's your profile doing the heavy lifting. It's arguably one of the most underrated pieces of a solid local SEO strategy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A well-kept profile helps people:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Locate your business on Google Maps</div>
                            <div className="list-item text-slate-700 text-lg">Call you directly, without leaving the search results</div>
                            <div className="list-item text-slate-700 text-lg">Click through to your website</div>
                            <div className="list-item text-slate-700 text-lg">Check whether you're open right now</div>
                            <div className="list-item text-slate-700 text-lg">Read what past customers experienced</div>
                            <div className="list-item text-slate-700 text-lg">Browse real photos of your business</div>
                            <div className="list-item text-slate-700 text-lg">Understand exactly what you offer</div>
                            <div className="list-item text-slate-700 text-lg">Get turn-by-turn directions</div>
                            <div className="list-item text-slate-700 text-lg">Reach out with a question before they even visit</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Since most people turn to Google right when they're ready to actually do something — book, buy, or visit — keeping this profile sharp needs to be a real part of your marketing, not an afterthought.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/search-engine-optimization" className="link-hover">Google Business Profile SEO services</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Bring In a Google Business Profile Consultant?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            On the surface, managing a Google Business Profile looks simple enough. Add your name, address, and number, upload a logo, and done — right? Not quite. Real optimisation goes a lot deeper than the basics.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Google Business Profile consultant</strong> knows how each part of your profile — categories, descriptions, photos, posts, reviews — feeds into your local search visibility as a whole. They'll audit what you already have, spot the gaps, and build a plan around what your business actually needs to grow.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This kind of support tends to matter most when a business feels stuck — when enquiries have slowed down, or when you're simply not showing up for searches that should be bringing you customers.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's where a consultant typically gets involved:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Full profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Choosing the right business categories</div>
                            <div className="list-item text-slate-700 text-lg">Rewriting business descriptions that actually convert</div>
                            <div className="list-item text-slate-700 text-lg">Fine-tuning your listed services</div>
                            <div className="list-item text-slate-700 text-lg">Managing and refreshing photos</div>
                            <div className="list-item text-slate-700 text-lg">Publishing Google Posts regularly</div>
                            <div className="list-item text-slate-700 text-lg">Handling review responses and strategy</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">Studying what competitors are doing right (or wrong)</div>
                            <div className="list-item text-slate-700 text-lg">Improving your visibility on Google Maps</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing performance tracking</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Instead of tweaking things at random and hoping something sticks, you get a structured approach built around your customers and your location.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Staying on Top of Google Business Profile Management
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Ongoing <strong className="text-slate-900">Google Business Profile management</strong> isn't glamorous, but it's genuinely one of the most important habits a local business can build.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about how much changes over time — your hours shift for the holidays, you add a new service, old photos start looking dated, and new reviews come in that need a response. Without regular management, your profile slowly drifts out of sync with reality, and customers notice.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Good management usually means keeping your business details accurate and up to date, adding fresh photos, publishing regular updates, monitoring customer reviews, and checking how your profile performs over time. A professional <Link to="/setup" className="link-hover">Google Business Profile setup service</Link> can also ensure your profile is properly configured from the beginning, with the right business information, categories, services and other important details in place.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            An active, well-maintained profile also gives you a chance to talk directly to potential customers — announcing a new offer, sharing a bit of company news, or simply answering the questions people ask most often.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            And there's a quieter benefit too: regular check-ins mean you catch small problems — a wrong phone number, an outdated address — before they turn into lost customers.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Business Profile Optimisation for Stronger Visibility
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile optimisation</strong> is really about making sure your profile represents your business accurately while giving Google (and your customers) everything they need to trust you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That means paying attention to your primary and secondary categories, writing a business description that actually says something useful, listing your services and products properly, keeping photos current, and making sure your hours and contact details are correct.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keyword research plays a role here too — understanding the actual words your customers type when they're looking for a business like yours. That said, keywords should be woven in naturally. Stuffing them in everywhere does more harm than good.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Consistency matters just as much. Your business name, address, and phone number should match exactly across your website, directories, and social platforms — inconsistent details confuse both customers and Google's algorithm.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Google Business Profile consultant</strong> can walk through each of these areas with you and build an optimisation plan suited to your industry, your location, and the customers you're trying to reach.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Review Management Deserves Real Attention
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Before people pick up the phone or walk through your door, there's a good chance they've already read your reviews. That single decision point makes <strong className="text-slate-900">Google review management</strong> one of the more valuable parts of your online reputation.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Managing reviews well means actively watching what customers are saying, replying professionally — to both praise and complaints — and gently encouraging happy customers to leave honest feedback.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A strong batch of positive reviews acts as social proof that speaks louder than almost anything on your website. And when a negative review does come in, a thoughtful, calm response shows other potential customers that you take concerns seriously instead of ignoring them.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            One thing worth being clear about: never fake reviews or try to manipulate feedback. It's not worth the risk, and it rarely works long-term anyway. Focus instead on delivering a genuinely good experience and making it easy for real customers to share it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How This Kind of Support Actually Helps Day to Day
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Bringing in a specialist saves time, sure — but the bigger value is the structure it gives your local marketing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            An experienced local search specialist will look at your current setup and flag exactly what's holding it back — maybe your categories are too broad, your services list is incomplete, your photos haven't been updated in years, or there's simply not enough customer engagement happening.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            They'll usually keep an eye on competitors too, so you know how other businesses in your area are presenting themselves and where you might be falling behind.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The point isn't just to make your profile "look" complete. It's to build a presence that genuinely helps Google understand what your business does — and helps customers quickly decide whether you're the right choice for them.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Maps Marketing for Local Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Maps carries extra weight for businesses tied to a specific area — restaurants, tradespeople, clinics, salons, retail stores, and pretty much any business that serves people nearby rather than nationwide.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A Google Maps marketing consultant focuses specifically on improving how visible your business is on the map itself, and on attracting customers actively searching within your service area.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This usually involves the same core pieces — optimisation, local keyword research, a review strategy, category checks, competitor analysis — but tuned specifically for map visibility rather than general search.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            There's no universal playbook here. Your industry, your location, your competition, and your customers all shape what actually works, which is why cookie-cutter strategies rarely deliver much.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Do Google Business Profile Services Actually Include?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Professional <strong className="text-slate-900">Google Business Profile services</strong> can cover a wide range of work, depending on what your business actually needs.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Typical services include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Setting up a new Google Business Profile</div>
                            <div className="list-item text-slate-700 text-lg">Support with profile verification</div>
                            <div className="list-item text-slate-700 text-lg">Full profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Business category research</div>
                            <div className="list-item text-slate-700 text-lg">Service listing improvements</div>
                            <div className="list-item text-slate-700 text-lg">Regular Google Posts</div>
                            <div className="list-item text-slate-700 text-lg">Photo updates and management</div>
                            <div className="list-item text-slate-700 text-lg">Review monitoring and response</div>
                            <div className="list-item text-slate-700 text-lg">Local SEO support</div>
                            <div className="list-item text-slate-700 text-lg">Competitor research</div>
                            <div className="list-item text-slate-700 text-lg">Google Maps optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing performance reports</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Some businesses want full, hands-off management. Others just need an audit and a plan they can run with themselves. The right fit really depends on where your profile currently stands and how competitive your market is.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Local SEO Actually Matters
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local SEO is what connects businesses with people searching for something specific, right now, nearby. Think about someone typing "electrician near me" or "coffee shop in [city]" — they're not browsing casually, they're close to making a decision. Showing up in that moment matters more than almost any other part of your marketing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile works alongside the rest of your local SEO — your website, directory listings, customer reviews, and locally relevant content all feed into the same bigger picture.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A dedicated profile specialist helps tie these pieces together instead of leaving them scattered, which tends to be where a lot of businesses lose momentum.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 - Final Section */}
                <div className="section-container mb-12" data-animate>
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">
                        What You Actually Gain from Professional Management
                    </h3>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">1. You Get Your Time Back</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Running a business already takes everything you've got. Handing this off frees up hours you'd otherwise spend fiddling with settings and photos.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">2. Your Information Stays Accurate</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Regular oversight means customers always see correct hours, numbers, and details — not something outdated from three years ago.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">3. Customers Actually Engage More</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Fresh posts, current photos, and thoughtful review replies naturally pull in more interaction than a profile that hasn't been touched in months.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">4. Your Local Visibility Improves</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Deliberate, ongoing optimisation puts you in a stronger position for the searches that actually matter to your business.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">5. You Build Real Trust</h4>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Accurate details, good photos, and honest reviews all add up to a business that looks credible the moment someone finds it.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How to Choose the Right Google Business Profile Consultant
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Not every provider works the same way, so it's worth being a little picky before you hire a <strong className="text-slate-900">Google Business Profile consultant</strong>.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Look for someone who talks about genuine optimisation, not vague promises. A good consultant should be able to explain, in plain terms, what they're changing, why it matters, and how they'll track progress over time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            One red flag worth watching for: anyone guaranteeing a specific Google ranking. Local search results shift constantly based on competition, relevance, location, and how people search — nobody can lock in a guaranteed position, and claiming otherwise is a warning sign.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A solid strategy focuses on strengthening your overall online presence and bringing in relevant customers — not chasing unrealistic promises that don't hold up.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Time to Build a Stronger Google Presence
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile isn't just a digital business card sitting online — when it's managed properly, it becomes one of your strongest tools for bringing in new customers and building local trust.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            From optimisation and review management to Maps visibility and regular updates, every piece plays a part in how your business shows up locally.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you're just starting out or trying to breathe new life into an established business, the right support can turn a neglected profile into a genuine growth channel.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At Google Business Profile Managers, we focus on practical, ongoing management that actually moves the needle — not one-off fixes that fade after a month. If your profile feels incomplete, outdated, or simply isn't pulling its weight, now's a good time to take a closer look at your local search strategy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Working with a <strong className="text-slate-900">Google Business Profile consultant</strong> means having someone dedicated to spotting the opportunities, tightening up your profile, and building consistency into your local visibility over time.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection16;
