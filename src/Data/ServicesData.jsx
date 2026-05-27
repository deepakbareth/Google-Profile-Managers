import { Heading } from 'lucide-react'
import gbpServicesImg from '../assets/ManagementPage/revenue.png'
import revenue from '../assets/ManagementPage/revenue.png'
import managementImg from '../assets/globle/management.png'
import optimizationImg from '../assets/globle/optimization.png'
import setupImg from '../assets/globle/setUp.png'
import supportImg from '../assets/globle/support.png'


export const ServicesData = {
  banner: {
    titlePrefix: "Google Business Profile",
    titleHighlight: "Services",
    subtitle: "Optimize your local presence, stand out in search results, and attract more customers with our expert management solutions."
  },

  hero: {
    title: "Dominate with Google Business Profile Optimization from the Master of Local Search.",
    titleHighlight: "Only $99 per Profile.",
    italicSubtitle: "Do you want your Google Business Profile listing to rank higher than your competitors? Then our Google Business Profile Optimization Service is the exact solution you need.",
    paragraphs: [
      "The Google Business Profile Optimization Service is designed for those who already have a Google Business Profile Managers listing, but aren't 100% sure they're doing everything to maximize their results.",
      "With this service you will work directly with one of our Google Business Profile Managers who will audit your existing listing, and then lead the implementation of an action plan designed to bring your listing to the top of the local pack.",
      "We have successfully optimized 1,000s of Google Business Profile listings. Let us do the same for yours!"
    ],
    image: revenue,

  },

  services: {
    Heading: "Google Business Profile Services",
    paragraphs: [
      "You probably aren’t sure what you need for a great listing. Even if you do, you probably don’t want to time to spend dealing with your profile every week. At least that’s what we’ve learned through thousands of interactions with people who want the exact same thing as you – better rankings on Google and more business because of it!",

      "That’s why Google Profile Managers is here to cut through the digital underbrush with Google Business Profile services that help you get the most from your profile. Regardless of your budget or goals, we have a Google Business Profile service that will help you improve your rankings, visibility, traffic, and sales."

    ]
  },

  otherServices: {
    title: "", // You can adjust this title if needed
    items: [
      {
        image: managementImg,
        title: "Google Business Profile Management",
        price: "$99",
        unit: "/ PER MONTH",
        paragraphs: [
          "Our Google Business Profile Management Service gives you a hands off solution for generating greater visibility and more business from your Google Profile Managers listing.",
          "This monthly recurring service is built to ensure that your listing is not only enhanced and optimized, but a powerful tool for promoting your business. Features include new posts weekly, adding and responding to QA, requesting and responding to reviews, uploading photos and videos, as well as updating information as it changes.",
          "Complete with a dedicated Google Profile Managers account manager and monthly reporting, we'll even fight spammy profiles in your area making this the most complete Google Profile Managers Management Service ever!"
        ],
        bottomLinkText: "Google Business Profile Management Service",
        bottomLinkUrl: "/management"
      },
      {
        image: optimizationImg,
        title: "Google Business Profile Optimization",
        price: "$99",
        unit: "PER PROFILE",
        paragraphs: [
          "Our Google Business Profile Optimization Service is ideal if you already have a Google Profile Managers listing, but you aren't 100% sure if you're doing everything you can to maximize your results.",
          "Instead of spending months researching best practices, and weeks trying to implement those ideas, our Google Business Profile Optimization Service can get you expert-level results without all the effort.",
          "With this service you will work directly with one of our Google Profile Managers experts who will audit your existing listing, and then lead the implementation of an action plan designed to bring your listing to the top of the local pack.",
          "We have successfully optimized 1,000s of Google Business Profile listings. Let us do the Google Profile Managers same for you!"
        ],
        bottomLinkText: "Google Business Profile Optimization Service",
        bottomLinkUrl: "/optimization"
      },
      {
        image: setupImg,
        title: "Google Business Profile Setup",
        price: "$99",
        unit: "PER PROFILE",
        paragraphs: [
          "Our Google Business Profile Setup Service is the best way to get started if you don't already have a Google Profile Managers listing and don't want to go through the pain of setting it up yourself.",
          "With this service, one of our Google Profile Managers Experts will take the time and hassle out of properly claiming, verifying, and setting up your Google Business Profile listing for maximum visibility.",
          "We have set up over 1,000 listings over the past five years, and our streamlined process gives you a listing that's distinguished from all the other competition in this digital jungle. 🌴",
          "Let the Google Profile Managers use his brain and braun to make setting up your Google Profile Managers profile easy!"
        ],
        bottomLinkText: "Google Business Profile Setup Service",
        bottomLinkUrl: "/setup"
      },
      {
        image: supportImg,
        title: "Google Business Profile Support",
        price: "$99",
        unit: "PER INCIDENT",
        paragraphs: [
          "Have a pressing issue or problem with your Google Profile Managers listing and need help getting it resolved?",
          "Well, then you've come to the right service for you. Let the experts at Google Profile Managers get you through the darkest parts of the digital jungle! 🌴",
          "Our Google Business Profile Support Service is designed to help you when you have a problem that you can't figure out or get an answer from Google.",
          "Our Google Profile Managers expert work with Google Business Profile representatives every day and can help you successfully navigate the system to get the resolution you need."
        ],
        bottomLinkText: "Google Business Profile Support Service",
        bottomLinkUrl: "/support"
      }
    ]
  },

}