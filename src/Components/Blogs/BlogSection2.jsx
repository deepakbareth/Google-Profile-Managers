import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const BlogSection2 = () => {
    return (
        <article className="w-full">

            {/* ========================================== */}
            {/* TOP INTRO SECTION (From Image 1)             */}
            {/* ========================================== */}
            {/* <section className="bg-[#f2f6f9] py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl font-bold text-[#1a6b8f] text-center mb-8">
                        Google Business Profile Services
                    </h2>

                    <div className="text-[17px] text-slate-800 leading-relaxed space-y-6">
                        <p>
                            You probably aren’t sure what you need for a great listing. Even if you do, you probably don’t want to time to spend dealing with your profile every week. At least that’s what we’ve learned through thousands of interactions with people who want the exact same thing as you – better rankings on Google and more business because of it!
                        </p>
                        <p>
                            That’s why Google Profile Managers is here to cut through the digital underbrush with Google Business Profile services that help you get the most from your profile. Regardless of your budget or goals, we have a Google Business Profile service that will help you improve your rankings, visibility, traffic, and sales.
                        </p>
                    </div>

                </div>
            </section> */}

            {/* ========================================== */}
            {/* MAIN ARTICLE CONTENT (From Image 2)          */}
            {/* ========================================== */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-black">

                    <p className="text-[17px] leading-relaxed mb-8">
                        {/* Replaced <a> with <Link> */}
                        At <Link to="/" className="text-blue-600 font-medium hover:underline">Google Profile Managers</Link>, we work with local business owners who are great at what they do but don't have time to babysit a Google listing. Our job is to make sure that when someone searches for your type of business, your profile actually earns their click.
                    </p>

                    <hr className="border-t-[1.5px] border-slate-300 mb-8" />

                    <h3 className="text-[22px] font-bold mb-4">
                        What a Google Business Profile Actually Does for You
                    </h3>

                    <div className="text-[17px] leading-relaxed space-y-6 mb-6">
                        <p>
                            Think of your Google Business Profile as the front door to your business — except it's visible to anyone searching in your area, 24/7. It shows your address, phone number, hours, photos, reviews, and even recent posts. Done right, it builds an instant first impression before a customer ever visits your website.
                        </p>

                        <p>
                            Done poorly — or left untouched after the initial setup — it can quietly hurt you. Outdated hours frustrate customers. Missing photos make businesses look abandoned. Unanswered reviews send a message that nobody's paying attention.
                        </p>
                    </div>

                    <p className="text-[17px] mb-6">
                        {/* Replaced <a> with <Link> */}
                        <strong>Read more</strong> – <Link to="/setup" className="text-blue-500 hover:underline">Google Business Profile Setup</Link>
                    </p>

                    <p className="text-[17px] font-bold mb-4">
                        A few things a properly managed profile can do:
                    </p>

                    <ul className="list-disc pl-10 mb-6 text-[17px] leading-relaxed space-y-1">
                        <li>Push your business into Google's local pack (the top three results that appear before everything else)</li>
                        <li>Drive more calls and direction requests directly from search</li>
                        <li>Build trust with customers who are comparing you to competitors</li>
                        <li>Improve the volume and quality of your reviews over time</li>
                        <li>Increase foot traffic and website visits without spending on ads</li>
                    </ul>

                    <p className="text-[17px] leading-relaxed mb-8">
                        None of this happens automatically. It takes consistent, knowledgeable upkeep — which is exactly where professional <strong>Google Business Profile management services</strong> come in.
                    </p>

                    <hr className="border-t-[1.5px] border-slate-300 mb-8" />

                </div>
            </section>

        </article>
    );
};

export default BlogSection2;