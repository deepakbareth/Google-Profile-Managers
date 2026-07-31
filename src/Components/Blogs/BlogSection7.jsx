import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs4.png';

const BlogSection7 = () => {
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
                        <div className="badge">Google Business Profile setup service</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile SEO Services | Local SEO Experts
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Setup Service"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about the last time you needed a plumber, a new dentist, or somewhere to grab dinner. Chances are, you didn't flip through a phone book — you pulled out your phone and searched Google. That's exactly what your customers are doing right now, and if your business isn't showing up when they search, you're handing those customers straight to your competitors.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is why your <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile</Link> has quietly become one of the most valuable pieces of digital real estate a local business can own. But here's the catch: just claiming your profile and filling in a few basic details won't cut it anymore. To actually show up where it matters, your profile needs to be optimised properly, kept active, and managed with a clear strategy. That's exactly what <strong className="text-slate-900">Google Business Profile SEO services</strong> are built to do — helping businesses like yours get seen, get clicked, and get called.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        So, What Exactly Are Google Business Profile SEO Services?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, <strong className="text-slate-900">Google Business Profile SEO services</strong> are all about making your business profile work harder for you on Google Search and Google Maps. That means fine-tuning everything from your business categories and contact details to your photos, customer reviews, posts, and even how you stack up against nearby competitors.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's a simple example: someone types "digital marketing agency near me" or "<Link to="/web-services" className="link-hover">Google Business Profile Web Services</Link>" into Google. If your profile is properly optimised, you've got a real shot at showing up in that results list. If it's not, you're essentially invisible to that searcher — even if you're the best option in town.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Good optimisation isn't about tricking Google. It's about presenting your business accurately, completely, and in a way that search engines can easily understand and trust.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Your Google Business Profile Deserves More Attention
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For a lot of potential customers, your Google Business Profile is the very first impression they'll have of your business — often before they even visit your website. Right there in the search results, they'll see your name, location, hours, services, photos, reviews, and a link to get in touch.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Now imagine that profile has outdated hours, a missing phone number, blurry old photos, or reviews sitting unanswered for months. That's not a great look. It quietly tells potential customers, "This business might not be that reliable."
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            On the flip side, a profile that's complete, current, and actively managed can:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Boost your visibility</strong> in local search results
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Drive more phone calls</strong> directly from Google
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Increase website traffic</strong> from interested searchers
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Encourage more direction requests</strong> to your physical location
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Build trust</strong> through genuine, well-managed reviews
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Showcase your products and services</strong> clearly
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Strengthen your presence</strong> on Google Maps
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                <strong className="text-slate-900 font-bold">Put you in front of</strong> people actively searching nearby
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            This is precisely why so many businesses are turning to professional <strong className="text-slate-900">Google Business Profile SEO services</strong> as a core part of their local marketing plan — it's not a "nice to have" anymore; it's a competitive necessity.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/management" className="link-hover">Google Business Profile Management</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Goes Into Proper Google Business Profile Optimisation
                    </h2>

                    <div className="space-y-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            There's a lot more to this than typing in your business name and address. Every section of your profile plays a role, and each one needs attention if you want real results.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Getting Your Business Information Right</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Your name, address, phone number, website link, and opening hours all need to be accurate — and just as importantly, consistent with what's listed elsewhere online. Even small inconsistencies can confuse both customers and Google itself, which can quietly hurt your rankings.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Picking the Right Categories</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                This step is easy to underestimate, but it matters a lot. Your primary category tells Google what kind of business you are and heavily influences which searches you'll show up in. Adding a few relevant secondary categories can help too, but stuffing your profile with unrelated categories just to chase more keywords tends to backfire. Relevance beats quantity every time.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Listing Your Services and Products Properly</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Give customers — and Google — a clear picture of what you actually offer. Write natural, easy-to-understand descriptions for each service rather than vague one-liners. This helps Google match your profile to the right searches and helps customers know exactly what they're getting.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">4. Writing a Business Description That Actually Says Something</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Your description should explain who you are, what you do, and where you do it — written for humans, not stuffed with keywords. A well-written description can highlight your experience and what makes you different, giving potential customers a real reason to choose you over the next listing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Don't Overlook Google Maps SEO
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A huge chunk of local searches happen directly on Google Maps, which means Google Maps optimisation — a key piece of any solid <strong className="text-slate-900">Google Business Profile SEO services</strong> package — deserves just as much attention as your search visibility. A solid Maps strategy typically includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Choosing accurate, relevant categories</div>
                            <div className="list-item text-slate-700 text-lg">Making sure your profile is fully filled out</div>
                            <div className="list-item text-slate-700 text-lg">Actively building a strong base of reviews</div>
                            <div className="list-item text-slate-700 text-lg">Uploading fresh, high-quality photos</div>
                            <div className="list-item text-slate-700 text-lg">Keeping your business details current</div>
                            <div className="list-item text-slate-700 text-lg">Posting regular updates through Google Posts</div>
                            <div className="list-item text-slate-700 text-lg">Tracking what nearby competitors are doing</div>
                            <div className="list-item text-slate-700 text-lg">Monitoring how your profile is actually performing</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            The end goal is simple: when someone nearby searches for what you offer, you want to be the pin they tap on.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Reviews Carry So Much Weight
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            People trust other people — and that's exactly what reviews represent. When someone's comparing a few local businesses, genuine, recent, positive reviews can be the deciding factor.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            But review management isn't just about collecting five-star ratings. It's about encouraging honest feedback from real customers and responding thoughtfully to every review, good or bad. Replying to a negative review calmly and professionally often builds more trust than a wall of perfect five-star ratings ever could — it shows you actually care.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This kind of ongoing review monitoring and response strategy is a core piece of what professional <strong className="text-slate-900">Google Business Profile SEO services</strong> typically handle for businesses that don't have the time to do it themselves.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Keep the Profile Active with Google Posts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile isn't something you set up once and forget. Google — and your customers — reward activity. Regular Google Posts let you share:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Special offers and promotions</div>
                            <div className="list-item text-slate-700 text-lg">New services or products</div>
                            <div className="list-item text-slate-700 text-lg">Business news and updates</div>
                            <div className="list-item text-slate-700 text-lg">Upcoming events</div>
                            <div className="list-item text-slate-700 text-lg">Seasonal announcements</div>
                            <div className="list-item text-slate-700 text-lg">Helpful tips for customers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Posting regularly gives people more reasons to engage with your profile and keeps your business looking active, current, and trustworthy.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Local SEO Ties It All Together
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile doesn't operate in isolation — it works best as part of a wider <strong className="text-slate-900">local SEO</strong> strategy. That bigger picture usually includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Website optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">Location-specific content</div>
                            <div className="list-item text-slate-700 text-lg">On-page SEO improvements</div>
                            <div className="list-item text-slate-700 text-lg">Consistent local citations</div>
                            <div className="list-item text-slate-700 text-lg">Reputation management</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing review growth</div>
                            <div className="list-item text-slate-700 text-lg">Technical SEO fixes</div>
                            <div className="list-item text-slate-700 text-lg">Competitor tracking</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            When your website, your profile, and your business information across the web all send the same consistent signals, your overall local presence gets noticeably stronger.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Hand This Off to the Professionals?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Running a business is already a full-time job — actually, several full-time jobs at once. Between serving customers and keeping operations running, it's no surprise that Google Business Profiles often get neglected.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's where professional <strong className="text-slate-900">Google Business Profile management services</strong> come in. A dedicated team can keep your information updated, publish fresh posts, add new photos, respond to reviews, review performance insights, and spot opportunities you might otherwise miss. For businesses competing in crowded local markets, this kind of consistent attention can make a real difference.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Measuring What Actually Matters
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed font-bold mb-6">
                            Optimisation without tracking is just guesswork. A results-driven approach keeps an eye on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Profile views</div>
                            <div className="list-item text-slate-700 text-lg">Search appearances</div>
                            <div className="list-item text-slate-700 text-lg">Phone calls generated</div>
                            <div className="list-item text-slate-700 text-lg">Website clicks</div>
                            <div className="list-item text-slate-700 text-lg">Direction requests</div>
                            <div className="list-item text-slate-700 text-lg">Overall customer actions</div>
                            <div className="list-item text-slate-700 text-lg">Review growth over time</div>
                            <div className="list-item text-slate-700 text-lg">Local search rankings</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Reliable <strong className="text-slate-900">Google Business Profile ranking services</strong> help track this data over time, showing what's working and flagging what needs adjusting. And because local rankings shift based on competition, location, and customer behaviour, this really is an ongoing process — not a one-and-done task.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes That Quietly Hurt Local Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed font-bold mb-6">
                            A surprising number of businesses undercut their own visibility with avoidable errors, like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Listing incorrect or outdated business information</div>
                            <div className="list-item text-slate-700 text-lg">Choosing categories that don't really fit</div>
                            <div className="list-item text-slate-700 text-lg">Uploading low-quality or old photos</div>
                            <div className="list-item text-slate-700 text-lg">Ignoring reviews entirely</div>
                            <div className="list-item text-slate-700 text-lg">Keyword-stuffing the business name</div>
                            <div className="list-item text-slate-700 text-lg">Forgetting to update holiday hours</div>
                            <div className="list-item text-slate-700 text-lg">Leaving the services section half-finished</div>
                            <div className="list-item text-slate-700 text-lg">Going quiet with no posts or updates</div>
                            <div className="list-item text-slate-700 text-lg">Having mismatched details across different websites</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Fixing these small issues alone can noticeably improve how professional and trustworthy your profile looks.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Ready to Get More From Your Local Presence?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            More and more customers are turning to Google first when they need something nearby. If your profile isn't optimised, you could be losing enquiries to competitors with weaker services but stronger visibility — and that's a frustrating position to be in.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Business Profile Managers</strong>, we specialise in exactly this. Our <strong className="text-slate-900">Google Business Profile SEO services</strong> cover everything from full profile optimisation and Google Maps strategy to hands-on review management and ongoing performance tracking — all built to support real, long-term local growth.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you're running a single local shop, a service-based business, or managing multiple locations, investing in proper <strong className="text-slate-900">local search optimisation</strong> puts you in a stronger position to compete for the customers who are actively searching for what you offer, right now.
                        </p>

                        <div className="highlight-box mt-8">
                            <p className="text-lg text-slate-900 font-bold mb-2">Let's Get Your Profile Working for You</p>
                            <p className="text-slate-700">
                                Your Google Business Profile is far more than just an online listing — it's often the first handshake between your business and a new customer. With the right strategy and consistent management, it can become one of your most reliable sources of enquiries and bookings.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection7;
