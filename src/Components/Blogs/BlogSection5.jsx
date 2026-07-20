import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs.png';

const BlogSection5 = () => {
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
                        <div className="badge">Local SEO Strategy</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile SEO Services | Rank Higher on Maps
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile SEO Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Let's be honest — most local business owners set up a Google Business Profile, fill in a few details, and then forget it exists. No updates, no photos, no responses to reviews. And then they wonder why the shop down the street keeps showing up first on Google Maps.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's the thing: <strong className="text-slate-900">Google Business Profile SEO services</strong> aren't just for big brands or tech-savvy marketers. They're one of the most practical tools a small business can use to actually show up when local customers are searching. And most businesses are completely ignoring them.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you've ever searched "best plumber near me" or "AC repair open now," you already know what a well-optimized local profile looks like — it's those three businesses that appear right at the top with photos, ratings, and a call button. Getting your business into that spot is exactly what <strong className="text-slate-900">Google Business Profile SEO services</strong> are designed to do.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does "Optimizing" a Google Business Profile Actually Mean?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's a fair question, because "optimization" sounds vague. In practice, it means making sure every part of your profile is doing real work — not just sitting there.
                        </p>
                        
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Google Business Profile SEO services cover things like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">
                                Making sure your business name, address, and phone number are consistent and accurate
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Choosing the right primary and secondary categories (most businesses get this wrong)
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Writing a business description that naturally includes what customers are actually searching for
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Adding high-quality photos that show your location, team, and work
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Publishing regular Google Posts — promotions, announcements, seasonal offers
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Actively managing and responding to customer reviews
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Tracking how customers are finding and interacting with your profile
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this is rocket science. But doing it consistently, strategically, and in a way that aligns with how Google's local algorithm works? That takes real expertise.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/management" className="link-hover">Google Business Profile Management Service</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Local Pack: Why It Matters More Than You Think
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When someone searches for a service in your area, Google often shows what's called the <strong className="text-slate-900">"local pack"</strong> — a map with three business listings right at the top of the page, before any regular organic results.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Getting into that local pack is enormous. Studies consistently show that the majority of clicks go to those top three listings. If your business isn't there, a lot of potential customers never even see you — no matter how great your website is.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile SEO services</strong> directly target that local pack visibility. The whole goal is to get your business appearing in front of people who are already ready to buy, call, or walk in.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Common Mistakes That Are Hurting Your Rankings Right Now
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            You'd be surprised how many businesses are actively working against themselves without realizing it. Here are the mistakes that come up again and again:
                        </p>

                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Choosing the wrong business category.</strong> Google uses your primary category as a major ranking signal. If you're a family dentist listed under "Health Clinic," you're already at a disadvantage.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Ignoring the Q&A section.</strong> Customers can ask (and answer) questions on your profile. If you're not monitoring this, wrong information can sit there for months.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Not responding to negative reviews.</strong> A single bad review isn't the end of the world. Leaving it unanswered, or responding defensively, is far worse. Professional <strong className="text-slate-900">Google Business Profile SEO services</strong> include reputation management — responding in a way that actually builds trust rather than damaging it.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Uploading blurry or irrelevant photos.</strong> Google's algorithm considers photo engagement. Dark, low-quality images don't just look bad — they can hurt your rankings.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Going weeks without any activity.</strong> A stale, inactive profile sends a signal to Google that your business might not be operational. Regular posts and updates matter.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Professional Google Business Profile SEO Services Actually Include
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            If you're going to hire someone to manage your local SEO, here's what a solid service should cover — and what <strong className="text-blue-600">Google Profile Managers</strong> focuses on for every client:
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Full Profile Audit and Setup</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Before anything else, every section of your profile gets reviewed. Business hours, service areas, attributes (like "wheelchair accessible" or "free Wi-Fi"), website links — everything is checked and corrected.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Keyword Research for Local Search</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    This isn't just stuffing your description with random phrases. It's identifying what your actual potential customers are typing into Google, and making sure your profile content reflects those terms naturally. <strong className="text-slate-900">Google Business Profile SEO services</strong> that skip keyword research are leaving rankings on the table.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Review Generation and Management</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Reviews are one of the strongest ranking signals in local search. More reviews, higher ratings, and thoughtful responses all influence where you appear. A good SEO service helps you build a steady stream of authentic reviews — not by gaming the system, but by making it easy for happy customers to leave feedback.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Google Posts Strategy</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Most businesses either never post or post randomly. A proper <strong className="text-slate-900">Google Business Profile SEO</strong> strategy includes a consistent posting schedule — seasonal offers, service updates, answers to common customer questions. It keeps your profile fresh and gives Google more content to work with.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Photo and Video Optimization</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Photos aren't just decoration. Google tracks how often users view, click, and interact with your images. Uploading the right photos (exterior, interior, team, work examples) in the right format — with proper geotags and file names — genuinely affects your visibility.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Tracking</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    You should be able to see how many people searched for your business, how many clicked your phone number, and how many requested directions. Monthly reporting is a basic expectation from any legitimate <strong className="text-slate-900">Google Business Profile SEO</strong> provider.
                                </p>
                            </div>
                        </div>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">Google Business Profile Optimization Service</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Who Actually Benefits from This?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Short answer: any business that serves customers in a specific geographic area.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That includes restaurants, dental practices, law firms, HVAC companies, real estate agents, hair salons, auto repair shops, gyms, and retail stores. If someone might search "[your service] near me" — and someone absolutely is — then a well-optimized Google Business Profile is one of the most direct ways to capture that traffic.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Small businesses especially benefit here. You don't need a massive advertising budget to compete in local search. A well-managed profile can put a family-owned plumbing company right alongside a national chain in local results — sometimes above them.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        A Note on DIY vs. Professional Management
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Can you manage your own Google Business Profile? Yes, technically. Google makes the basics accessible.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            But here's where most business owners run into trouble: local SEO isn't a one-time task. Google's algorithm updates regularly. Profile features change. Competitors are actively working to outrank you. Keeping up with all of it while running an actual business is genuinely difficult.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's why professional <strong className="text-slate-900">Google Business Profile SEO services</strong> tend to deliver better long-term results than a set-it-and-forget-it approach. It's not about doing something magical — it's about doing the right things consistently, and knowing what "right" looks like as the landscape shifts.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Bottom Line
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your business isn't showing up prominently in local search right now, the fix usually isn't a new website or a social media campaign. More often than not, it starts with your Google Business Profile.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile SEO services</strong> are one of the most cost-effective investments a local business can make — because the people you're reaching are already searching for exactly what you offer. They just haven't found you yet.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-blue-600">Google Profile Managers</strong> helps local businesses fix that. Whether you're starting from scratch or trying to improve a profile that's been neglected, the team at Google Profile Managers can help.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection5;
