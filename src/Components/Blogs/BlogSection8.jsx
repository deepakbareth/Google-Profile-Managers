import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs5.png';

const BlogSection8 = () => {
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
                        <div className="badge">Google Maps SEO services</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Maps SEO Services | Improve Local Rankings
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Maps SEO Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most people don’t scroll through ten websites anymore before choosing a plumber, a dentist, or a place to eat. They open Google, type in what they need, and pick from whatever shows up on the map. If your business isn’t in that first cluster of results, you’re probably losing customers to someone who is — even if your service is better.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That’s really the whole case for <strong className="text-slate-900">Google Maps SEO services</strong> in one sentence: showing up matters more than it used to, and it’s not going to fix itself.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Somewhere along the way, Google Maps turned into a discovery tool. People use it the way they used to use the Yellow Pages — except now it’s instant, it’s personalised, and it comes with reviews attached. When someone searches for a service "near me", Google pulls up a map pack of three local businesses in front and centre. Everyone else gets buried below the fold.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Businesses that land in that map pack get more clicks, more calls, more direction requests, and more foot traffic. Businesses that don’t... mostly get ignored, no matter how good they actually are.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here’s the part people underestimate: getting into that map pack isn’t automatic. You can’t just create a <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile</Link>, fill in your address, and expect Google to reward you. Ranking well takes accurate information, the right categories, real reviews, regular updates, and a bit of ongoing strategy. That combination is what professional <strong className="text-slate-900">Google Maps SEO services</strong> are actually built around.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Google Maps SEO Services Actually Involve
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Strip away the jargon, and Google Maps SEO comes down to one goal: making it easier for Google — and for customers — to understand exactly what your business does and where it does it.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When someone searches "best plumber in my area" or "digital marketing agency near me", Google is weighing a handful of signals behind the scenes: how relevant your business is to the search, how close you are, how established your online presence is, and how customers have rated you in the past.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            <strong className="text-slate-900">Google Maps SEO services</strong> work on improving each of those signals directly. That usually means:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Getting your business categories right</div>
                            <div className="list-item text-slate-700 text-lg">Targeting the local keywords people actually search for</div>
                            <div className="list-item text-slate-700 text-lg">Managing and responding to reviews</div>
                            <div className="list-item text-slate-700 text-lg">Building consistent citations across the web</div>
                            <div className="list-item text-slate-700 text-lg">Updating your profile regularly with posts and photos</div>
                            <div className="list-item text-slate-700 text-lg">Tracking what’s working and adjusting from there</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this is glamorous work. It's closer to maintenance than magic. But it’s the kind of maintenance that compounds — the businesses that stay on top of it tend to pull further ahead over time, not just hold steady.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Local Visibility Actually Moves the Needle
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            There’s a reason local search converts better than almost any other kind of marketing: intent. Someone Googling a local business isn’t browsing — they’re usually ready to act. They want to call, they want directions, or they want to book something today.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A strong presence on Google Maps tends to translate into:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">More phone calls from people ready to talk</div>
                            <div className="list-item text-slate-700 text-lg">More website visits from a qualified audience</div>
                            <div className="list-item text-slate-700 text-lg">More direction requests from people nearby</div>
                            <div className="list-item text-slate-700 text-lg">Stronger trust, built through visible reviews</div>
                            <div className="list-item text-slate-700 text-lg">Better rankings across local search generally</div>
                            <div className="list-item text-slate-700 text-lg">Leads that are further along than cold traffic</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            It’s a strange blind spot, honestly — plenty of business owners will spend thousands on ads or a slick new website, then leave their Google Business Profile half-finished with an outdated phone number. That’s free visibility left on the table. Investing in solid <strong className="text-slate-900">Google Maps SEO services</strong> is often the more cost-effective move, simply because you’re capturing demand that already exists instead of trying to create it from scratch.
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
                        Google Business Profile Optimisation: The Foundation
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is the backbone of all of this. It’s where customers find your name, address, phone number, hours, photos, services, and reviews — often before they ever land on your actual website.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Having a profile isn’t the same as having an optimised one. <strong className="text-slate-900">Google Business Profile SEO services</strong> typically focus on getting every section pulling its weight, including:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Choosing the most accurate primary category (this one matters more than people think)</div>
                            <div className="list-item text-slate-700 text-lg">Adding relevant secondary categories without overdoing it</div>
                            <div className="list-item text-slate-700 text-lg">Writing a business description that’s actually useful, not just keyword-stuffed</div>
                            <div className="list-item text-slate-700 text-lg">Keeping services and products current</div>
                            <div className="list-item text-slate-700 text-lg">Uploading photos that look like your business, not stock images</div>
                            <div className="list-item text-slate-700 text-lg">Publishing Google Posts on a regular cadence</div>
                            <div className="list-item text-slate-700 text-lg">Making sure every field is filled in, not just the essentials</div>
                            <div className="list-item text-slate-700 text-lg">Keeping business information consistent everywhere it appears online</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A profile that’s fully filled out gives Google more to work with — and gives customers more reasons to trust you before they’ve even called.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Ongoing Management Matters More Than a One-Time Setup
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here’s something that trips up a lot of business owners: they set up their profile once, feel good about it, and never touch it again. Meanwhile, hours change, new reviews come in, competitors update their listings, and the profile quietly goes stale.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <Link to="/optimization" className="text-blue-600 font-semibold hover:underline">Google Business Profile Optimization</Link> exist precisely for that gap. Ongoing management means someone’s actually watching the profile — posting updates, responding to reviews (good and bad), swapping in new photos, correcting information that’s drifted out of date, and keeping an eye on how the profile is performing month to month.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Customers notice this, even if they can’t articulate why. A profile with recent activity, thoughtful review responses, and current photos just reads as more trustworthy than one that hasn’t been touched since 2022.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Pieces That Actually Move Rankings
                    </h2>

                    <div className="space-y-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A lot of local SEO advice stops at "fill out your profile", which is a bit like telling someone to "eat healthy" without saying what that means. Here's where the real work happens.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Getting Your Category Right</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Your primary category should describe, as precisely as possible, what your business actually does. This single field carries more weight than most business owners realise. Pick something too broad or slightly off-target, and Google struggles to match you with the right searches — no matter how good the rest of your profile looks.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Keeping Information Accurate and Consistent</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Name, address, phone number, website, and hours — all of it needs to match across every platform where your business appears. Inconsistencies confuse search engines just as much as they confuse customers, and they’re more common than you’d expect, especially after a move or a rebrand.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Using Local Keywords the Right Way</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Local keywords help connect your profile with what people are actually typing into Google. The trick is restraint — cramming keywords into every field makes a profile read like it was written for a robot, not a customer, and Google has gotten fairly good at spotting that.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Photos That Actually Represent the Business</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Real photos of your shopfront, your team, your work, and your space do more for trust than any amount of written copy. They also signal to Google that the profile is active and maintained, which quietly helps with ranking too.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Posting Regularly</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Google Posts are an easy win that a lot of businesses skip entirely. Sharing offers, updates, or seasonal announcements gives customers a reason to engage and keeps your profile from looking abandoned.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews: The Trust Signal You Can't Fake (Don't Try)
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews do double duty — they influence rankings, and they influence whether a stranger picks up the phone. Most people check reviews before they check anything else about a local business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The approach that actually works is simple, if not always easy: make it effortless for happy customers to leave a review, respond to the good ones with genuine thanks, and handle the negative ones professionally instead of defensively. Fake reviews or review-gating schemes might work briefly, but they tend to backfire — both with Google’s policies and with customers who can smell inauthenticity from a mile away.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Paired with the rest of your <strong className="text-slate-900">Google Maps SEO services</strong>, a steady flow of honest reviews becomes one of the strongest differentiators you have against competitors.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO Beyond the Map Pack
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Maps ranking doesn’t exist in isolation. It’s tied to your broader local SEO — your website, your citations across directories, your social presence, and how consistently your business is represented everywhere it shows up online.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            <strong className="text-slate-900">Local SEO services</strong> that support Map rankings usually cover:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Local keyword research</div>
                            <div className="list-item text-slate-700 text-lg">On-page website optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Citation building across directories</div>
                            <div className="list-item text-slate-700 text-lg">NAP (name, address, phone) consistency checks</div>
                            <div className="list-item text-slate-700 text-lg">Location-specific content</div>
                            <div className="list-item text-slate-700 text-lg">Local link building</div>
                            <div className="list-item text-slate-700 text-lg">Competitor analysis</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing Google Business Profile optimisation</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            When your information lines up cleanly across the web, Google has an easier time trusting that you are who you say you are — and that trust shows up in rankings.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why It's Worth Bringing In Professionals
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Running a business is already a full-time job, and local SEO isn’t something you can knock out in an afternoon and forget. It requires actual ongoing attention — research, monitoring, tweaking, responding.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is where working with people who specialise in <strong className="text-slate-900">Google Maps SEO services</strong> tends to pay off. A dedicated team can catch the mistakes that quietly hold businesses back:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Wrong or overly broad business category</div>
                            <div className="list-item text-slate-700 text-lg">Business information that doesn’t match across platforms</div>
                            <div className="list-item text-slate-700 text-lg">Reviews left unanswered for months</div>
                            <div className="list-item text-slate-700 text-lg">A profile that hasn’t been touched in a year</div>
                            <div className="list-item text-slate-700 text-lg">Keyword stuffing that reads as spammy</div>
                            <div className="list-item text-slate-700 text-lg">Low-quality or outdated photos</div>
                            <div className="list-item text-slate-700 text-lg">Missing or inconsistent local citations</div>
                            <div className="list-item text-slate-700 text-lg">Incomplete profile fields</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of these mistakes are dramatic on their own, but together they add up to a business that’s harder to find and harder to trust.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What to Look For in a Google Maps SEO Partner
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Not every agency that claims to "do local SEO" actually understands how Google Business Profiles work day to day. Before choosing a partner, it's worth asking a few pointed questions: How much hands-on experience do they have with local search specifically? How do they approach review management? What does their reporting actually look like? Do they explain their strategy, or do they just hand you a dashboard?
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Be wary of anyone promising guaranteed rankings or instant results — local SEO depends on competition, your location, and your competition, and nobody controls Google’s algorithm outright. Sustainable results come from consistency, not shortcuts.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Getting Started
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local search is one of the few places online where customers show up already looking for exactly what you offer. Google Maps puts your business directly in front of them — but only if the groundwork is there: an optimised profile, active reviews, accurate information, and a local SEO strategy that’s actually maintained rather than set-and-forgotten.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Business Profile Managers</strong>, this is the work we focus on — combining Google Business Profile optimisation with practical <strong className="text-slate-900">Google Maps SEO services</strong> to help local businesses actually get found. Whether you need help with profile setup, ongoing management, review strategy, or broader local SEO, the goal is the same: make it easier for the right customers to find you first.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your business isn’t showing up where it should, that’s usually fixable. It just takes someone actually paying attention to it.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection8;
