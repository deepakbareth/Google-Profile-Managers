import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs12.png'; // Using blogs12.png as it will likely be the next one

const BlogSection15 = () => {
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
                        <div className="badge">Review Management</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Review Management Services | Reputation Experts
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Improve your online reputation with professional Google review management services. Monitor, respond to, and manage customer reviews effectively.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Review Management Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Most people check reviews before they ever pick up the phone. Before they book a table, call a plumber, or fill out a contact form, they scroll through what other customers have said. That one habit — checking Google reviews first — has quietly become one of the biggest factors in whether a business gets picked or gets scrolled past.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's really why <strong className="text-slate-900">Google review management services</strong> exist. Not to chase five stars for the sake of it, but to help a business actually keep up with what customers are saying and respond to it like a real person would.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a local business, your reviews sit right next to your <Link to="/optimization" className="link-hover">Google Business Profile</Link> — same page, same first impression. A profile with accurate hours and photos means little if the reviews underneath it look ignored or defensive. The two need to work together.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Google Reviews Actually Matter
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A star rating is the first thing people notice, but it's rarely the last. Most people click into the reviews themselves, read a few recent ones, and pay close attention to how the business responded — especially to anything negative.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That response matters more than owners often realize. A calm, useful reply to a bad review can do more for trust than another glowing five-star comment. It tells a stranger scrolling through: <em>this business actually listens</em>.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews also work as free market research, whether you asked for it or not. If three different customers mention slow callbacks, that's not a coincidence — that's a pattern worth fixing. If people keep praising the same technician or the same product line, that's worth leaning into.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is the real point of <strong className="text-slate-900">Google review management services</strong>. It's not about inflating a rating. It's about paying attention, responding like a human, and using what customers tell you.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Google Review Management Actually Involves
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Strip away the marketing language and Google review management comes down to a few practical habits: keeping an eye on new reviews, replying to them, noticing repeat complaints, and gently encouraging happy customers to say something publicly.
                        </p>
                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/optimization" className="link-hover">GMB profile optimisation</Link>
                            </p>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Done properly, <strong className="text-slate-900">Google review management</strong> covers things like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Checking for new reviews regularly instead of stumbling across them weeks later</div>
                            <div className="list-item text-slate-700 text-lg">Replying to both praise and complaints — not just the good ones</div>
                            <div className="list-item text-slate-700 text-lg">Spotting recurring issues before they become a pattern customers notice</div>
                            <div className="list-item text-slate-700 text-lg">Asking satisfied customers, at the right moment, if they'd leave a review</div>
                            <div className="list-item text-slate-700 text-lg">Keeping responses sounding like the same business every time</div>
                            <div className="list-item text-slate-700 text-lg">Tracking how ratings and sentiment shift over months, not days</div>
                            <div className="list-item text-slate-700 text-lg">Using feedback to actually change something operationally</div>
                            <div className="list-item text-slate-700 text-lg">Keeping the whole profile looking professional, not neglected</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            None of that involves burying bad reviews or writing fake ones. Anyone offering that isn't doing review management — they're doing something that can get a profile flagged or suspended.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What You Actually Get From Managing Reviews Properly
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews pile up fast once a business starts getting real traffic, and answering every single one — thoughtfully, not with a copy-pasted line — takes more time than most owners expect to give it.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">It Builds Trust Faster Than Anything Else</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    People trust businesses that clearly engage with their customers. Even a two-line reply to a good review shows there's someone actually running the place, not just collecting stars passively.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">It Protects the Reputation You're Building</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Your online reputation isn't just the average rating — it's the sum of everything customers say and how you answer it. Good <strong className="text-slate-900">Google reputation management</strong> means staying on top of both sides of that equation, not just the score.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    A business that responds professionally to criticism can often appear more trustworthy than one with a perfect five-star rating but no engagement. In fact, an unusually perfect score with no responses or interaction may sometimes make potential customers question whether the reviews are genuine. <Link to="/management" className="link-hover">Google Business Profile management services</Link> can help businesses monitor customer feedback, respond professionally to reviews, and maintain an active, credible online presence. Showing that you listen to feedback, address concerns, and value customer opinions can build greater credibility and trust.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">It Surfaces Problems Before They Spread</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    If your reviews keep mentioning the same complaint — long hold times, confusing pricing, a specific location underperforming — that's data you're getting for free. Ignore it long enough and it stops being a review problem and starts being a real business problem.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">It Frees Up Your Time</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Somebody has to actually read every review, decide on a tone, write something that doesn't sound robotic, and post it — across however many locations you run. Handing this to a <strong className="text-slate-900">review management company</strong> means it gets done consistently, without eating into your week. This is one of the quiet advantages of outsourcing <strong className="text-slate-900">Google review management services</strong>: the work still gets done, just not by you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How the Process Actually Works, Step by Step
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Review management works best as a routine, not a scramble every time a bad review shows up.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">First, someone has to actually be watching.</strong> New reviews need to be caught quickly — a fast reply, especially on a negative review, reads very differently than one that shows up two weeks late.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Second, not every review needs the same response.</strong> A glowing five-star deserves a genuine thank-you, not a copy-paste. A frustrated one-star deserves something calmer and more specific — never a defensive reply, never an argument played out in public.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Third, replies need a human tone.</strong> No accusations, no excuses dressed up as apologies. If a complaint needs real digging, moving the conversation to email or phone (and saying so publicly) usually works better than hashing it out in the comments.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Fourth, happy customers need a gentle nudge.</strong> Most satisfied customers simply don't think to leave a review unless asked — right after a good interaction is usually the best moment to ask.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Finally, someone should actually look at the pattern over time.</strong> A single bad review means little. Five reviews mentioning the same issue over three months means something.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why This Matters More for Local Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Competition for local searches has gotten tighter, and customers now compare several options within a few minutes of searching. That makes reputation part of the buying decision itself, not just an afterthought.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Google reviews management services</strong> give local businesses a repeatable way to stay on top of that — which matters a lot for:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Restaurants and cafés</div>
                            <div className="list-item text-slate-700 text-lg">Hotels and short-term rentals</div>
                            <div className="list-item text-slate-700 text-lg">Dental and medical offices</div>
                            <div className="list-item text-slate-700 text-lg">Home service and trade businesses</div>
                            <div className="list-item text-slate-700 text-lg">Marketing and creative agencies</div>
                            <div className="list-item text-slate-700 text-lg">Law firms and professional services</div>
                            <div className="list-item text-slate-700 text-lg">Retail stores</div>
                            <div className="list-item text-slate-700 text-lg">Real estate agents and brokerages</div>
                            <div className="list-item text-slate-700 text-lg">Auto repair shops and dealerships</div>
                            <div className="list-item text-slate-700 text-lg">Local contractors</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            For any of these, a stranger deciding whether to call often makes that decision based on what they read in the reviews section alone.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews and Local SEO Go Together
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews don't exist in isolation from your Google Business Profile — they sit right there next to your categories, hours, photos, and description, all feeding into how your business shows up locally.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A steady flow of genuine reviews adds social proof to everything else on your profile. But it's not a substitute for the rest of local SEO — your website still needs to be optimized, your citations still need to be consistent, and your business information still needs to be accurate everywhere it appears.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Put those pieces together — a complete profile, consistent citations, and active <strong className="text-slate-900">Google review management services</strong> — and you end up with a much stronger local presence than any single piece could deliver alone.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What to Actually Look For in a Review Management Company
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Be wary of anyone promising guaranteed five-star ratings. That's not a service — that's a red flag, and it can put your profile at risk with Google.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A provider worth hiring should be able to show you:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">A real strategy for encouraging genuine reviews, not manufactured ones</div>
                            <div className="list-item text-slate-700 text-lg">Responses that sound like they were written by someone who read the review</div>
                            <div className="list-item text-slate-700 text-lg">Reporting you can actually understand, not vague dashboards</div>
                            <div className="list-item text-slate-700 text-lg">Real familiarity with how Google Business Profiles work</div>
                            <div className="list-item text-slate-700 text-lg">Compliance with Google's actual review policies</div>
                            <div className="list-item text-slate-700 text-lg">Clear, direct communication — not vague promises</div>
                            <div className="list-item text-slate-700 text-lg">A focus on the long game, not a quick spike in ratings</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            If a company can't explain how they'll do this without artificial reviews, that's your answer right there.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Reviews Are a Conversation, Not Just a Score
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's easy to treat reviews as a number to optimize. But every review is really a message from a real customer, and how you answer it says something about your business too.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A short, genuine thank-you reinforces a good relationship. A calm, specific response to criticism shows you're willing to actually fix things instead of getting defensive.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Do that consistently and something shifts — people researching your business start to see a company that listens, not just one that's chasing a rating. That's the real value behind <strong className="text-slate-900">Google review management services</strong>: it's less about the number next to your name and more about the relationship building underneath it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Turning Feedback Into Something Useful
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Every review, good or bad, is information you didn't have to pay for.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If customers keep praising the same thing — fast turnaround, a specific staff member, clear pricing — that's worth putting front and center in your marketing. If they keep flagging the same frustration, that's worth fixing before it costs you more customers than the reviews already show.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It plays out as a loop: customer experience leads to a review, the review gets analyzed, something gets improved, and the next customer experience gets a little better because of it. Keep that loop running long enough and it compounds — better reviews, better trust, better business.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Work With Google Business Profile Managers
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Keeping a Google Business Profile and its reviews in good shape isn't a one-time task — it needs someone paying attention consistently. <strong className="text-slate-900">Google review management services</strong> from a team that actually understands how this works can handle the monitoring, the responses, and the reporting so nothing slips through.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At Google Business Profile Managers, we help businesses stop treating reviews as background noise and start treating them as part of the customer relationship. Every review gets read. Every response gets written with intention, not copied from a template.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you're trying to build up your local presence, repair a reputation that's taken a hit, or simply keep a growing profile under control, having someone actually manage this side of your business frees you up to run the rest of it.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 - Final Thoughts */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews have quietly become one of the first things a potential customer sees about your business — often before your website, sometimes before anything else. A strong review profile builds trust before a customer ever picks up the phone, and how you respond to criticism says almost as much as the rating itself.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            With <strong className="text-slate-900">Google review management services</strong>, you get a consistent process for watching new reviews, responding to them properly, encouraging real customers to speak up, and catching patterns before they become bigger problems.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection15;
