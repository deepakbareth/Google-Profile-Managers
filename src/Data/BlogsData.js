import articleHeroImg from '../assets/blogs/blogs2.png';
import articleHeroImg2 from '../assets/blogs/blogs.png';
import BlogSection4 from '../Components/Blogs/BlogSection4';
import BlogSection5 from '../Components/Blogs/BlogSection5';

export const blogsList = [
    {
        id: "1",

        slug: "google-business-profile-management-services",
        title: "Improve Rankings with Google Business Profile Management Services",
        excerpt: "If you've ever searched 'best pizza near me' or 'plumber open now', you already understand why showing up on Google matters. Learn how professional Google Business Profile management services push your business into Google's local pack and drive inbound leads.",
        category: "GBP Management",
        date: "July 2026",
        readTime: "8 min read",
        author: "GBP Experts",
        image: articleHeroImg,
        component: BlogSection4,
        seo: {
            title: "Improve Rankings with Google Business Profile management services",
            metaDescription: "Boost your local rankings with expert Google Business Profile Management Services in the USA. Optimize listings, attract customers, and grow faster online."
        }
    },
    {
        id: "2",
        slug: "google-business-profile-seo-services",
        title: "Google Business Profile SEO Services | Rank Higher on Maps",
        excerpt: "Let’s be honest — most local business owners set up a Google Business Profile, fill in a few details, and then forget it exists. Learn how Google Business Profile SEO services push your business into Google's local pack and attract local customers.",
        category: "Local SEO",
        date: "July 2026",
        readTime: "7 min read",
        author: "SEO Experts",
        image: articleHeroImg2,
        component: BlogSection5,
        seo: {
            title: "Google Business Profile SEO Services | Rank Higher on Maps",
            metaDescription: "Boost your local rankings with expert Google Business Profile SEO services. Optimize your GBP, attract more local customers, and increase calls and leads."
        }
    }
];

// Retain legacy BlogsData object for backward compatibility
export const BlogsData = {
    seo: blogsList[0].seo,
    intro: {
        heading: "Google Business Profile Services",
        paragraphs: [
            "You probably aren’t sure what you need for a great listing. Even if you do, you probably don’t want to time to spend dealing with your profile every week. At least that’s what we’ve learned through thousands of interactions with people who want the exact same thing as you – better rankings on Google and more business because of it!",
            "That’s why Google Profile Managers is here to cut through the digital underbrush with Google Business Profile services that help you get the most from your profile. Regardless of your budget or goals, we have a Google Business Profile service that will help you improve your rankings, visibility, traffic, and sales."
        ]
    },
    article: {
        heading: blogsList[0].title,
        image: articleHeroImg,
        paragraphs: [
            "If you've ever searched \"best pizza near me\" or \"plumber open now\", you already understand why showing up on Google matters. That search habit — grabbing a phone and looking for the nearest option — is what your potential customers do every single day. And if your business isn't showing up, or showing up with wrong hours and no photos, someone else is getting that call.",
            "This is the gap that <strong>Google Business Profile management services</strong> are built to close."
        ]
    }
};