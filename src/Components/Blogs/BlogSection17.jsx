import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs14.png'; // Using blogs14.png as placeholder

const BlogSection17 = () => {
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
                        <div className="badge">Local Visibility</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Maps Marketing Services | Boost Local Visibility
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Get expert Google Maps marketing services to improve local visibility, attract more customers, and grow your business in Google search.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Maps Marketing Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a local business, you already know that showing up where your customers are looking is half the battle. When someone types in "restaurant near me", "plumber in my area", or "digital agency in London", Google Maps is usually the first place that an answer comes from. Whether your business gets found — or gets skipped entirely — often comes down to how well your online presence is set up for local search.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's exactly why <strong className="text-slate-900">Google Maps marketing services</strong> have become such a valuable investment for small and growing businesses alike. Done right, they can improve your visibility, bring in more calls and enquiries, and turn casual searchers into paying customers.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <Link to="/" className="link-hover">Google Business Profile Managers</Link>, we work with local businesses every day who want to be found faster, trusted more, and chosen over the competition. Here's a closer look at what it actually takes to build a strong presence on Google Maps.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Do Google Maps Marketing Services Actually Involve?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            In simple terms, <strong className="text-slate-900">Google Maps marketing services</strong> cover the strategies and day-to-day work that go into making your business more visible on Google Maps and in local search results. This isn't just about setting up a listing and walking away — it's an ongoing effort that includes optimising your Google Business Profile, improving local relevance, managing reviews, and fine-tuning your local SEO.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think of Google Maps as more than a navigation app. For a lot of customers, it's the first stop when they're deciding who to call. They compare star ratings, scroll through reviews, check your hours, look at your photos, and often visit your website — all without leaving the map. If your listing is thin, outdated, or inconsistent, you're handing that customer straight to a competitor.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A real local marketing strategy goes beyond "just having a profile". It means keeping your information accurate, your content relevant, your reviews genuine, and your listing active enough that Google — and your customers — take notice.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why This Actually Matters for Local Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's the thing about local search: people who use it usually already know what they want. Someone searching "web design company near me" isn't casually browsing — they're close to making a decision. That's a very different mindset from someone Googling "what is web design", who's still in research mode.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your business shows up clearly and confidently for that first kind of search, you're in a strong position to win the customer before they even see your competitors. This is where professional <strong className="text-slate-900">Google Maps marketing services</strong> earn their keep — they help close that gap between "searching" and "choosing you".
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A few benefits worth mentioning:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">More visibility in local search results</div>
                            <div className="list-item text-slate-700 text-lg">More phone calls and direct enquiries</div>
                            <div className="list-item text-slate-700 text-lg">A steady increase in website traffic</div>
                            <div className="list-item text-slate-700 text-lg">Stronger trust with potential customers</div>
                            <div className="list-item text-slate-700 text-lg">More opportunities to collect genuine reviews</div>
                            <div className="list-item text-slate-700 text-lg">Better overall performance on your Google Business Profile</div>
                            <div className="list-item text-slate-700 text-lg">Improved brand recognition in your area</div>
                            <div className="list-item text-slate-700 text-lg">A better shot at converting nearby searchers into customers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            The goal isn't just to "appear" on the map. It's to build a presence solid enough that people choose you without a second thought.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/search-engine-optimization" className="link-hover">Google Maps SEO services</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Maps SEO: The Details That Actually Move the Needle
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Maps SEO services focus on the specific factors that influence how visible your listing is — things like your business categories, description, reviews, photos, and how well your website backs up what your profile says.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A well-optimised profile should make it obvious, at a glance, what you do, where you operate, and why someone should pick you over the next listing down. It also helps if your website reinforces that message. Location-specific pages, useful local content, and consistent business details across the web all add weight to your local SEO efforts.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Should You Actually Optimise on Your Listing?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Maps optimisation is really about reviewing your profile piece by piece and making sure every part of it is pulling its weight.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Information</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Your name, address, phone number, website, and hours need to be accurate — and consistent everywhere they appear online. Mismatched details, even small ones, can confuse customers and quietly hurt your credibility with Google.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Categories</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Picking the right primary and secondary categories tells Google exactly what kind of business you run. Vague or inaccurate categories can mean you're simply invisible for the searches that matter most. For businesses looking to improve their local visibility, <Link to="/services" className="link-hover">Local SEO services for small businesses</Link> can help identify the most relevant categories and optimise the overall Google Business Profile. Choosing accurate categories also helps potential customers understand your services and increases the relevance of your profile for local searches.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Description</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Write like a human, not a keyword list. Your description should explain what you offer and who you serve, without stuffing in phrases just to game the algorithm.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Photos and Visual Content</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Good photos build trust fast. Depending on your business, that might mean shots of your shopfront, your team, your products, or finished projects.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Reviews</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Reviews are, arguably, one of the most persuasive parts of your entire profile. They're the closest thing to word-of-mouth in the digital world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Google Review Management Deserves Its Own Focus
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google review management</strong> isn't just about collecting five-star ratings. It's about shaping how people perceive your business before they've even spoken to you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A solid review strategy encourages real customers to leave honest feedback while making sure someone is actually responding — to both the good and the bad. A thoughtful reply to a negative review can sometimes do more for your reputation than ten positive ones sitting untouched.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Steer clear of fake reviews or shortcuts. They might offer a quick boost, but authentic feedback holds far more value in the long run — for your reputation and for how Google treats your listing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Competing in Crowded Markets
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Some industries and cities are brutally competitive. If you're in one of them, generic effort won't cut it. This is where <strong className="text-slate-900">Google Maps ranking services</strong> come in — helping businesses build a more deliberate, structured approach to local SEO.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That might mean studying what competitors are doing, identifying the exact search terms locals are using, tightening up profile details, and making sure your website content actually supports your local goals. Mentioning your city once on your homepage isn't enough — your entire online presence needs to say, "We're here, and we're the right choice."
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO Is About Matching Intent
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local Google Maps SEO</strong> is fundamentally about reaching people exactly when they're ready to act. Someone typing "digital marketing agency near me" is in a completely different headspace than someone researching "what does a digital marketing agency do?"
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The first person is close to picking up the phone. Your job is to make that decision easy — clear information, fast answers, and an obvious next step. This is why local SEO shouldn't sit in isolation; it needs to connect with your broader marketing strategy.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Treating Your Profile Like a Marketing Asset
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile marketing</strong> means treating your listing as an active part of your marketing — not a static entry you set up once and forget.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your profile carries a lot of weight: location, contact details, hours, reviews, photos, services, and regular updates or posts. Keeping it current improves the customer experience and often reveals small gaps you didn't know were costing you leads.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It helps to think of your profile as a digital shopfront. Just like a physical shop needs to look presentable and welcoming, your online listing needs to give people a reason to trust you before they've even walked through the door.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local Marketing Should Support Real Business Goals
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Good <strong className="text-slate-900">Google Maps marketing services</strong> aren't chasing rankings for the sake of it. They should tie back to what your business actually needs — more calls, more bookings, more website visits, more foot traffic.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The strongest strategies combine profile optimisation, local content, review management, and ongoing keyword research, all monitored and adjusted over time. Local search isn't static — competitors update their listings, customer behaviour shifts, and algorithms change. Treat it as an ongoing process, not a task you check off once.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes That Quietly Hurt Local Visibility
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Even well-meaning business owners fall into a few common traps:
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Incomplete profiles</strong> — Leaving fields blank makes it harder for customers (and Google) to understand your business.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Inconsistent details</strong> — Different addresses or phone numbers across platforms create confusion and erode trust.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Ignoring reviews</strong> — A profile that never responds to feedback can look neglected or inactive.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Low-quality photos</strong> — Blurry or irrelevant images weaken your first impression before anyone even reads your description.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Keyword stuffing</strong> — cramming in phrases unnaturally — reads poorly and can hurt more than it helps.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Treating optimisation as a one-time job</strong> — local search shifts constantly, so your strategy needs to shift with it.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Work With Professionals for Google Maps Marketing?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Managing local search properly takes time, research, and consistency — three things most business owners are already short on. That's why working with a team offering professional <strong className="text-slate-900">Google Maps marketing services</strong> can make such a difference.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Instead of guessing at changes, a professional approach starts with a proper assessment of your current listing and local presence, then prioritises what will actually move the needle. That usually includes profile optimisation, local keyword research, review management, competitor analysis, and ongoing monitoring — so you can focus on running your business while your local visibility gets the attention it needs.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Ready to Build a Stronger Local Presence?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Maps has quietly become one of the most important tools for how customers find local businesses. A strong, well-managed profile helps you stand out, builds trust before the first phone call, and creates a steady stream of new enquiries.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            With the right approach, <strong className="text-slate-900">Google Maps marketing services</strong> can boost your local visibility while feeding into your bigger digital marketing goals. Whether you're a single-location business or managing multiple service areas, investing in local search puts you in front of people exactly when they're ready to buy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The formula isn't complicated — accurate information, useful content, genuine reviews, consistent optimisation, and a customer experience that feels trustworthy from the first click.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            None of this happens overnight. It takes planning, patience, and steady improvement. By bringing together Google Maps marketing, Google Maps SEO services, Google Maps optimisation, Google Maps ranking services, local Google Maps SEO, Google Business Profile marketing, and thoughtful Google review management, your business builds a real foundation for local growth — not just a quick spike in traffic.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection17;
