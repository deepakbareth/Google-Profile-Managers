import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs7.png'; // Fallback to blogs6.png loaded dynamically

const BlogSection10 = () => {
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
                        <div className="badge">GMB profile optimization</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            GMB Profile Optimisation | Google Business Profile SEO
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="GMB Profile Optimisation"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's something most business owners don't realise until it's too late: your next customer probably already searched for you on Google Maps before they ever heard your name from a friend or saw your sign. Plumbers, dentists, restaurants, lawyers — it doesn't matter the industry, people check the map first. That's just how local search works now.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            We run <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile Managers</Link>, and over the years we've watched the same pattern play out again and again. A business with a decent product or service sits invisible on page two of Google Maps, while a competitor with a mediocre offering but a properly optimised listing pulls in most of the calls. It's frustrating to watch, honestly, because it's fixable. The fix just requires actual work — consistent <strong className="text-slate-900">GMB profile optimization</strong>, not a one-time setup and forget.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why the Map Pack Is Worth Fighting For
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When someone types "plumber near me" into Google, three businesses show up on the map before any regular search results appear. That's the Map Pack. Land there and you get most of the calls, clicks, and direction requests that search generates. Miss it, and you're competing for scraps further down the page.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            What does that actually mean for a business? More phone calls. More people hitting "get directions". More website visits from people who are already close to making a decision. And frankly, a little more trust — people assume if you're at the top, you must be doing something right, even if that's not always true.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            None of that happens by accident. It takes accurate business information, real reviews from real customers, citations that match across the web, and someone actually paying attention to the profile week to week. That last part is where most businesses fall short — they set it and forget it, and Google notices.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900 font-bold">Read more –</strong> <Link to="/management" className="link-hover">Google Business Profile Management</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        So What Does "Google Maps SEO" Actually Mean?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A lot of people assume this is just filling out a form once. It isn't. Google Maps SEO blends your website's SEO with a separate set of local trust signals that determine map rankings specifically.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A real strategy usually touches on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Google Business Profile optimisation (the foundation everything else builds on)</div>
                            <div className="list-item text-slate-700 text-lg">Targeting keywords people actually search locally</div>
                            <div className="list-item text-slate-700 text-lg">Building citations on directories that matter</div>
                            <div className="list-item text-slate-700 text-lg">Managing reviews — getting them and responding to them</div>
                            <div className="list-item text-slate-700 text-lg">Optimising location-specific pages on your site</div>
                            <div className="list-item text-slate-700 text-lg">Keeping your business name, address, and phone number identical everywhere</div>
                            <div className="list-item text-slate-700 text-lg">Building local backlinks</div>
                            <div className="list-item text-slate-700 text-lg">Watching what competitors are doing</div>
                            <div className="list-item text-slate-700 text-lg">Updating the profile regularly instead of ignoring it</div>
                            <div className="list-item text-slate-700 text-lg">Tracking whether any of this is actually working</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of these alone will get you to the top. Together, they usually do.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Google Business Profile Deserves More Attention Than It Gets
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            I'll be blunt: most businesses create a Google Business Profile, fill out maybe 60% of it, and never look at it again. That's a mistake, because this profile is one of the strongest ranking factors you have direct control over.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Real <strong className="text-slate-900">GMB profile optimization</strong> means going through every section and getting it right — your business name exactly as it appears in real life (no keyword stuffing, Google will catch that), the right primary and secondary categories, a description that actually says something useful, correct hours, a full list of what you offer, decent photos, and answers to the questions people leave in your Q&A section. Even weekly posts matter more than people think.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When all of that is filled in properly, Google has an easier time figuring out who you are and who should be shown your listing. Skip half of it, and you're basically asking Google to guess.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why People Hire Someone to Do GMB Profile Optimisation For Them
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most business owners don't have time to babysit a Google listing every week — and honestly, that's fair. Running the actual business comes first. That's the whole reason <Link to="/optimization" className="link-hover">Google Business Profile Optimization</Link> services exist.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A decent service will clean up and complete your profile, write descriptions that don't read like keyword soup, pick the right categories, optimise your photos, post local content on some kind of schedule, and build a system for generating and responding to reviews. The point isn't to make the profile "look nice". It's to make it work — to actually pull in calls and visits.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google My Business, Google Business Profile — Same Idea, Different Name
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google renamed "Google My Business" to "Google Business Profile" a while back, but a surprising number of people still search for the old name out of habit. Doesn't really matter what you call it. The goal is the same: accurate business info, more trust, better local relevance, and stronger search visibility.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local SEO and Maps Optimisation Aren't Separate Things
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is where a lot of businesses go wrong — they treat their website and their Google Business Profile like two unrelated projects. They're not. When your local SEO and your <strong className="text-slate-900">GMB profile optimization</strong> work together, rankings tend to move faster than when you only focus on one.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That means local landing pages, decent internal linking, technical SEO that isn't broken, schema markup, a website that actually works on a phone, local backlinks, and citations that match everywhere. Your website is the foundation. Your Google profile is the shopfront. Neither one works well without the other.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        An Active Profile Beats a Static One, Every Time
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google tends to favour businesses that show signs of life. A profile untouched for eight months sends a completely different signal than one updated weekly. This is the part of <strong className="text-slate-900">GMB profile optimization</strong> that's easy to ignore and expensive to skip — weekly Google Posts, fresh photos, quick responses to reviews, updated hours around holidays, seasonal promotions, and new products added as they come up.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's not glamorous work. But it's the difference between a profile Google trusts and one it quietly stops showing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Matter More Than Most Businesses Want to Admit
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If there's one single factor that moves local rankings the most, it's genuine customer reviews. Not fake ones — Google is better at catching those than people think. Real reviews, from real customers, responded to professionally, whether they're glowing or a little rough.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The payoff is straightforward: better rankings, more trust, higher click-through rates, and more conversions. Reviews also make everything else in your <strong className="text-slate-900">GMB profile optimization</strong> strategy work harder, because Google weighs review signals heavily when deciding who deserves the top spots.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Citations Are Boring, but They Matter
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A citation is just any place online that lists your business name, address, and phone number. Directories, industry listings, social profiles, and Chamber of Commerce pages — wherever your info shows up, it needs to match exactly. Not "St." in one place and "Street" in another. Small inconsistencies add up, and Google reads them as a red flag rather than a typo.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Website Still Carries Weight
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google profile gets the attention, but your website is still doing real work behind the scenes. Location-specific pages, natural (not stuffed) local keywords, fast load times, mobile-friendly design, structured data, and content that's actually useful — all of it reinforces what your <strong className="text-slate-900">GMB profile optimization</strong> is trying to accomplish. Skip the website and you're fighting with one hand tied behind your back.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Mistakes That Quietly Cost You Rankings
                    </h2>

                    <div className="space-y-6 font-bold mb-6">
                        Most ranking problems aren't dramatic. They're small oversights that pile up:
                    </div>

                    <div className="space-y-3">
                        <div className="list-item text-slate-700 text-lg">An incomplete profile</div>
                        <div className="list-item text-slate-700 text-lg">The wrong phone number</div>
                        <div className="list-item text-slate-700 text-lg">The wrong category selected months ago and never fixed</div>
                        <div className="list-item text-slate-700 text-lg">Reviews nobody responds to</div>
                        <div className="list-item text-slate-700 text-lg">Citations that don't match</div>
                        <div className="list-item text-slate-700 text-lg">Photos that look like they're from 2015</div>
                        <div className="list-item text-slate-700 text-lg">Duplicate listings competing against each other</div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mt-8">
                        Fix even two or three of these and you'll usually notice a shift within a few weeks.
                    </p>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What You Actually Get From Doing This Right
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Businesses that commit to <strong className="text-slate-900">Google Maps SEO services</strong> tend to see growth that compounds instead of fading the moment a campaign ends. Higher rankings, more traffic, better leads, more calls, more direction requests — and unlike paid ads, it keeps paying off long after the initial work is done. That's the real argument for doing this properly instead of throwing money at ads and hoping.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 14 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Bother Hiring Someone For This
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google's local algorithm considers a genuinely absurd number of factors, and most of them shift over time without warning. Keeping up with that on your own, on top of actually running a business, is a lot to ask. People who do this daily know how to build relevance, strengthen authority signals, watch competitors, and catch small optimisation opportunities before they turn into missed rankings. Handing it off means you get to focus on customers instead of Google's algorithm updates.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 15 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Where This Leaves You
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you want more local leads, more calls, and more people actually walking through your door, <strong className="text-slate-900">Google Maps SEO services</strong> are one of the more reliable long-term investments a local business can make. Combine solid <strong className="text-slate-900">GMB profile optimization</strong> with real reviews, matching citations, and a website that pulls its weight, and you end up with visibility that competitors without a strategy simply can't match.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A well-managed profile paired with a decent website doesn't just bring in traffic for a month. Done properly, it keeps working in the background for years.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection10;
