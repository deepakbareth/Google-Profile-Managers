import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs17.png'; // Using blogs17.png as placeholder

const BlogSection20 = () => {
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
                        <div className="badge">GBP Cleanup</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile Cleanup Service | Expert Help
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Improve your local presence with a Google Business Profile cleanup service. Fix errors, remove duplicates, and optimise your profile.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Cleanup Service"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a local business, your <Link to="/" className="link-hover">Google Business Profile</Link> is probably doing more work than you realise. It's often the very first thing a potential customer sees before they ever visit your website — the phone number they call, the hours they trust, the reviews they read before deciding whether to walk through your door. When that information is wrong, outdated, or scattered across duplicate listings, it doesn't just look sloppy. It actively costs you business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's exactly the problem a <strong className="text-slate-900">Google Business Profile cleanup service</strong> is built to solve. At Google Business Profile Managers, we spend our days digging into profiles, fixing what's broken, and making sure the information Google shows to your customers actually matches reality.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Let's walk through what a cleanup really involves, why it matters, and how to know if your listing needs one.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does "Cleaning Up" a Google Business Profile Actually Mean?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, cleaning up a Google Business Profile means going through every piece of information tied to your listing and making sure it's correct, current, and working in your favour. It's less about a quick edit here and there and more about a thorough audit of everything Google—and your customers—can see.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A proper cleanup usually touches on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Business name, address, and phone number</div>
                            <div className="list-item text-slate-700 text-lg">Website URL</div>
                            <div className="list-item text-slate-700 text-lg">Regular and holiday hours</div>
                            <div className="list-item text-slate-700 text-lg">Primary and secondary categories</div>
                            <div className="list-item text-slate-700 text-lg">Business description</div>
                            <div className="list-item text-slate-700 text-lg">Listed services and products</div>
                            <div className="list-item text-slate-700 text-lg">Photos</div>
                            <div className="list-item text-slate-700 text-lg">Reviews and how they're being handled</div>
                            <div className="list-item text-slate-700 text-lg">Attributes (wheelchair accessible, women-owned, etc.)</div>
                            <div className="list-item text-slate-700 text-lg">Location and map pin accuracy</div>
                            <div className="list-item text-slate-700 text-lg">Duplicate listings</div>
                            <div className="list-item text-slate-700 text-lg">Who actually owns and manages the profile</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A basic edit fixes a typo. A real <strong className="text-slate-900">Google Business Profile cleanup service</strong> goes further — it looks for the problems you didn't know you had, the ones quietly costing you calls and clicks.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/services" className="link-hover">Google Maps ranking service</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Do Profiles Get Messy in the First Place?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Businesses evolve. You move locations, swap phone providers, add new services, change your hours for the season, or rebrand entirely. Every one of those changes needs to be reflected on Google — and it's easy for that step to fall through the cracks while you're focused on actually running the business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Picture this: someone finds your business on Google, dials the number listed, and it's disconnected. Or they show up at an address you left two years ago. That's not a hypothetical — it happens constantly, and it's usually why business owners start searching for a <strong className="text-slate-900">Google Business Profile cleanup service</strong> in the first place.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here are the most common culprits behind a messy profile:
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Outdated or Incorrect Information</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Wrong hours, an old phone number, or a stale address chip away at customer trust fast. People expect what they see on Google to be accurate — when it isn't, they simply move on to a competitor.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Duplicate Listings</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Somewhere along the way, a second (or third) version of your profile got created. Now your reviews are split, your information is inconsistent, and Google doesn't know which listing to trust or show.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">3. The Wrong Category</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Your primary category tells Google what kind of business you actually are. Pick the wrong one, or something too broad, and you may be invisible for the exact searches you should be winning.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Stale Photos</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Photos that no longer reflect your current space, staff, or products send the wrong signal — and they do nothing to convince a new customer to choose you.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Inconsistent Details Across the Web</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    If your address on Google doesn't match what's listed on your website, Yelp, or Facebook, it creates confusion for both customers and Google's algorithm. Consistency matters more than most business owners realise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Cleanup vs. Ongoing Management: What's the Difference?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            These two terms get used interchangeably, but they're not quite the same thing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Cleanup</strong> is about fixing what's already broken — correcting wrong details, resolving duplicates, updating stale content, and closing the gaps.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google Business Profile management</strong> is what happens after that: the ongoing work of posting updates, monitoring reviews, refreshing photos, and keeping everything accurate as your business changes over time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most businesses need both. Think of cleanup as clearing the slate, and management as what keeps that slate clean going forward.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Optimisation Matters Once the Errors Are Fixed
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Fixing mistakes gets you back to zero. Optimisation is what actually moves the needle.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Once your <strong className="text-slate-900">Google Business Profile cleanup service</strong> has corrected the basics, the next step is making the profile genuinely useful and competitive. That typically includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Choosing categories that accurately reflect what you do</div>
                            <div className="list-item text-slate-700 text-lg">Writing a clear, informative business description</div>
                            <div className="list-item text-slate-700 text-lg">Listing your real, current services</div>
                            <div className="list-item text-slate-700 text-lg">Keeping hours updated</div>
                            <div className="list-item text-slate-700 text-lg">Uploading quality, recent photos</div>
                            <div className="list-item text-slate-700 text-lg">Adding products where relevant</div>
                            <div className="list-item text-slate-700 text-lg">Responding to reviews consistently</div>
                            <div className="list-item text-slate-700 text-lg">Applying accurate attributes</div>
                            <div className="list-item text-slate-700 text-lg">Posting regular Google updates</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            The goal isn't to stuff the profile with information for its own sake — it's to make sure everything there is accurate, relevant, and helpful to someone deciding whether to choose your business.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What's Actually Included in a Professional GBP Cleanup
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's a closer look at what a thorough <strong className="text-slate-900">GBP cleanup service</strong> covers in practice:
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Profile Information Review</strong> — Every core detail (name, address, phone, website, hours) gets checked against what's actually true today.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Category Review</strong> — We confirm your primary category is the strongest possible match and evaluate whether secondary categories are helping or hurting your visibility.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Duplicate Listing Check</strong> — We search for extra or conflicting listings tied to your business and work out the right way to resolve them.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Service and Product Review</strong> — Businesses add new offerings all the time and forget to update Google. We make sure what's listed matches what you actually sell today.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Photo Review</strong> — Outdated or low-quality images get flagged, and we help identify what should be added to better represent your business.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Review Monitoring</strong> — Reviews shape reputation. Part of a cleanup involves setting up a process to catch and respond to new feedback promptly and professionally.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Fixing Common Errors: What Correction Looks Like
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <Link to="/services" className="link-hover">Local business listing optimization</Link> becomes necessary anytime the information customers see doesn't line up with reality. The usual suspects include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Wrong or outdated hours</div>
                            <div className="list-item text-slate-700 text-lg">Disconnected or incorrect phone numbers</div>
                            <div className="list-item text-slate-700 text-lg">An old address</div>
                            <div className="list-item text-slate-700 text-lg">A broken or outdated website link</div>
                            <div className="list-item text-slate-700 text-lg">The wrong business category</div>
                            <div className="list-item text-slate-700 text-lg">Missing services</div>
                            <div className="list-item text-slate-700 text-lg">Incorrect attributes</div>
                            <div className="list-item text-slate-700 text-lg">An outdated description</div>
                            <div className="list-item text-slate-700 text-lg">Map pin errors</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Corrections need to be handled carefully and in line with Google's guidelines—the goal is always to represent your real, current business, not to game the system.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why an Audit Should Come First
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Before jumping into fixes, it's worth stepping back and running a full <strong className="text-slate-900">Google Business Profile audit</strong>. This gives you a clear snapshot of where things actually stand before you start changing anything.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A solid audit looks at:
                        </p>

                        <div className="space-y-2 mt-4 ml-4">
                            <p className="text-lg text-slate-700">1. Overall profile completeness</p>
                            <p className="text-lg text-slate-700">2. Accuracy of business information</p>
                            <p className="text-lg text-slate-700">3. Category selection</p>
                            <p className="text-lg text-slate-700">4. Business description quality</p>
                            <p className="text-lg text-slate-700">5. Listed services</p>
                            <p className="text-lg text-slate-700">6. Photo quality and relevance</p>
                            <p className="text-lg text-slate-700">7. Review activity and responses</p>
                            <p className="text-lg text-slate-700">8. Duplicate listings</p>
                            <p className="text-lg text-slate-700">9. Current visibility</p>
                            <p className="text-lg text-slate-700">10. Local SEO opportunities being missed</p>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Those findings become the roadmap for the cleanup and optimisation work that follows.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Real Benefits of Hiring a Professional Cleanup Service
                    </h2>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">More Accurate Information</strong> Customers trust profiles that are current — and trust translates directly into calls, visits, and sales.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">A Better Customer Experience</strong> When hours, contact details, and services are clear and correct, customers can actually act on what they see.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">A Stronger Local Presence</strong> A complete, well-maintained profile gives both Google and customers more reasons to choose you.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Less Confusion:</strong> Resolving duplicates and inconsistencies cleans up your entire online footprint, not just one listing.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">Better Reputation Management</strong> Consistent review monitoring and thoughtful responses go a long way toward building trust.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900">A More Professional Look</strong> Updated photos and accurate details simply make your business look more established and credible.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Often Should You Actually Do This?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            There's no single rule that fits every business, but a good general guideline is to review your profile any time something in your business changes. That includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Moving locations</div>
                            <div className="list-item text-slate-700 text-lg">Changing your phone number</div>
                            <div className="list-item text-slate-700 text-lg">Updating your website</div>
                            <div className="list-item text-slate-700 text-lg">Adjusting your hours</div>
                            <div className="list-item text-slate-700 text-lg">Adding new services</div>
                            <div className="list-item text-slate-700 text-lg">Rebranding or changing your business name</div>
                            <div className="list-item text-slate-700 text-lg">Opening or closing a location</div>
                            <div className="list-item text-slate-700 text-lg">Receiving significant customer feedback</div>
                            <div className="list-item text-slate-700 text-lg">Noticing changes Google itself has made to your listing</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Even if nothing has changed on your end, it's smart to check in periodically. Google updates its systems, and small errors can creep in without you noticing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Don't Let Small Errors Cost You Big Opportunities
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's tempting to brush off a small mistake on your profile — a slightly outdated phone number, a missing service, an old photo. But for the customer looking at it, that small error might be the reason they choose someone else instead.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is frequently the first real impression people get of your business. Treating it as a core part of your local marketing strategy, rather than an afterthought, is what separates businesses that get found from those that don't.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Work With a Trusted Google Business Profile Cleanup Service
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keeping a profile accurate takes ongoing attention — reviewing details, catching errors, monitoring changes, and updating information as your business grows. That's a lot to manage on top of actually running your business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-slate-900">Google Business Profile Managers</strong>, our <strong className="text-slate-900">Google Business Profile cleanup service</strong> is built to take that weight off your shoulders. We find the problems, fix what's broken, resolve duplicate listings, and lay the groundwork for a profile that actually works in your favour — not against you.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is far more than a simple online listing. It's a working tool that helps people find you, understand what you offer, get in touch, and decide whether to trust you before they ever set foot in your business.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keeping it accurate isn't a one-and-done task — it's an ongoing responsibility that pays off in more calls, more visits, and more customers who trust what they see.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection20;
