import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs9.png'; // Fallback to blogs.png b or blogs8.png if created later

const BlogSection12 = () => {
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
                        <div className="badge">Local business listing optimization</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Local Business Listing Optimisation | Google Profile Managers
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Local Business Listing Optimisation"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a local business, you already know the game has changed. People don't flip through phone books anymore, and they don't just stumble past your shopfront either — they pull out their phones, type in what they need, and pick from whatever Google shows them first. If your business isn't sitting right there in front of them when they search, you're basically invisible to a huge chunk of potential customers walking (or driving) right past your door.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's the whole point of <strong className="text-slate-900">Local business listing optimization</strong>. It's not some abstract marketing buzzword — it's the practical work of making sure your business shows up, looks trustworthy, and gives people a reason to choose you over the shop down the street. Get it right, and you'll see more calls, more foot traffic, and more people typing your address into their GPS.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It doesn't matter if you're an electrician, a dentist, a family-run restaurant, a lawyer, or a boutique retail store — this kind of optimisation pays off across the board.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Is Local Business Listing Optimization, Really?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, <strong className="text-slate-900">Local business listing optimization</strong> means cleaning up and improving how your business appears across online directories—with your <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile</Link> being the big one. The goal is simple: help Google (and your customers) understand exactly who you are, what you do, and why you're worth choosing.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            In practice, this usually involves:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Making sure your business info is accurate everywhere it appears</div>
                            <div className="list-item text-slate-700 text-lg">Choosing the categories that actually describe what you do</div>
                            <div className="list-item text-slate-700 text-lg">Writing descriptions that include the phrases people are actually searching for</div>
                            <div className="list-item text-slate-700 text-lg">Uploading photos that look current and professional</div>
                            <div className="list-item text-slate-700 text-lg">Keeping on top of customer reviews</div>
                            <div className="list-item text-slate-700 text-lg">Posting updates regularly instead of letting your profile go stale</div>
                            <div className="list-item text-slate-700 text-lg">Checking your performance data so you know what’s working</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Do this consistently, and Google has a much easier time figuring out where to place you — which usually means a spot in the Local Pack or a solid ranking on Google Maps.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Does Any of This Matter?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's a number worth sitting with: over 90% of people research a business online before they ever walk through the door. If your listing has an old phone number, a wrong address, or barely any photos, you're not just losing a little polish — you're actively pushing customers toward your competitors.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            On the flip side, businesses that keep their listings sharp tend to see:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">More visibility in local search results</div>
                            <div className="list-item text-slate-700 text-lg">More clicks through to their website</div>
                            <div className="list-item text-slate-700 text-lg">More phone calls from people ready to buy</div>
                            <div className="list-item text-slate-700 text-lg">Stronger trust before a customer even walks in</div>
                            <div className="list-item text-slate-700 text-lg">More people actually showing up in person</div>
                            <div className="list-item text-slate-700 text-lg">Better rankings on Google Maps</div>
                            <div className="list-item text-slate-700 text-lg">A reputation that builds on itself over time</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this is guesswork — businesses with complete, well-maintained profiles consistently outperform the ones that leave their listings half-finished.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900 font-bold">Read more –</strong> <Link to="/management" className="link-hover">Google Business Profile Management</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Google Business Profile Is Doing More Work Than You Think
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google Business Profile isn't just a digital business card. It's often the very first impression someone gets of your business — before your website, before a phone call, before anything else.
                        </p>
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A well-managed profile lets potential customers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Find you in seconds</div>
                            <div className="list-item text-slate-700 text-lg">See what services or products you offer</div>
                            <div className="list-item text-slate-700 text-lg">Read what past customers actually thought</div>
                            <div className="list-item text-slate-700 text-lg">Call you directly from the search results</div>
                            <div className="list-item text-slate-700 text-lg">Jump straight to your website</div>
                            <div className="list-item text-slate-700 text-lg">Get turn-by-turn directions</div>
                            <div className="list-item text-slate-700 text-lg">Check your hours before showing up</div>
                            <div className="list-item text-slate-700 text-lg">Scroll through photos of your space, your team, or your work</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Given how much weight this one profile carries, Google Business Profile optimisation deserves to be a central piece of your local marketing plan — not an afterthought.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Building Blocks of Local Business Listing Optimisation
                    </h2>

                    <div className="space-y-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Setting up a profile is easy. Optimising it properly is where the real value shows up. Here's what actually moves the needle.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Get Your Basic Information: Rock-Solid</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Your business name, address, phone number, website, and hours need to match — exactly — everywhere they appear online. Sounds small, but inconsistencies here quietly erode trust with both Google's algorithm and real customers trying to reach you.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Use Keywords the Way People Actually Search</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Work relevant search terms naturally into your business description, services list, product listings, posts, and FAQs. The key word here is <strong className="text-slate-900 font-bold">naturally</strong> — <strong className="text-slate-900 font-bold">stuffing</strong> keywords in awkwardly does more harm than good. This is where thoughtful <Link to="/optimization" className="link-hover">Google Business Profile Optimization</Link> really separates professional profiles from neglected ones.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Don't Skimp on Photos</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Listings with strong, current photography get noticeably more engagement. Show your shopfront, your team, your workspace, your products, and — if it fits your industry — before-and-after shots of your work. Fresh photos tell Google (and customers) that your business is alive and active, not a ghost town.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">4. Treat Reviews Like the Asset They Are</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Reviews shape both purchasing decisions and your local search ranking. Encourage happy customers to leave honest feedback, ideally mentioning the specific service they used. And always, always respond — professionally, every time, good review or bad.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">5. Keep Posting</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Regular updates — offers, seasonal promos, new services, customer wins, quick tips — signal to Google that someone's actually behind the wheel of this profile. Inactive listings tend to fade in relevance; active ones climb.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How This Actually Affects Your Rankings
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google leans on three main signals when deciding who shows up first in local results:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Relevance</strong> — how well your listing matches what someone typed in</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Distance</strong> — how close your business is to the person searching</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Prominence</strong> — your overall reputation: reviews, citations, backlinks, and general authority</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Solid <strong className="text-slate-900">Local business listing optimization</strong> strengthens all three of these at once, which is exactly why it's worth the ongoing effort rather than a one-time setup.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Spelling Aside, the Goal Is the Same
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            You'll see it written both ways — optimisation and optimization — but <strong className="text-slate-900">Local business listing optimisation</strong> describes the exact same process, just with a British spelling. Businesses that stick with it long-term consistently see better visibility, more engagement, more enquiries, and — ultimately — more conversions. This isn't a one-and-done project; it's an ongoing investment.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Don't Underestimate Google Maps
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A huge number of searchers never scroll past the map results. If you're not visible there, you might as well not exist to them. Strong Google Maps SEO tends to bring in more phone calls, more direction requests, more site visits, and generally more trust — often outperforming traditional advertising when it comes to qualified local leads.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Professional Management Makes Sense
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed font-bold">
                            Keeping a listing sharp isn't a "set it and forget it" task — it takes ongoing attention. Professional Google Business Profile management typically covers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Keeping business details current</div>
                            <div className="list-item text-slate-700 text-lg">Publishing regular posts</div>
                            <div className="list-item text-slate-700 text-lg">Watching and responding to reviews</div>
                            <div className="list-item text-slate-700 text-lg">Refreshing photos</div>
                            <div className="list-item text-slate-700 text-lg">Tracking insights and performance</div>
                            <div className="list-item text-slate-700 text-lg">Making ranking improvements over time</div>
                            <div className="list-item text-slate-700 text-lg">Keeping the overall profile healthy</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Handing this off to people who do it daily frees you up to actually run your business, instead of babysitting a listing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Listings Are Just One Piece of the Local SEO Puzzle
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your listings feed directly into broader <strong className="text-slate-900">Local SEO services</strong>, which typically include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Business listing management</div>
                            <div className="list-item text-slate-700 text-lg">Citation consistency across the web</div>
                            <div className="list-item text-slate-700 text-lg">On-site optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Review management</div>
                            <div className="list-item text-slate-700 text-lg">Locally focused content</div>
                            <div className="list-item text-slate-700 text-lg">Technical SEO fixes</div>
                            <div className="list-item text-slate-700 text-lg">Link building</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Combine these pieces well, and your local online presence becomes genuinely hard to ignore.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes That Quietly Hurt Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A lot of businesses shoot themselves in the foot without realising it. Common culprits include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Choosing the wrong business category</div>
                            <div className="list-item text-slate-700 text-lg">Contact details that don't match across platforms</div>
                            <div className="list-item text-slate-700 text-lg">Ignoring reviews entirely</div>
                            <div className="list-item text-slate-700 text-lg">Barely any photos uploaded</div>
                            <div className="list-item text-slate-700 text-lg">Leaving the profile incomplete</div>
                            <div className="list-item text-slate-700 text-lg">Never posting anything</div>
                            <div className="list-item text-slate-700 text-lg">Not checking performance data</div>
                            <div className="list-item text-slate-700 text-lg">Letting information go stale</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Fixing these issues alone can noticeably improve both your rankings and how much customers trust you at first glance.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Work With Google Profile Managers?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Doing this well takes real expertise, consistent attention, and someone actually watching the numbers. At <strong className="text-blue-600 font-semibold">Google Profile Managers</strong>, that's exactly what we do — we help businesses get the most out of their online visibility through hands-on, professional optimisation.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Here's what we focus on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Full profile optimisation from top to bottom</div>
                            <div className="list-item text-slate-700 text-lg">Keeping citations consistent everywhere</div>
                            <div className="list-item text-slate-700 text-lg">Managing and responding to reviews</div>
                            <div className="list-item text-slate-700 text-lg">Monitoring performance over time</div>
                            <div className="list-item text-slate-700 text-lg">Watching what competitors are doing</div>
                            <div className="list-item text-slate-700 text-lg">Smart, natural keyword placement</div>
                            <div className="list-item text-slate-700 text-lg">Google Maps ranking improvements</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing monthly updates so nothing goes stale</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Our whole goal is simple: help your business generate more real leads through better local visibility.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At the end of the day, <strong className="text-slate-900">Local business listing optimization</strong> isn't optional anymore — it's one of the smartest, most cost-effective moves a local business can make. A properly optimised listing doesn't just look nice; it directly drives more visibility, more customers, and more long-term credibility for your brand.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether your goal is more phone calls, more site traffic, or simply more people walking through your door, keeping your business profile complete, accurate, and active is non-negotiable in today's search-driven world.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection12;
