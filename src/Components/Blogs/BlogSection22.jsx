import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs19.png'; // Using blogs19.png as placeholder

const BlogSection22 = () => {
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
                        <div className="badge">Map Optimization</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Maps Profile Optimization Service | Expert SEO
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Boost local visibility and attract more customers with our Google Maps profile optimization service. Improve rankings, visibility and local leads.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Maps Profile Optimization Service"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a small business, you already know how much local visibility matters. When someone nearby searches for what you offer, showing up in that moment can be the difference between a new customer and a missed opportunity. One of the most reliable ways to build that visibility is through a well-managed Google Business Profile. When it's set up and maintained properly, it can help your business show up in Google Search and Google Maps right when local customers are looking.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's exactly where a professional <strong className="text-slate-900">Google Maps profile optimization service</strong> earns its keep. It's not about doing something once and forgetting it. It's about consistently keeping your profile accurate, useful, and active so it keeps working for you month after month. Paired with a solid website, good content, and local SEO, your <Link to="/" className="link-hover">Google Business Profile</Link> becomes a real asset in your marketing rather than just another listing sitting online.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-slate-900">Google Business Profile Managers</strong>, we work with small businesses every day who need more than a static online presence. Our <strong className="text-slate-900">google maps profile optimization service</strong> was built around exactly this problem, keeping your profile sharp and active instead of letting it sit stale for months at a time. Your website and your Google Business Profile should be pulling in the same direction, giving customers a consistent, trustworthy impression no matter where they find you first.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Your Google Business Profile Actually Matters
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Business Profile puts the essentials right in front of searchers, directly inside Google Search and Maps. Your business name, address, phone number, website, hours, services, photos, and reviews all show up without the customer having to click through to your site first.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For small businesses competing against bigger, better-funded competitors, this kind of visibility carries real weight. Someone searching for a service near them is often close to making a decision. Being visible in that window can put you in front of a ready-to-buy customer at exactly the right moment.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is why a good <strong className="text-slate-900">google maps profile optimization service</strong> treats your profile as something to check and refine regularly, not something you set up once and walk away from.
                        </p>
                        
                        <p className="text-lg text-slate-700 leading-relaxed mt-6">
                            A complete, well-managed profile helps customers:
                        </p>
                        
                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Find your location without confusion</div>
                            <div className="list-item text-slate-700 text-lg">Call you directly from the search results</div>
                            <div className="list-item text-slate-700 text-lg">Click through to your website</div>
                            <div className="list-item text-slate-700 text-lg">Understand what you actually offer</div>
                            <div className="list-item text-slate-700 text-lg">Check your hours before visiting</div>
                            <div className="list-item text-slate-700 text-lg">Read what past customers have said</div>
                            <div className="list-item text-slate-700 text-lg">Browse real photos of your business</div>
                            <div className="list-item text-slate-700 text-lg">Ask questions right on the profile</div>
                            <div className="list-item text-slate-700 text-lg">Get directions in a couple of taps</div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Google Maps Profile Optimization Actually Involves
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, <strong className="text-slate-900">google maps profile optimization</strong> means going through your Google Business Profile and improving every piece of it so it gives customers accurate, relevant, useful information the moment they land on it.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That usually means reviewing your business category, your list of services, your description, your contact details, and your photos. It also means keeping an eye on reviews and posting updates that are actually worth reading.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The goal isn't to cram keywords into every field. A profile that's genuinely optimised tells customers clearly what you do and where you operate, while still giving Google the context it needs to match you to the right searches. A local web development company, for example, should spell out its services and coverage area plainly, not bury them under vague descriptions. That clarity supports your broader local SEO and makes it far easier for a potential customer to decide you're the right fit.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Building Visibility With a Google Maps SEO Service
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A dedicated <strong className="text-slate-900">Google Maps SEO service</strong> gives small businesses a structured way to compete for local search visibility. Google weighs a range of signals when it decides which businesses to show for a given local search, so there's rarely one single fix that moves the needle.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The better approach is building trust across several fronts at once: accurate information, a credible online presence, and content that's genuinely useful to the people searching.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A well-rounded strategy typically covers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Business profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Correct category selection</div>
                            <div className="list-item text-slate-700 text-lg">Detailed service listings</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing review management</div>
                            <div className="list-item text-slate-700 text-lg">Photo optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Regular Google Posts</div>
                            <div className="list-item text-slate-700 text-lg">Website optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Local citation building</div>
                            <div className="list-item text-slate-700 text-lg">Location-specific content</div>
                            <div className="list-item text-slate-700 text-lg">Performance tracking over time</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Businesses that stay consistent with this kind of approach tend to hold their ground far better in local results than those chasing quick fixes. This is exactly the kind of consistency a good <strong className="text-slate-900">google maps profile optimization service</strong> is meant to provide: steady, ongoing attention rather than a one-time overhaul.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/services" className="link-hover">Google My Business management service</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Google Business Profile Optimization Should Look Like
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile optimization</strong> works best as an ongoing habit rather than a checkbox you tick once. Your profile should reflect your business accurately and give customers what they need before they ever pick up the phone. Even the smaller details matter more than people expect.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Name</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Stick to your actual business name. Stuffing extra keywords into the name field to try to game rankings usually backfires and can even violate Google's guidelines.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Primary Category</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Choose the category that genuinely reflects your main service. Secondary categories can round things out, but the primary one carries the most weight.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Description</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Write it like you're explaining your business to a real person: what you do, who you help, and what sets you apart. Skip the jargon.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Services List</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Spell out your key services clearly. This helps customers scan quickly and gives Google more to work with when matching your profile to relevant searches.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Photos</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Real, high-quality photos make your profile feel trustworthy and give customers a clearer sense of what to expect.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Opening Hours</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Keep both your standard and holiday hours up to date. Nothing frustrates a customer faster than showing up to a closed business.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Website and Contact Details</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Make sure your phone number, website link, and other contact information match what's listed everywhere else online. Inconsistencies can confuse both customers and Google. A professional <Link to="/services" className="link-hover">Google Business Profile setup service</Link> can help ensure your business information is correctly configured, consistent and optimised across your online presence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Maps Ranking: What's Realistic
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Google Maps ranking service</strong> can absolutely help you build a stronger, more structured approach to local visibility. That said, be wary of anyone promising a guaranteed spot in the map pack. Rankings shift based on competition, location, search intent, and changes to Google's own systems, so no honest provider can lock in a specific position.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            What actually works is strengthening the underlying factors: a well-optimised profile, relevant website content, genuine customer reviews, and consistent business information across the web.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It also helps to think about how your website and your profile support each other. Your site gives you the room to go deep on your services and expertise, while your Google Business Profile gives customers a quick, convenient way to find you in the first place.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Website and Profile Need to Work as a Team
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A strong Google Business Profile is powerful, but it was never meant to replace your website. Your site gives you far more space to explain what you do, show your expertise, and guide visitors toward actually reaching out.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A professional website supports your local marketing in ways your profile can't, through detailed service pages, location-specific content, and clear paths to contact you. A well-structured site with fast-loading pages, mobile-friendly design, and clear calls to action strengthens everything your profile is already doing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Put together, an optimised profile and a solid website create a much stronger customer journey. Someone finds you on Google Maps, clicks through to learn more, and then reaches out directly, all without friction.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO That Actually Moves the Needle
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Local SEO optimization service</strong> is focused squarely on visibility for searches tied to a specific area. It typically touches both your Google Business Profile and your website at the same time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A solid local SEO strategy usually includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">Service-area pages built for your location</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing Google Business Profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Local citation building</div>
                            <div className="list-item text-slate-700 text-lg">Strategies to earn genuine reviews</div>
                            <div className="list-item text-slate-700 text-lg">Website technical SEO</div>
                            <div className="list-item text-slate-700 text-lg">Smart internal linking</div>
                            <div className="list-item text-slate-700 text-lg">Location-focused content</div>
                            <div className="list-item text-slate-700 text-lg">Mobile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Regular performance tracking</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Consistency matters more than intensity here. Small, steady improvements tend to outperform a single big push that fizzles out after a month. Pairing local SEO with an ongoing <strong className="text-slate-900">google maps profile optimization service</strong> tends to produce the most durable results, since the two efforts reinforce each other over time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Maps Marketing: Turning Visibility Into Action
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Google Maps marketing service</strong> helps small businesses treat their profile as more than a listing; it becomes part of the actual customer acquisition strategy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Ranking well is only half the job. Once someone finds you, your profile needs to convince them to take the next step. Think of the customer journey in stages:
                        </p>
                        
                        <p className="text-lg text-slate-900 font-bold leading-relaxed">
                            Search — Discover — Compare — Trust — Contact
                        </p>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Every part of your profile should make each of those stages a little easier. Customers naturally compare businesses by scanning reviews, photos, services, hours, and website links, so keeping all of it current matters more than most business owners realise.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Posting regular Google Posts, whether it's an announcement, a seasonal offer, or a helpful tip, keeps your profile feeling active rather than abandoned.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local Business Profile Optimisation for Location-Dependent Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local business profile optimization</strong> matters most for businesses that rely on customers from a specific town, city, or service area. A well-maintained profile communicates the right information while feeding into your broader local SEO efforts.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a professional services business, your profile should highlight your core services and the areas you serve. If you have a physical shopfront, accurate hours, directions, and real photos carry extra weight.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews deserve special attention here too. Encourage genuine customers to leave honest feedback, and respond to reviews professionally, including the occasional negative one. Never lean on fake reviews or misleading claims. A real reputation, built over time, holds up far better than anything artificial.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Choosing the Right Partner Matters
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When you're deciding who should manage your local presence, be skeptical of anyone promising instant results. A reliable <strong className="text-slate-900">google maps profile optimization service</strong> will walk you through exactly what they're optimizing, how they measure progress, and what work is actually being done month to month.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The right partner focuses on sustainable practices: accurate information, useful content, solid technical execution, and genuine engagement with your customers, not shortcuts that might look good for a few weeks and then collapse.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Bringing It All Together
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For small businesses, Google Maps and Google Search represent real opportunities to reach people who are already looking for what you offer. A complete, well-maintained Google Business Profile strengthens your visibility and makes it far easier for customers to find and contact you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A thoughtful <strong className="text-slate-900">google maps profile optimization service</strong> should work hand in hand with your website, your local SEO efforts, your content, and your reputation management, not as a standalone fix. Whether you're focused on Google Maps SEO, profile optimization, ranking strategy, local SEO, or Maps marketing, the underlying goal stays the same: accurate information and a genuinely useful customer experience.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection22;
