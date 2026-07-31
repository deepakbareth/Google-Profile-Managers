import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs10.png'; // Fallback to blogs10.png loaded dynamically

const BlogSection13 = () => {
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
                        <div className="badge">Google Maps ranking service</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Maps Ranking Service | Google Business Profile SEO
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Maps Ranking Service"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about the last time you needed a plumber, a dentist, or a decent burger joint nearby. Chances are you didn't flip through a phone book or ask five friends for recommendations. You opened Google, typed in what you needed, and picked one of the businesses that popped up on the map. Maybe you called the first one on the list. Maybe you clicked "directions" without even reading a review.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's the reality now. And it's exactly why a <strong className="text-slate-900">Google Maps ranking service</strong> has become less of a "nice to have" and more of a basic requirement for any business that depends on local customers.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you're not showing up when people search near you, you're not losing to a better business — you're losing to a <em>more visible</em> one. That distinction matters, because visibility is fixable.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Does a Google Maps Ranking Service Actually Do?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, a <Link to="/optimization" className="text-blue-600 font-semibold hover:underline">Google Business Profile Optimization</Link> works to improve where your business shows up when someone searches for what you offer in your area. It's not one single trick — it's a combination of moving parts that Google weighs together to decide who deserves the top spots.
                        </p>
                        
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            A solid strategy usually touches on:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Setting up (or fixing) your Google Business Profile</div>
                            <div className="list-item text-slate-700 text-lg">Getting your business information accurate and consistent everywhere</div>
                            <div className="list-item text-slate-700 text-lg">Choosing the right keywords for your services and location</div>
                            <div className="list-item text-slate-700 text-lg">Building local citations across directories</div>
                            <div className="list-item text-slate-700 text-lg">Managing and encouraging customer reviews</div>
                            <div className="list-item text-slate-700 text-lg">Improving how "relevant" your business looks for nearby searches</div>
                            <div className="list-item text-slate-700 text-lg">Tightening up your website's local SEO</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing monitoring, because rankings shift constantly</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of this is glamorous work. It's mostly maintenance and attention to detail. But that's precisely why so many businesses skip it — and why the ones that don't skip it tend to pull ahead.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Rankings on Google Maps Actually Matter
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Search behavior has changed. People type things like "plumber near me," "best coffee shop open now," or "emergency dentist nearby" instead of formal business names. When you search something local, Google usually shows a map with three highlighted businesses above everything else. That's the <strong className="text-slate-900 font-bold">Local Pack</strong>, and it's prime real estate.
                        </p>
                        
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Landing in that Local Pack tends to bring:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">A noticeable jump in website clicks</div>
                            <div className="list-item text-slate-700 text-lg">More phone calls from people ready to book</div>
                            <div className="list-item text-slate-700 text-lg">More requests for directions</div>
                            <div className="list-item text-slate-700 text-lg">Increased trust before a customer even walks in</div>
                            <div className="list-item text-slate-700 text-lg">More conversions overall, since local searchers are often ready to buy</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A well-run <strong className="text-slate-900">Google Maps ranking service</strong> gives your business a real shot at one of those three spots — and honestly, if you're not in that top three, most searchers will never scroll down far enough to find you.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What You Actually Gain From Ranking Higher
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">More Eyes on Your Business</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Higher placement means your business is physically in front of people while they're actively looking for exactly what you sell. There's no colder audience to warm up — they're already searching.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Leads That Are Ready to Convert</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Someone searching "24-hour locksmith near me" isn't browsing casually. Local search traffic tends to convert better than a lot of other marketing channels simply because the intent is already there.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">A Trust Boost, Almost Automatically</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                A complete profile with real photos, accurate hours, and genuine reviews signals to customers (and to Google) that you're a legitimate, active business. People notice half-finished listings, even if they can't articulate why something feels off.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">An Edge Over Competitors</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                If two businesses offer similar services, the one that shows up first usually wins the call. It's not always about who's better — it's about who's found first.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth That Sticks Around</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Unlike paid ads that stop working the moment you stop paying, a strong position built through an ongoing <strong className="text-slate-900 font-bold">Google Maps ranking service</strong> tends to keep generating leads month after month.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Foundation: Your Google Business Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Everything starts here. Your <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile</Link> is essentially your storefront on Google, and if it's incomplete or inaccurate, nothing else you do will matter much.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Proper <strong className="text-slate-900 font-bold">Google Business Profile optimisation</strong> covers things like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Getting your business name exactly right (no keyword stuffing)</div>
                            <div className="list-item text-slate-700 text-lg">Choosing accurate primary and secondary categories</div>
                            <div className="list-item text-slate-700 text-lg">Writing a clear, honest business description</div>
                            <div className="list-item text-slate-700 text-lg">Defining your service areas correctly</div>
                            <div className="list-item text-slate-700 text-lg">Listing your actual products and services</div>
                            <div className="list-item text-slate-700 text-lg">Uploading real, high-quality photos — not stock images</div>
                            <div className="list-item text-slate-700 text-lg">Keeping hours updated, especially around holidays</div>
                            <div className="list-item text-slate-700 text-lg">Making sure your phone number and website link actually work</div>
                            <div className="list-item text-slate-700 text-lg">Posting updates regularly instead of letting the profile go stale</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A profile that's fully filled out sends a clear signal to Google that you're an active, credible business worth showing to searchers.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Google Business Profile SEO Services Are Worth the Investment
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's something we see constantly: businesses create a Google Business Profile, fill in the basics, and then never touch it again. That's a missed opportunity.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Dedicated <strong className="text-slate-900 font-bold">Google Business Profile SEO services</strong> dig into the details that actually move rankings, including:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Picking the right primary category (this one matters more than people realize)</div>
                            <div className="list-item text-slate-700 text-lg">Layering in relevant secondary categories</div>
                            <div className="list-item text-slate-700 text-lg">Writing descriptions that naturally include the terms customers search for</div>
                            <div className="list-item text-slate-700 text-lg">Encouraging and responding to reviews strategically</div>
                            <div className="list-item text-slate-700 text-lg">Strengthening local relevance signals</div>
                            <div className="list-item text-slate-700 text-lg">Building overall authority within your niche and area</div>
                            <div className="list-item text-slate-700 text-lg">Keeping customers engaged through posts and updates</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            These aren't one-time fixes. They're ongoing adjustments that keep your profile competitive as Google's algorithm shifts and as competitors improve their own listings.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Business Profile Management: The Part Everyone Forgets
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Optimisation gets your profile in shape. Management keeps it that way.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google tends to favor listings that show consistent activity, which is why <Link to="/management" className="link-hover">Google Business Profile Management</Link> matters just as much as the initial setup. That means:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Posting updates on a regular schedule</div>
                            <div className="list-item text-slate-700 text-lg">Replying to reviews — good and bad</div>
                            <div className="list-item text-slate-700 text-lg">Refreshing photos so the listing doesn't look abandoned</div>
                            <div className="list-item text-slate-700 text-lg">Correcting information the moment something changes</div>
                            <div className="list-item text-slate-700 text-lg">Watching performance data to catch problems early</div>
                            <div className="list-item text-slate-700 text-lg">Fixing listing issues like duplicate profiles or suggested edits from strangers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A profile left untouched for months looks stale to both customers and to Google's ranking systems. Ongoing management is what keeps momentum going.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Maps SEO Goes Deeper Than People Expect
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed font-bold">
                            A lot of business owners assume ranking on Maps is just about stuffing a few keywords into their profile description. It's not. Real <strong className="text-slate-900">Google Maps SEO</strong> involves a wider set of signals working together:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Local citations across directories and industry sites</div>
                            <div className="list-item text-slate-700 text-lg">NAP consistency — your Name, Address, and Phone number matching everywhere online</div>
                            <div className="list-item text-slate-700 text-lg">Location-specific pages on your website</div>
                            <div className="list-item text-slate-700 text-lg">Genuine customer reviews, both in volume and quality</div>
                            <div className="list-item text-slate-700 text-lg">Local backlinks from relevant sites in your area</div>
                            <div className="list-item text-slate-700 text-lg">How well your listed service areas match what customers actually search</div>
                            <div className="list-item text-slate-700 text-lg">Schema markup on your website that tells Google exactly what you do and where</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Each piece on its own is small. Together, they form the backbone of local visibility.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Local SEO Services Tie It All Together
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A <strong className="text-slate-900">Google Maps ranking service</strong> doesn't work in isolation from the rest of your online presence. Broader <strong className="text-slate-900">Local SEO services</strong> support and reinforce Maps rankings by strengthening everything around them:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Researching the local keywords your customers actually type</div>
                            <div className="list-item text-slate-700 text-lg">Optimising your website for those terms</div>
                            <div className="list-item text-slate-700 text-lg">Building citations that reinforce your business details</div>
                            <div className="list-item text-slate-700 text-lg">Creating content relevant to your area and services</div>
                            <div className="list-item text-slate-700 text-lg">Fixing technical SEO issues that quietly hurt rankings</div>
                            <div className="list-item text-slate-700 text-lg">Earning local backlinks</div>
                            <div className="list-item text-slate-700 text-lg">Managing your online reputation across review platforms</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            When your website and your Google Business Profile are both working toward the same goal, results tend to show up faster and last longer.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes That Quietly Kill Your Rankings
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 font-bold mb-6">
                            We see the same issues over and over when we audit a new client's listing:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">A Google Business Profile that's only half filled out</div>
                            <div className="list-item text-slate-700 text-lg">The wrong business category selected (this one's surprisingly common)</div>
                            <div className="list-item text-slate-700 text-lg">Duplicate listings competing against each other</div>
                            <div className="list-item text-slate-700 text-lg">Phone numbers or addresses that don't match across platforms</div>
                            <div className="list-item text-slate-700 text-lg">Blurry or generic stock photos</div>
                            <div className="list-item text-slate-700 text-lg">Reviews that go unanswered for months</div>
                            <div className="list-item text-slate-700 text-lg">Business hours that were never updated after a move or a schedule change</div>
                            <div className="list-item text-slate-700 text-lg">Little to no local content on the website</div>
                            <div className="list-item text-slate-700 text-lg">Weak technical SEO dragging down the whole domain</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of these mistakes are dramatic on their own. But add them up, and you've got a listing that Google simply doesn't trust enough to rank well.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Carry More Weight Than You'd Think
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews aren't just social proof for customers — they're one of the strongest ranking signals Google uses for local search. A steady stream of genuine, recent reviews helps:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Build trust with people scanning search results</div>
                            <div className="list-item text-slate-700 text-lg">Improve how often people click through to your listing</div>
                            <div className="list-item text-slate-700 text-lg">Push conversion rates higher</div>
                            <div className="list-item text-slate-700 text-lg">Reinforce your authority in your local market</div>
                            <div className="list-item text-slate-700 text-lg">Support better visibility on Google Maps overall</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            And responding to reviews — even the negative ones — shows customers (and Google) that someone's actually paying attention on the other end.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why It Makes Sense to Bring in Professionals
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Ranking well on Google Maps isn't a set-it-and-forget-it project. Google's local algorithm shifts constantly, competitors adjust their strategies, and what worked six months ago might not carry the same weight today.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Professionals working in this space day in and day out typically:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Track ranking changes closely</div>
                            <div className="list-item text-slate-700 text-lg">Study what competitors in your area are doing</div>
                            <div className="list-item text-slate-700 text-lg">Fine-tune profile performance based on real data</div>
                            <div className="list-item text-slate-700 text-lg">Build local authority methodically, not randomly</div>
                            <div className="list-item text-slate-700 text-lg">Keep business information accurate across the board</div>
                            <div className="list-item text-slate-700 text-lg">Adjust strategy as Google updates its ranking factors</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            That kind of consistent attention is hard to maintain on your own while also running the actual business.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Google Business Profile Managers Can Help
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-blue-600 font-semibold">Google Business Profile Managers</strong>, this is genuinely all we focus on — helping local businesses get found on Google Maps and stay there. We handle the full picture:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Complete Google Business Profile optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Strategic Google Maps ranking improvements</div>
                            <div className="list-item text-slate-700 text-lg">Review generation and management</div>
                            <div className="list-item text-slate-700 text-lg">Local citation building</div>
                            <div className="list-item text-slate-700 text-lg">Local SEO strategy built around your specific market</div>
                            <div className="list-item text-slate-700 text-lg">Ongoing profile management, not a one-time fix</div>
                            <div className="list-item text-slate-700 text-lg">Performance tracking so you can see what’s actually working</div>
                            <div className="list-item text-slate-700 text-lg">Support as your business grows into new areas</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Whether you're running a single local shop or managing profiles across multiple locations, the approach gets tailored to what your business and your market actually need — not a generic template applied to everyone.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 14 - Conclusion */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A dependable <strong className="text-slate-900">Google Maps ranking service</strong> is one of the more reliable ways to grow a local business right now. More people are searching "near me" every year, and the businesses capturing that attention are the ones that took the time to get their Google presence right.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Pulling together strong <strong className="text-slate-900">Google Business Profile SEO services</strong>, thorough <strong className="text-slate-900">Google Business Profile optimisation</strong>, consistent <strong className="text-slate-900">Google Business Profile management</strong>, thoughtful <strong className="text-slate-900">Google Maps SEO</strong>, and broader <strong className="text-slate-900">Local SEO services</strong> doesn't just help you rank — it builds a foundation that keeps paying off long after the initial work is done.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection13;
