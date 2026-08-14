import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articleHeroImg from '../../assets/blogs/blogs20.png'; // Using blogs20.png as placeholder

const BlogSection23 = () => {
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
                        <div className="badge">Review Management</div>
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Google Business Profile Review Management Services
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-6">
                            Improve your online reputation with Google Business Profile review management. Monitor, respond to, and manage customer reviews effectively.
                        </p>
                    </div>

                    <div className="image-frame mt-10">
                        <img
                            src={articleHeroImg}
                            alt="Google Business Profile Review Management Services"
                            className="object-contain"
                        />
                    </div>

                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you run a local business, chances are your customers are checking your Google reviews before they ever pick up the phone. It's just how people shop now. They see a business, scroll through the star rating, skim a few comments, and decide whether they trust you enough to reach out. That single moment — the scroll through your reviews — can quietly decide whether someone becomes a customer or moves on to your competitor.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is exactly why <strong className="text-slate-900">Google Business Profile review management</strong> has become such a big part of local marketing today. It's not just about firefighting bad reviews when they show up. Done properly, it's an ongoing habit: watching what customers say, replying to them like a real person, gently encouraging happy customers to speak up, and keeping your reputation steady over time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Businesses that stay on top of <strong className="text-slate-900">Google Business Profile review management</strong> tend to show up as more credible, more responsive, and honestly, more human — and that reputation does a lot of the selling for you before a customer even makes contact.
                        </p>

                        <div className="highlight-box">
                            <p className="text-slate-700">
                                <strong className="text-slate-900">Read more –</strong> <Link to="/services" className="link-hover">Local SEO services for small businesses</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 2 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        What Is Google Business Profile Review Management, Really?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            At its core, <strong className="text-slate-900">Google Business Profile review management</strong> is simply the ongoing work of watching, responding to, and improving the reviews customers leave on your Google listing.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            In practice, that usually looks like:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Keeping an eye on new reviews as they come in</div>
                            <div className="list-item text-slate-700 text-lg">Thanking customers who leave positive feedback</div>
                            <div className="list-item text-slate-700 text-lg">Handling negative reviews calmly and professionally</div>
                            <div className="list-item text-slate-700 text-lg">Spotting patterns in what customers keep mentioning</div>
                            <div className="list-item text-slate-700 text-lg">Nudging happy customers to share their experience</div>
                            <div className="list-item text-slate-700 text-lg">Keeping your tone consistent across every reply</div>
                            <div className="list-item text-slate-700 text-lg">Tracking how sentiment shifts over time</div>
                            <div className="list-item text-slate-700 text-lg">Using feedback to actually improve how you do business</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Here's the part people forget: reviews are public. Your reply isn't just for the person who left the review — it's for every future customer who reads it later. A calm, thoughtful response can say more about your business than ten glowing testimonials ever could.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 3 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Google Reviews Actually Matter for Local Businesses
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <Link to="/" className="link-hover">Google Business Profile Managers</Link> often shape a customer's opinion of you long before they land on your website. When someone searches "plumber near me" or "best café in town", they're not just looking at who ranks first — they're comparing ratings, reading recent comments, and quietly ruling businesses in or out.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Picture two businesses offering the exact same service. One has a steady stream of recent reviews and replies to nearly all of them. The other has a handful of reviews from two years ago and a couple of unanswered complaints sitting right at the top. Even if both businesses are equally good at what they do, the first one simply <em className="italic">looks</em> more trustworthy. That perception alone can be the deciding factor.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            This is precisely why <strong className="text-slate-900">Google Business Profile review management</strong> shouldn't be treated as damage control. It works best as a routine part of your marketing — something you do every week, not just the day after a one-star review lands in your inbox.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 4 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Google Business Profile Review Management Services
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Because staying consistent takes real time and attention, many businesses turn to professional <strong className="text-slate-900">Google Business Profile review management services</strong>. Depending on what you need, this can cover everything from monitoring and replying to reviews to deeper reputation analysis and regular feedback reporting.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Google Review Management</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    This is the day-to-day work of <strong className="text-slate-900">Google Business Profile review management</strong> and <Link to="/services" className="link-hover">Local SEO services for small businesses</Link> — checking in on new reviews and making sure the important ones get a proper response. A positive review deserves a genuine thank-you, not a copy-paste line. A negative one needs a calm, professional reply, free of arguments or defensiveness.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    A well-written response shows future customers that your business actually listens and that you're willing to sort out legitimate problems instead of ignoring them.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Google Business Profile Reputation Management</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Your reputation isn't just your star rating. It's shaped by how many reviews you have, how recent they are, how you respond, and whether the same complaint keeps popping up again and again.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    <strong className="text-slate-900">Google Business Profile reputation management</strong> is about stepping back and looking at the bigger picture — catching small, recurring issues before they snowball into something that actually costs you customers.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Google Review Response Management</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Not every review needs the same reply. A short, happy review might just need a warm thank-you. A detailed one deserves a response that actually references what the customer talked about. A negative review calls for something more careful: acknowledge the concern, explain next steps if needed, and — if things get sensitive — offer to continue the conversation privately.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    The goal here was never to "win" the exchange publicly. It's to show everyone reading that your business handles problems like a professional.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Online Review Management</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Google isn't the only place people talk about your business. Depending on your industry, customers might leave feedback on other directories and platforms too. Keeping tabs on all of it — not just Google — gives you a fuller, more honest picture of what customers are actually experiencing.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    If people keep mentioning slow replies, a confusing booking process, or how friendly your staff are, that's not just feedback — that's free research about what to fix and what to keep doing.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Google Business Profile Optimisation</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Review management works best when it's paired with a properly filled-out profile. That means an accurate business name, the right category, correct hours, a clear description, good photos, and up-to-date contact details.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                                    When your information is accurate and your reviews are well-managed side by side, customers get everything they need in one glance — no guesswork required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 5 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        How Professional Review Management Actually Helps Your Business
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Builds real trust</strong>. People lean on other people's experiences when deciding who to call. A steady collection of genuine reviews acts as social proof that takes the risk out of choosing you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Shows professionalism</strong>. How you respond can matter just as much as what the review says. A thoughtful reply tells everyone reading that you take customer experience seriously.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Surfaces real problems</strong>. If three different customers mention the same thing, that's not a coincidence — that's a signal worth acting on.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Keeps the conversation going</strong>. Every reply is another small touchpoint with your customers, and thanking someone for kind words often strengthens the relationship further.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Supports your wider local marketing</strong>. A well-kept profile works hand in hand with your website, local SEO, and everything else you're doing to get found locally.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 6 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Responding to Positive Reviews (Yes, These Need Attention Too)
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It's tempting to skip past the good reviews since nothing's "wrong" — but ignoring them is a missed opportunity. A genuine, specific reply beats a generic "thanks for the review!" every time. Mention what they actually praised. Keep it short. It doesn't need to be a paragraph — just real.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 7 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Responding to Negative Reviews Without Making Things Worse
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The instinct to defend yourself is natural, but it rarely helps. A defensive reply can do more damage than the original review ever did.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A better approach looks like this:
                        </p>

                        <div className="space-y-2 mt-4 ml-4">
                            <p className="text-lg text-slate-700">1. Thank the customer for saying something, even if it stings.</p>
                            <p className="text-lg text-slate-700">2. Acknowledge what they're upset about.</p>
                            <p className="text-lg text-slate-700">3. Skip the arguing and personal jabs.</p>
                            <p className="text-lg text-slate-700">4. Add clarification only where it's genuinely useful.</p>
                            <p className="text-lg text-slate-700">5. Offer to sort it out privately if it involves specifics.</p>
                            <p className="text-lg text-slate-700">6. Actually take the feedback seriously internally.</p>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            Not every negative review needs an essay in reply. Often, a short and calm response does more good than a long, defensive one. And it should go without saying — don't try to manipulate or fake reviews. Genuine feedback is the whole point.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 8 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Getting More Genuine Reviews (Without Being Pushy)
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            You can absolutely encourage happy customers to leave reviews — just don't pressure them or offer anything in exchange for a specific rating. Make it easy: a quick, polite ask after a job is done goes a long way.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Good moments to ask include:
                        </p>

                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg">Follow-up emails after service</div>
                            <div className="list-item text-slate-700 text-lg">Post-purchase messages</div>
                            <div className="list-item text-slate-700 text-lg">Booking confirmations or follow-ups</div>
                            <div className="list-item text-slate-700 text-lg">Simple thank-you notes</div>
                            <div className="list-item text-slate-700 text-lg">Regular feedback check-ins</div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mt-8">
                            The goal is simple — make it effortless for real, satisfied customers to say something.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 9 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Mistakes Businesses Often Make With Reviews
                    </h2>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Going silent</strong> — unanswered reviews make a business look disengaged.</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Reacting emotionally</strong> — public arguments rarely end well for the business.</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Copy-pasting every reply</strong> — customers can tell, and it feels cold.</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Only focusing on the negatives</strong> — happy customers deserve thanks too.</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Trying to game the system</strong> — fake reviews almost always backfire.</div>
                            <div className="list-item text-slate-700 text-lg"><strong className="text-slate-900">Ignoring the pattern</strong> — replying to each complaint without fixing the root issue solves nothing long-term.</div>
                        </div>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 10 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Pairing Review Management With a Strong Website
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Your Google profile is only half the story. Once someone reads your reviews, many of them will click through to your website next, looking for more detail, more proof, and more reasons to trust you.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            That's where a solid website ties everything together — it should back up what your reviews are already saying. A professional web presence paired with active <strong className="text-slate-900">Google Business Profile review management</strong> creates one consistent, trustworthy story across every touchpoint a customer sees.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For businesses in competitive local markets, combining website development, local SEO, and profile optimisation with steady reputation management builds a much stronger foundation than any single piece on its own.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 11 */}
                <div className="section-container mb-20" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Why Hand This Off to Professionals?
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Staying on top of reviews consistently takes real time — time most business owners simply don't have between running operations, managing staff, and serving customers.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            A professional, structured approach means reviews get checked regularly, and every reply sounds like it's coming from the same trustworthy brand. Done well, customer feedback stops being something to dread and becomes something you can actually use — to prove reliability, catch issues early, and strengthen how your business is seen online.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The real goal was never to chase five stars for the sake of it. It's to deliver good experiences, invite honest feedback, and respond to whatever comes in like a business that genuinely cares.
                        </p>
                    </div>
                </div>

                <div className="section-divider my-16"></div>

                {/* Section 12 - Final */}
                <div className="section-container mb-12" data-animate>
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                        Final Thoughts
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Reviews shape how people see your business long before they ever speak to you. A strong, well-tended reputation builds confidence — while neglected or poorly handled feedback quietly pushes potential customers away.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Solid <strong className="text-slate-900">Google Business Profile review management</strong> gives you a structured way to stay on top of feedback, respond like a professional, encourage honest reviews, and keep your online reputation solid over time.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether it's Google review management, Google Business Profile reputation management, Google review response management, online review management, or Google Business Profile optimisation — each piece adds up to a stronger local presence.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            If you're ready to strengthen how your business shows up online, pairing your reputation strategy with a well-built website and a clear digital marketing plan can help everything work together — consistent, credible, and built to earn trust at every step.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogSection23;
