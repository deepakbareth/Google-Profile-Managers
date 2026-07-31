import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs8.png';

const BlogSection11 = () => {
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
                        <div className="badge">GBP optimization services</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            GBP Optimization Services | Boost Local Google Rankings
                        </h1>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="GBP Optimization Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If your business relies on nearby customers walking through the door or picking up the phone, showing up on Google Maps isn't a nice-to-have anymore — it's the difference between getting the call and getting skipped. Every single day, thousands of people type things like "near me" into Google, looking for exactly what you offer. If your business doesn't show up when they search, someone else's does.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's where <strong className="text-slate-900">GBP optimization services</strong> come in. At <Link to="/" className="text-blue-600 font-semibold hover:underline">Google Business Profile Managers</Link>, we help local businesses climb the Google Maps rankings, get noticed in the Local Pack, and turn everyday searches into real customers — phone calls, foot traffic, and website visits included.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you run a restaurant, a law office, a dental practice, an HVAC company, or a retail shop, ranking near the top of local search results can genuinely change the trajectory of your business. In this guide, we'll walk through how Google Maps ranking actually works, why local visibility matters so much, and how the right <strong className="text-slate-900">GBP optimization services</strong> can help you pull ahead of competitors who are still winging it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Are Google Maps SEO Services, Really?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Put simply, Google Maps SEO is the practice of optimising everything that influences where your business lands in Google's Local Pack — that little map with three business listings that shows up above the regular search results.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This isn't one single fix. It's a mix of things working together: your Google Business Profile, your local citations, the accuracy of your business details, your reviews, how relevant your website is, and the overall trust signals Google picks up about your business locally.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Think about searches like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">"Best dentist near me"</div>
                            <div className="list-item text-slate-700 text-lg">"Roofing company nearby"</div>
                            <div className="list-item text-slate-700 text-lg">"Local plumber"</div>
                            <div className="list-item text-slate-700 text-lg">"Coffee shop near me"</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            When someone types those in, Google pulls up a map with three businesses front and center — before anyone even scrolls to the regular listings. Landing one of those three spots can send a steady stream of new enquiries your way, which is exactly why so many businesses are now investing in <strong className="text-slate-900">GBP optimization services</strong> instead of leaving it to chance.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">Google Business Profile Optimisation</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Ranking on Google Maps Actually Matters
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            People don't just search anymore — they compare. Before calling or visiting, most customers are checking your star rating, scanning your reviews, looking at your photos, and confirming your hours are accurate.
                        </p>

                        <p className="text-lg text-slate-700 font-bold mb-6">
                            Businesses that rank well tend to see:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">More website visits</div>
                            <div className="list-item text-slate-700 text-lg">More phone calls coming in</div>
                            <div className="list-item text-slate-700 text-lg">More walk-in customers</div>
                            <div className="list-item text-slate-700 text-lg">Stronger brand credibility</div>
                            <div className="list-item text-slate-700 text-lg">Better quality leads</div>
                            <div className="list-item text-slate-700 text-lg">Higher conversion rates overall</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Here's the part that surprises a lot of business owners: the businesses sitting in that Local Pack usually soak up the majority of local clicks. If you're not there, you're likely losing business to a competitor who is — even if your service is genuinely better.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Google Actually Decides Who Ranks
                    </h2>

                    <div className="space-y-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Google doesn't rank Maps listings randomly. There are three core factors at play.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Relevance</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Google looks at how well your business matches what the person is actually searching for. This means your categories, service descriptions, and the keywords tied to your listing all need to line up with real customer intent — not just what sounds good to you.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Distance</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Where the searcher is standing (or where their device says they are) matters a lot. Businesses closer to the customer usually get the edge, which is why location-based accuracy is such a big deal.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Prominence</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                This is essentially your reputation, and Google measures it through:
                            </p>
                            <div className="space-y-2 mt-3">
                                <div className="list-item text-slate-700 text-lg">Customer reviews</div>
                                <div className="list-item text-slate-700 text-lg">Website authority</div>
                                <div className="list-item text-slate-700 text-lg">Local backlinks</div>
                                <div className="list-item text-slate-700 text-lg">Citation consistency</div>
                                <div className="list-item text-slate-700 text-lg">General business activity</div>
                                <div className="list-item text-slate-700 text-lg">Online mentions</div>
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Improving these factors across the board is exactly what solid <Link to="/management" className="link-hover">Google Business Profile Management</Link> are designed to do — and it's rarely a one-time fix, it's ongoing work.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What You Actually Gain From Professional GBP Optimization Services
                    </h2>

                    <div className="space-y-6">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Better Local Visibility</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Once your business shows up in the Local Pack, you're simply in front of more people — and more visibility naturally means more opportunities to convert a search into a sale.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Higher-Quality Leads</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Local searchers tend to already know what they want and are close to making a decision. Instead of chasing cold traffic, local optimisation puts you in front of people who are actively ready to buy, book, or call.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">More Trust From Customers</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                A profile that's fully filled out, has accurate information, strong photos, and genuine reviews just feels more trustworthy. And trust is what actually gets someone to pick up the phone instead of scrolling past you.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">A Real Edge Over Competitors</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Here's something most people don't realise — a huge number of businesses create a Google Business Profile and then completely forget about it. That gap is exactly where professional <strong className="text-slate-900">GBP optimization services</strong> give you a real, measurable advantage.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Building Blocks of a Strong Google Business Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A well-optimised profile is the backbone of any solid Google Business Profile SEO strategy. That typically covers:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Accurate business categories</div>
                            <div className="list-item text-slate-700 text-lg">Complete and consistent business information</div>
                            <div className="list-item text-slate-700 text-lg">A well-written, keyword-relevant description</div>
                            <div className="list-item text-slate-700 text-lg">Clear service listings</div>
                            <div className="list-item text-slate-700 text-lg">Business attributes</div>
                            <div className="list-item text-slate-700 text-lg">High-quality photos</div>
                            <div className="list-item text-slate-700 text-lg">Regular updates and posts</div>
                            <div className="list-item text-slate-700 text-lg">Active review management</div>
                            <div className="list-item text-slate-700 text-lg">Thoughtful Q&A responses</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Each of these pieces helps both the customer and Google understand exactly what your business does and why it's worth choosing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Google Business Profile Optimisation Deserves Real Attention
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A half-filled-out profile is a missed opportunity. Proper Google Business Profile optimisation means every section is complete and working in your favour — hours, phone number, website link, service areas, product listings, description, photos, videos, and appointment booking links included.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Complete profiles consistently outperform incomplete ones. It's one of the simplest things to fix, yet one of the most overlooked.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Ongoing Management Keeps You Competitive
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Optimisation isn't a "set it and forget it" task. Ongoing Google Business Profile management is what keeps your listing active, current, and trustworthy in Google's eyes. That usually involves:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Keeping business information updated</div>
                            <div className="list-item text-slate-700 text-lg">Publishing regular Google Posts</div>
                            <div className="list-item text-slate-700 text-lg">Uploading fresh photos</div>
                            <div className="list-item text-slate-700 text-lg">Responding to reviews promptly</div>
                            <div className="list-item text-slate-700 text-lg">Monitoring how your profile is performing</div>
                            <div className="list-item text-slate-700 text-lg">Answering customer questions</div>
                            <div className="list-item text-slate-700 text-lg">Tracking your local rankings over time</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Consistent activity tells Google your business is alive and engaged — and that consistency is a core part of any effective <strong className="text-slate-900">GBP optimization services</strong> package.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Pairing Maps Optimization With Local SEO Services
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Map optimisation works well on its own, but it works even better paired with broader local SEO services, including:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Website optimisation</div>
                            <div className="list-item text-slate-700 text-lg">Local landing pages</div>
                            <div className="list-item text-slate-700 text-lg">Citation building</div>
                            <div className="list-item text-slate-700 text-lg">Schema markup</div>
                            <div className="list-item text-slate-700 text-lg">Local backlink building</div>
                            <div className="list-item text-slate-700 text-lg">Content marketing</div>
                            <div className="list-item text-slate-700 text-lg">Technical SEO fixes</div>
                            <div className="list-item text-slate-700 text-lg">Mobile-friendly design</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Combined, these strategies build a stronger overall online presence — not just a good-looking Maps listing.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Your Website Plays a Bigger Role Than You Think
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A common misconception is that Maps rankings depend only on your Google Business Profile. In reality, Google also looks closely at your website. A locally optimised site should have:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Fast loading speeds</div>
                            <div className="list-item text-slate-700 text-lg">Mobile-friendly design</div>
                            <div className="list-item text-slate-700 text-lg">Local keyword targeting</div>
                            <div className="list-item text-slate-700 text-lg">Dedicated service pages</div>
                            <div className="list-item text-slate-700 text-lg">Clear contact information</div>
                            <div className="list-item text-slate-700 text-lg">Location-specific pages</div>
                            <div className="list-item text-slate-700 text-lg">Smart internal linking</div>
                            <div className="list-item text-slate-700 text-lg">Structured data markup</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A strong, well-optimised website adds authority to your overall local SEO efforts — and it's a piece that many <strong className="text-slate-900">GBP optimization services</strong> providers include as part of a complete strategy.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Carry More Weight Than You Might Expect
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews are one of the strongest ranking signals Google uses, full stop. Encourage happy customers to leave honest feedback, and respond professionally to every review — yes, even the negative ones.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Businesses with a steady stream of positive reviews tend to rank better and build more trust with potential customers browsing their options.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes That Quietly Hurt Your Rankings
                    </h2>

                    <div className="space-y-6 font-bold mb-6">
                        A lot of businesses lose visibility without realising why. The usual culprits include:
                    </div>

                    <div className="space-y-3">
                        <div className="list-item text-slate-700 text-lg">Wrong or overly broad business categories</div>
                        <div className="list-item text-slate-700 text-lg">Duplicate listings</div>
                        <div className="list-item text-slate-700 text-lg">Outdated business information</div>
                        <div className="list-item text-slate-700 text-lg">Inconsistent contact details across the web</div>
                        <div className="list-item text-slate-700 text-lg">Keyword stuffing in descriptions</div>
                        <div className="list-item text-slate-700 text-lg">Low-quality or outdated photos</div>
                        <div className="list-item text-slate-700 text-lg">Ignoring customer reviews</div>
                        <div className="list-item text-slate-700 text-lg">Letting the profile go inactive</div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mt-8">
                        The good news? Fixing these issues often leads to a noticeable ranking improvement fairly quickly.
                    </p>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Work With a Professional GBP Optimization Services Provider
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local SEO isn't a one-and-done task — it takes continuous attention, monitoring, and adjustment. Professionals who specialise in this understand Google's ranking factors inside and out, and they know how to improve visibility the right way, without cutting corners that could get your listing penalised.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Working with experienced specialists frees up your time so you can focus on actually running your business, while they handle the reporting, strategy tweaks, and ongoing optimisation needed to stay competitive.
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
                            Local competition isn't slowing down — if anything, it's getting tighter every year. Businesses that invest in <strong className="text-slate-900">GBP optimization services</strong> put themselves in front of customers who are actively searching and ready to act.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you need Google Business Profile SEO, hands-on Google Business Profile optimisation, ongoing Google Business Profile management, comprehensive Local SEO services, or a full Google Maps SEO strategy, the right approach can boost your visibility, bring in better leads, and support long-term growth.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection11;
