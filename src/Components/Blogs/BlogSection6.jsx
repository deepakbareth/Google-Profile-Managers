import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs3.png';

const BlogSection6 = () => {
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
                        <div className="badge">Google My Business management service</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile SEO Services Expert Local SEO
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google My Business Management Service"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most people don’t walk into a shop cold anymore. They search first. They check the hours, look at a few photos, skim the reviews, and only then decide whether to call, drive over, or scroll past to the next result. For a local business, that search result is often the whole first impression — and if your listing is thin, outdated, or just plain wrong, you’ve lost the customer before you ever got the chance to talk to them.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That’s the gap a <strong className="text-slate-900 font-semibold">Google My Business management service</strong> is built to close.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Business Profile — you might still know it by its old name, Google My Business — is the free listing that shows your business name, address, phone number, hours, services, photos, and reviews right inside Google Search and Maps. Setting one up takes ten minutes. Keeping it accurate, competitive, and actually working for you? That’s the part most owners don’t have time for, and it’s where things quietly fall apart.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Profile Managers</strong>, this is what we do all day. We manage and optimise Google Business Profiles for local businesses so they show up when it matters — when someone nearby is actively looking for what they sell.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does a Google My Business Management Service Actually Involve?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Strip away the jargon, and a <strong className="text-slate-900 font-semibold">Google My Business management service</strong> is simply someone keeping your profile in good shape, week after week, instead of once and never again. Whether you handle this in-house or hand it to a <strong className="text-slate-900 font-semibold">Google My Business management service</strong> provider, the tasks themselves don't change — only who's doing them and how consistently.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            In practice, that usually covers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">
                                Setting up and optimising the profile from scratch (or fixing one that was set up badly)
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Choosing the right primary and secondary categories
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Keeping business info—hours, phone number, address—current
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Writing out services and products so they're actually searchable
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Publishing regular Google Posts
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Adding new photos and video on a schedule, not sporadically
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Monitoring and responding to reviews
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Working in local keywords where they belong
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Improving how the business shows up on Google Maps
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Keeping an eye on what competitors are doing
                            </div>
                            <div className="list-item text-slate-700 text-lg">
                                Reporting on what’s working and what isn’t
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this is glamorous. It's maintenance work. But a profile that gets this kind of attention tends to look — and perform — very differently from one that's been left alone since the day it was created.
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
                            Here’s the thing: your Google Business Profile is often the <em>first</em> thing a potential customer sees about you, full stop — before your website, before a friend’s recommendation, before anything else. When someone searches "plumber near me" or "coffee shop open now", Google surfaces a local pack of a few businesses. Whether you’re one of them, and whether your listing makes a good case for itself once you are, has a real effect on whether the phone rings.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A profile that’s properly managed gives customers fast, accurate answers to the questions they actually have:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Where are you?</div>
                            <div className="list-item text-slate-700 text-lg">How do I reach you?</div>
                            <div className="list-item text-slate-700 text-lg">Are you open right now?</div>
                            <div className="list-item text-slate-700 text-lg">What do you actually do?</div>
                            <div className="list-item text-slate-700 text-lg">Do other people trust you?</div>
                            <div className="list-item text-slate-700 text-lg">What do you look like inside?</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            If your hours are wrong, or your phone number is outdated, or half your services aren’t listed, you’re not just missing an opportunity — you’re actively sending people to the competitor down the street who got this right.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">Google Business Profile Optimization</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Getting Found on Google Maps
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google Maps deserves its own mention because so much local search behaviour happens there specifically. Someone looking for a nearby restaurant, salon, mechanic, or tradesperson is very often opening Maps directly, not typing into a browser.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Our <strong className="text-slate-900">Google Maps SEO services</strong> focus on the pieces that actually move the needle here: accurate categorisation, well-written service descriptions, a steady stream of relevant photos, and consistent profile activity. Google’s local ranking depends on relevance, distance, and prominence — and while nobody can promise you a specific spot on the map (be sceptical of anyone who does), consistent, deliberate optimisation is what strengthens your position over time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Pieces Worth Getting Right
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            A few specific areas tend to make or break a profile’s performance:
                        </p>

                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Categories.</strong> Your primary category tells Google, in one word, what you are. Get it wrong — or too generic — and you’ll quietly miss searches that should have found you.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">The Business Description.</strong> This should read like it was written for a human deciding whether to call you, not stuffed with keywords for a search engine. Clear, specific, honest — that’s what works.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Services and Products.</strong> Vague listings don’t help anyone. "Plumbing services" tells a customer almost nothing. "Emergency drain unblocking" tells them exactly what they need to know.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Photos.</strong> People judge a business by its photos before they ever walk in. Fresh, real images — not stock photos — build trust fast.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-slate-900 font-bold">Google Posts.</strong> Think of these as small, regular signals that someone’s actually running the account. Offers, updates, seasonal news — it keeps the profile looking alive.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Ongoing Management Beats a One-Time Setup
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here’s a pattern we see constantly: a business owner sets up their profile carefully when they first open, and then it just... sits there. No new photos in a year. Reviews go unanswered for months. Hours are wasted over a holiday weekend, and nobody catches it.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is exactly where a <strong className="text-[#1e293b] font-semibold">Google My Business management service</strong> earns its keep. Instead of the profile being an afterthought, it becomes something someone is actually watching — reviewing what’s there, spotting gaps, updating content, publishing posts, checking reviews, and tracking what’s actually happening with performance.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A reasonable ongoing rhythm looks something like this:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Full review of the current profile</div>
                            <div className="list-item text-slate-700 text-lg">Spotting what’s missing or outdated</div>
                            <div className="list-item text-slate-700 text-lg">Updating core business information</div>
                            <div className="list-item text-slate-700 text-lg">Rewriting or expanding service content</div>
                            <div className="list-item text-slate-700 text-lg">Publishing new posts regularly</div>
                            <div className="list-item text-slate-700 text-lg">Watching and responding to reviews</div>
                            <div className="list-item text-slate-700 text-lg">Checking in on what competitors are doing</div>
                            <div className="list-item text-slate-700 text-lg">Tracking performance data</div>
                            <div className="list-item text-slate-700 text-lg">Adjusting the approach based on what the numbers show</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Local search isn’t static. Competitors update their listings, customer expectations shift, and Google’s own algorithm changes. A profile that was great a year ago can quietly slip if nobody’s tending to it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Are Doing More Work Than You Think
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Before someone calls a business, a lot of them read the reviews first. That’s just how trust gets built online now. A strong review section — and thoughtful responses to it — tells a stranger you’re worth their time before they’ve even spoken to you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Part of a solid <strong className="text-slate-900">Google My Business management service</strong> is simply staying on top of this: noticing new reviews quickly and responding in a way that’s genuine, not copy-pasted. Answer the good ones with actual gratitude. Answer the bad ones without getting defensive. And never, under any circumstances, fake reviews — Google penalises it, and customers can usually smell it anyway.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Where This Fits Into Local SEO More Broadly
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is one piece of a bigger picture. Our <strong className="text-slate-900">local SEO services for businesses</strong> look at how your profile connects to everything else — <Link to="/web-services" className="link-hover">Google Business Profile Web Services</Link>, your citations, your local content, your backlinks.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            That wider work typically includes:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Content and keyword research</div>
                            <div className="list-item text-slate-700 text-lg">Citation management across directories</div>
                            <div className="list-item text-slate-700 text-lg">Local content creation</div>
                            <div className="list-item text-slate-700 text-lg">Review strategy</div>
                            <div className="list-item text-slate-700 text-lg">Location page optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Competitor research</div>
                            <div className="list-item text-slate-700 text-lg">Local link building</div>
                            <div className="list-item text-slate-700 text-lg">NAP consistency (Name, Address, Phone — kept identical everywhere online)</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Inconsistent business details across the web confuse both customers and Google. Getting your NAP consistent is one of those unglamorous fixes that quietly pays off.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Bring In a Professional?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Managing a profile yourself is completely doable in theory. In practice, most owners are running the actual business, and this ends up at the bottom of the list, week after week, until a year’s gone by and nothing’s changed.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Professional <strong className="text-slate-900">Google Business Profile management services</strong> exist to take that off your plate. What you typically get:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Regular, consistent updates instead of sporadic ones</div>
                            <div className="list-item text-slate-700 text-lg">Content that’s actually optimised, not just filled in</div>
                            <div className="list-item text-slate-700 text-lg">Better visibility in local search over time</div>
                            <div className="list-item text-slate-700 text-lg">Reviews handled promptly and professionally</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing tracking of what’s working</div>
                            <div className="list-item text-slate-700 text-lg">A clearer read on what competitors are doing</div>
                            <div className="list-item text-slate-700 text-lg">Your own time back</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            It’s also worth saying: an outside eye catches things owners miss. Wrong categories, thin service lists, and photos that haven’t been touched since opening day — these are easy to overlook when you’re inside the business every day.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Think Long-Term, Not One-and-Done
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A profile that gets set up well and then ignored isn’t going to keep performing. Local visibility rewards consistency — regular posts, fresh photos, accurate information, and active review management.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A dependable <strong className="text-slate-900">Google My Business management service</strong> treats this as ongoing work, not a project with an end date. And the real goal was never just profile views. It’s what those views turn into:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Phone calls</div>
                            <div className="list-item text-slate-700 text-lg">Website clicks</div>
                            <div className="list-item text-slate-700 text-lg">Direction requests</div>
                            <div className="list-item text-slate-700 text-lg">Bookings</div>
                            <div className="list-item text-slate-700 text-lg">Enquiries</div>
                            <div className="list-item text-slate-700 text-lg">Actual foot traffic</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            What that mix looks like depends entirely on your business, your industry, and your customers — which is exactly why a generic, set-it-and-forget-it approach rarely gets great results, and why a tailored <strong className="text-slate-900">Google My Business management service</strong> tends to outperform a cookie-cutter one.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Ready to Fix Your Profile?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile is one of the most valuable — and most neglected — marketing assets a local business has. Left alone, it quietly underperforms. Managed properly, it becomes one of the most reliable sources of new customers you have.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Profile Managers</strong>, we handle the day-to-day work of keeping your profile accurate, optimised, and active — from Maps visibility to review management to the local SEO that supports it all.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection6;
