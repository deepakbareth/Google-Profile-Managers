import articleHeroImg from '../assets/blogs/blogs2.png';
import articleHeroImg2 from '../assets/blogs/blogs.png';
import articleHeroImg3 from '../assets/blogs/blogs3.png';
import articleHeroImg4 from '../assets/blogs/blogs4.png';
import articleHeroImg5 from '../assets/blogs/blogs5.png';

import BlogSection4 from '../Components/Blogs/BlogSection4';
import BlogSection5 from '../Components/Blogs/BlogSection5';
import BlogSection6 from '../Components/Blogs/BlogSection6';
import BlogSection7 from '../Components/Blogs/BlogSection7';
import BlogSection8 from '../Components/Blogs/BlogSection8';

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
    },
    {
        id: "3",
        slug: "google-my-business-management-service",
        title: "Google Business Profile SEO Services | Expert Local SEO",
        excerpt: "Most people don’t walk into a shop cold anymore. They search first. Learn how a professional Google My Business management service keeps your profile accurate, competitive, and actually working to drive phone calls and foot traffic.",
        category: "GMB Management",
        date: "July 2026",
        readTime: "9 min read",
        author: "GBP Team",
        image: articleHeroImg3,
        component: BlogSection6,
        seo: {
            title: "Google Business Profile SEO Services | Expert Local SEO",
            metaDescription: "Grow your local visibility with Google Business Profile SEO services, expert optimisation and management to improve rankings and attract customers."
        }
    },
    {
        id: "4",
        slug: "google-business-profile-setup-service",
        title: "Google Business Profile SEO Services | Local SEO Experts",
        excerpt: "Think about the last time you needed a plumber, a new dentist, or somewhere to grab dinner. Learn how Google Business Profile SEO services and setup packages get your business seen, clicked, and called.",
        category: "GBP Setup",
        date: "July 2026",
        readTime: "8 min read",
        author: "SEO Team",
        image: articleHeroImg4,
        component: BlogSection7,
        seo: {
            title: "Google Business Profile SEO Services | Local SEO Experts",
            metaDescription: "Grow your local visibility with Google Business Profile SEO services. Improve rankings, attract customers and boost your local business online."
        }
    },
    {
        id: "5",
        slug: "google-maps-seo-services",
        title: "Google Maps SEO Services | Improve Local Rankings",
        excerpt: "Most people don’t scroll through ten websites anymore before choosing a business. Learn how professional Google Maps SEO services help you stand out in the local pack and attract ready-to-buy customers.",
        category: "Maps SEO",
        date: "July 2026",
        readTime: "8 min read",
        author: "SEO Experts",
        image: articleHeroImg5,
        component: BlogSection8,
        seo: {
            title: "Google Maps SEO Services | Improve Local Rankings",
            metaDescription: "Boost your local visibility with professional Google Maps SEO services. Improve rankings, attract customers and grow your local business."
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