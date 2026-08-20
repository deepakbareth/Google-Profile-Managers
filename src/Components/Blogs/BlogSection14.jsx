import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs11.png'; // Using blogs10.png as placeholder

const BlogSection14 = () => {
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

                h1, h2, h3 {
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
                        <div className="badge">Local SEO</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Local Citation Services | Improve Local SEO & Rankings
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Boost local visibility with professional local citation services. Build accurate business listings, improve local SEO and strengthen online rankings.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Local Citation Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you want more customers finding your business online, especially the ones searching nearby, there's one piece of the puzzle that's easy to overlook: making sure your business information is accurate and consistent everywhere it appears. Your name, address, phone number, website, hours, and services need to match up across every directory, platform, and listing out there. When that happens, it genuinely strengthens your local search presence. This is exactly the kind of work <strong className="text-slate-900">Local Citation Services</strong> are built to handle.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <Link to="/" className="link-hover">Google Business Profile Managers</Link>, we help businesses build and maintain these online references so search engines — and real customers — get a clear, trustworthy picture of who you are and where you operate. Citations are a core piece of local SEO because they tell search engines where your business is located and what it actually does. When managed well, they also make it a lot easier for potential customers to find and contact you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you're running a small neighbourhood shop, a professional service firm, a restaurant, a healthcare practice, or a business that covers multiple service areas, a structured citation strategy can genuinely support everything else you're doing for local SEO.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2*/}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Are Local Business Citations, Exactly?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A local business citation is simply an online mention of your business — usually including your name, address, and phone number at minimum. Depending on the platform, it might also include your website, a description, categories, photos, and hours of operation.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            You'll find these mentions scattered across business directories, local websites, industry-specific platforms, review sites, mapping services, and other corners of the internet.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Search engines pull from all these different sources to build a fuller understanding of your business and its location. The more accurate and consistent that information is, the stronger the signal you're sending.
                        </p>
                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/search-engine-optimization" className="link-hover">Google Maps SEO services</Link>
                            </p>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            That's really the whole point behind <strong className="text-slate-900">Local Citation Services</strong> — instead of chasing down dozens of directories on your own, you get a structured strategy for finding the right platforms, creating or updating listings, and keeping everything accurate over time.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Do Citations Actually Matter for Local SEO?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local SEO exists to help businesses show up when people search within a specific geographic area. Citations are one piece of that larger puzzle — not the whole thing, but an important one.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            When your business shows up consistently across relevant, trustworthy platforms, customers get more chances to stumble across you. And when your information is consistent, there's a lot less room for confusion.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Picture someone searching for a plumber nearby. A handful of businesses show up in the results. The one with a well-rounded online presence, accurate details, and strong local signals is often the one that stands out and earns the click.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That said, citations alone won't magically boost your rankings. They work best alongside other efforts — Google Business Profile optimisation, on-site SEO, customer reviews, content marketing, technical SEO, and local keyword targeting all need to be working together.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        The Real Benefits of Local Citation Building Services
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Manually building out listings across dozens of directories takes a lot of time — time most business owners don't have to spare.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local citation building services</strong> bring a more organised approach to the table. Instead of guessing which directories matter, a professional process identifies the right ones and makes sure your business information is presented the same way every time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Here's what you can generally expect to gain:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Improved local online visibility</div>
                            <div className="list-item text-slate-700 text-lg">Consistent, accurate business information</div>
                            <div className="list-item text-slate-700 text-lg">More opportunities for customers to find you</div>
                            <div className="list-item text-slate-700 text-lg">Better coverage across relevant directories</div>
                            <div className="list-item text-slate-700 text-lg">Stronger support for your broader local SEO campaign</div>
                            <div className="list-item text-slate-700 text-lg">Less risk of outdated details floating around online</div>
                            <div className="list-item text-slate-700 text-lg">More efficient, streamlined citation management</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            A solid citation strategy prioritises relevance and accuracy over sheer volume. Piling up hundreds of low-quality listings isn't the goal — a smaller, well-targeted set of accurate citations will always outperform that approach.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Local Citation Management Shouldn't Stop After Setup
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Getting your listings created is really just step one. Businesses change constantly — phone numbers get swapped, addresses change, hours shift, and service areas expand. If those updates don't make it to your directory listings, customers are left looking at outdated information.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's where <strong className="text-slate-900">local citation management</strong> comes in. It's the ongoing process of checking, correcting, and maintaining your listings so nothing slips through the cracks.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Think about a business that relocates, but several directories still show the old address. Customers might show up at the wrong place, or worse, just give up and call a competitor instead. Citation management isn't a one-time task — it requires regular attention to keep everything accurate.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Local Citation Services Support Your Business
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A strong citation campaign starts with getting your core business information right. Before anything gets created or updated, you need one clear, correct version of your details to use everywhere.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local Citation Services</strong> support this process from start to finish. Here's what that typically looks like:
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Business Information Audit</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    The first move is reviewing your current online presence — spotting wrong details, duplicate listings, or incomplete profiles.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Directory Research</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Not every directory is worth your time. A local restaurant needs different platforms than a law firm or a construction company. The right directories depend on your industry, location, and audience.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Citation Creation</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Once the right platforms are identified, new listings get created with accurate descriptions, categories, and website links.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Existing Listing Updates</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Old listings get checked and corrected wherever information is outdated or wrong.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">5. Duplicate Monitoring</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Duplicate listings create confusion and make ongoing management harder, so identifying and cleaning them up is a key part of the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Local Business Citations Affect Search Visibility
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local business citations</strong> contribute to the overall pool of information search engines use to evaluate local businesses.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Consistency really is the name of the game here. Your business name, address, and phone number need to match everywhere they appear.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Take a business called ABC Plumbing Ltd. If one directory lists it as "ABC Plumbing", another has a different phone number, and a third still shows an old address — that inconsistency creates unnecessary friction for both search engines and customers.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The smarter approach is to lock in one standard version of your business information and apply it consistently across every relevant platform. And skip the temptation to pad your citation count with irrelevant directories — quality and relevance will always serve you better long-term.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Citation Strategies Vary by Industry
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Every industry has different local search needs. A service-area business might be chasing customers across several cities, while a shopfront shop cares more about people who live or work nearby.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Citation building services</strong> can and should flex depending on the industry involved.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A local dentist, for instance, benefits from healthcare-specific and general local directories. A restaurant does better on food-focused platforms. A tradesperson gets more value from industry-specific listings built for their trade.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The common thread is relevance — focus on directories your actual customers are likely to use.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Local Citation Services and Your Google Business Profile
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Citations are just one piece of a complete local SEO puzzle. Your Google Business Profile is another critical asset for local visibility.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A properly optimised profile gives customers useful details at a glance — your category, location, hours, services, website, and reviews.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local SEO citation services</strong> work hand-in-hand with Google Business Profile optimisation by keeping your business information consistent across every other platform where you show up. When your website, your profile, and your directory listings all say the same thing, your entire local presence feels more polished and trustworthy.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Citations should be treated as part of a broader local SEO plan — not a standalone fix that guarantees rankings on its own.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Understanding Business Directory Submissions
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Business directory submissions</strong> are exactly what they sound like — adding your business to relevant online directories, whether general local platforms or niche, industry-specific sites.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A smart submission strategy weighs:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Directory relevance</div>
                            <div className="list-item text-slate-700 text-lg">Geographic relevance</div>
                            <div className="list-item text-slate-700 text-lg">Industry relevance</div>
                            <div className="list-item text-slate-700 text-lg">Overall listing quality</div>
                            <div className="list-item text-slate-700 text-lg">Accuracy of business information</div>
                            <div className="list-item text-slate-700 text-lg">Whether a listing already exists</div>
                            <div className="list-item text-slate-700 text-lg">Actual value to potential customers</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Submitting to every directory under the sun isn't the winning move. Prioritising trustworthy, relevant platforms builds a citation profile that actually holds up over time. Alongside this, a professional <Link to="/setup" className="text-blue-600 font-semibold hover:underline">Google Business Profile setup service</Link> can help ensure your business profile is properly configured with accurate information, the right categories and relevant details from the start.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Common Citation Mistakes Worth Avoiding
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A lot of businesses stumble into the same avoidable mistakes when handling citations. Inconsistent information tops the list, but there's more to watch for:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Creating duplicate listings</div>
                            <div className="list-item text-slate-700 text-lg">Using the wrong business category</div>
                            <div className="list-item text-slate-700 text-lg">Leaving profiles incomplete</div>
                            <div className="list-item text-slate-700 text-lg">Forgetting to update old details after a move or change</div>
                            <div className="list-item text-slate-700 text-lg">Using different variations of the business name</div>
                            <div className="list-item text-slate-700 text-lg">Submitting to directories that don't fit the industry</div>
                            <div className="list-item text-slate-700 text-lg">Skipping industry-specific directories altogether</div>
                            <div className="list-item text-slate-700 text-lg">Never checking back on existing listings</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Regularly reviewing your citation strategy helps catch these issues before they start costing you visibility.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Consistency Is Everything
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Consistency really is the backbone of good citation management. No matter where someone discovers your business, they should see the same core details.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your name, address, and phone number need to be accurate and unwavering. Everything else — your website, category, hours — should stay current too.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Local Citation Services</strong> exist to organise and improve all of this across the directories that matter most to your business. The goal was never to just rack up more listings. It's about building an accurate, trustworthy online footprint that customers and search engines can actually rely on.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 13 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Building a Stronger Local Presence, One Listing at a Time
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local search competition isn't slowing down, and visibility matters more than ever for businesses trying to reach customers in specific areas. A solid local SEO strategy touches your website, your Google Business Profile, your reviews, your local content, and yes — your citations too.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Professional citation work saves you time while keeping your information consistent across every platform that matters. With the right approach, <strong className="text-slate-900">Local Citation Services</strong> can help your business build a stronger online presence and make it far easier for potential customers to find accurate, reliable information about you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you're ready to tighten up your local SEO strategy, start by reviewing your current citations. Look for incorrect details, duplicate listings, and missed opportunities, then prioritise the directories that actually matter for your industry and location.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 14 - Final Thoughts */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Local citations remain a genuinely valuable piece of a well-rounded local SEO strategy. Accurate listings help customers find you while building a consistent presence across the platforms that matter.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            From <strong className="text-slate-900">local citation building services</strong> and <strong className="text-slate-900">local citation management</strong> to <strong className="text-slate-900">business directory submissions</strong>, every part of this work should come back to one thing — accuracy, relevance, and consistent upkeep.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At <strong className="text-slate-900">Google Business Profile Managers</strong>, we help businesses organise their citation efforts and build a stronger foundation for local search visibility. Paired with an optimised Google Business Profile, strong website content, genuine customer reviews, and a well-thought-out SEO strategy — citations become a meaningful part of your overall digital marketing plan.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you want to improve your local presence, focus on quality over quantity. Keep your information accurate, choose directories that actually fit your business, monitor your listings regularly, and update your details the moment something changes.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection14;
