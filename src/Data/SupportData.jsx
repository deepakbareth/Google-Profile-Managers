import supportHeroImg from '../assets/SupportPage/supportHeroImg.png'
import supportOverviewImg from '../assets/SupportPage/supportOverviewImg.png'
import mattImg from '../assets/SupportPage/matt.png'
import sydneyImg from '../assets/SupportPage/sydney.png'

import managementImg from '../assets/globle/management.png'
import optimizationImg from '../assets/globle/optimization.png'
import setupImg from '../assets/globle/setUp.png'


export const SupportData = {
  banner: {
    titlePrefix: "Google Business Profile",
    titleHighlight: "Support Service",
    subtitle: "Facing a suspended profile or frustrating verification issues? Let our experts navigate Google's complex support system to get your listing back on track quickly."
  },

  // SUPPORT PAGE HERO DATA
  hero: {
    title: "Get the Google Business Profile Support You Need from the Google Profile Managers Experts.",
    titleHighlight: "Only $99 per Incident.",
    italicSubtitle: "Have a pressing issue or problem with your Google Profile Managers listing and need help getting it resolved?",
    paragraphs: [
      "Well, then you've come to the right place. Let the experts at Google Profile Managers get you through the darkest parts of the digital jungle!",
      <>Our <strong>Google Business Profile Support Service</strong> is designed to help you when you have a problem that you can't figure out or get an answer from Google. Our team works with Google Business Profile representatives every day and can help you successfully navigate the system to get the resolution you need.</>,
      "We resolve issues with Google Business Profiles daily let us help you out too!"
    ],
    // Put your local image path here!
    image: supportHeroImg, // Replace with your actual imported image variable
  },

  // SUPPORT PAGE OVERVIEW DATA
  overview: {
    title: "Google Business Profile Support Service Overview",
    paragraphs: [
      <>The <strong>Google Profile Managers Google Business Profile Support Service</strong> allows you to work with a Google Profile Managers expert that has the experience working with Google to solve your profile issues. They will act as your liaison and handle all communications until a final resolution is made, saving you a ton of time.</>,
      "With Google Business Profile Support, your profile will initially be optimized for your targeted search phrases and local market. This profile optimization process includes the following:",
      <>The <strong>Google Business Profile Support Service</strong> has been used in the past to resolve issues such as:</>
    ],
    features: [
      "Account or Listing Recovery",
      "Account Suspension",
      "Duplicate Listings",
      "One Time Profile Updates",
      "Malicious Profile Edits",
      "Verification Delays"
    ],
    bottomText: "If you have any of these issues right now and you want to quickly solve them, we can help.",
    // Put your local image path here!
    image: supportOverviewImg, // Replace with your actual imported image variable
  },

  // SUPPORT PAGE HOW IT WORKS DATA
  howItWorks: {
    title: "How Our Google Business Profile Support Service Works",
    subtitle: "The Google Business Profile Support Service is an easy alternative to doing it yourself:",
    steps: [
      {
        title: "1. You Tell Us About Your Problem",
        description: "After purchasing our support service, you'll get connected with your own Google Profile Managers account manager. Your Google Profile Managers account manager will be in contact with you to learn more about your current issue, collect information, and discuss next steps. In certain cases, like if you want us to edit your listing directly, we will require managerial access to your profile. Any access to listings that may be required will be discussed at this step."
      },
      {
        title: "2. We Investigate and Collect Information",
        description: "With your side of the story in hand, our next step is to do some research and collect information about the issue in order to properly create a ticket with Google. It is important that problems are approached the right way in order to avoid delays in resolution and miscommunications that can happen all-too-often with Google Business Profile support. If your issue doesn't require intervention from Google, we will work to create an action plan to resolve it during this step."
      },
      {
        title: "3. We Create a Ticket on Your Behalf",
        description: "Armed with all the details, we will craft and enter a ticket with Google that properly describes what happened and why you should not have been affected. While we do not have any special insiders at Google, our experience creating these tickets created a very high positive resolution rate and earned Google Profile Managers his Master of the Jungle crown. 👑"
      },
      {
        title: "4. We Work on Your Behalf to Get Positive Resolution",
        description: "We'd love to tell you that all we do is submit one ticket and get the problem solved immediately, but they don't all go that way. Sometimes, additional information might be required. In other cases, there is a grey area that's open to interpretation and the Google Profile Managers needs to take the time to properly plead your case. In any case, we do the dirty work to make sure you get accurate information and a headache-free experience, so you have the highest chance of a positive outcome. If your resolution doesn't require Google intervention, we will likely just solve your issue or advise you on why a positive resolution may not be possible."
      }
    ]
  },

  // SUPPORT PAGE TESTIMONIALS DATA
  testimonials: {
    title: "What Customers Say About Google Business Profile Support",
    items: [
      {
        image: mattImg, // Make sure to import this image at the top of your file
        quote: "They were able to get a number spammy competitor profiles removed from my clients local area.",
        author: "– Matt Payne, Marketing Consultant"
      },
      {
        image: sydneyImg, // Make sure to import this image at the top of your file
        quote: "Google accidentally marked one of listings as a duplicate, and within 2 days Google Profile Managers had it showing up again.",
        author: "– Sydney, IOIO Studio"
      }
    ]
  },

  // SUPPORT PAGE FAQS DATA
  faqs: {
    title: "Google Business Profile Support Service FAQs",
    items: [
      {
        question: "Can't I just fill out a ticket with Google myself?",
        answer: "Yes, you 100% can do this yourself. Similar to our other services, you can always do them yourself. For some, the DIY mindset works well. We also know that many people prefer to spend their time and energy on other areas of their business, rather than battling Google Business Profile all day long like we do."
      },
      {
        question: "Do you offer any guarantees or refunds?",
        answer: "No. We are not Google, and ultimately we cannot guarantee that your issue will be positively resolved. We are being paid to do everything we can on your behalf and pull out all the stops to get a decision in your favor."
      },
      {
        question: "How much does it cost if I have more than one listing?",
        answer: "No. We do not have any special insider at Google or mythical partner access. We credit our success to years of experience with Google, Google Profile Managers profiles, and the common problems that many users face when trying to manage and optimize their listings."
      }
    ]
  },

  // SUPPORT PAGE OTHER SERVICES DATA
  otherServices: {
    title: "Other Google Business Profile Services",
    items: [
      {
        image: managementImg, // Replace with your actual imported variable
        title: "Google Profile Management",
        price: "$99",
        unit: "PER MONTH",
        paragraphs: [
          "Our Google Business Profile Management Service gives you a hands off solution for generating greater visibility and more business from your Google Profile Managers listing.",
          "This monthly recurring service is built to ensure that your listing is not only enhanced and optimized, but a powerful tool for promoting your business. Features include new posts weekly, adding and responding to QA, requesting and responding to reviews, uploading photos and videos, as well as updating information as it changes.",
          "Complete with a dedicated Google Profile Managers account manager and monthly reporting, we'll even fight spammy profiles in your area making this the most complete Google Profile Managers Management Service ever!"
        ],
        bottomLinkText: "Google Business Profile Management Service",
        bottomLinkUrl: "/management"
      },
      {
        image: optimizationImg, // Make sure to import your optimization image at the top!
        title: "Google Profile Optimization",
        price: "$99",
        unit: "PER PROFILE",
        paragraphs: [
          "Our Google Business Profile Optimization Service is ideal if you already have a Google Profile Managers listing, but you aren't 100% sure if you're doing everything you can to maximize your results.",
          "Instead of spending months researching best practices, and weeks trying to implement those ideas, our Google Business Profile Optimization Service can get you expert-level results without all the effort.",
          "With this service you will work directly with one of our Google Profile Managers experts who will audit your existing listing, and then lead the implementation of an action plan designed to bring your listing to the top of the local pack."
        ],
        bottomLinkText: "Google Business Profile Optimization Service",
        bottomLinkUrl: "/optimization"
      },
      {
        image: setupImg, // Make sure to import your setup image at the top!
        title: "Google Business Profile Setup",
        price: "$99",
        unit: "PER PROFILE", // Fixed from the image's "PER INCIDENT" typo!
        paragraphs: [
          "Our Google Business Profile Setup Service is the best way to get started if you don't already have a Google Profile Managers listing and don't want to go through the pain of setting it up yourself.",
          "With this service, one of our Google Profile Managers Experts will take the time and hassle out of properly claiming, verifying, and setting up your Google Business Profile listing for maximum visibility.",
          "We have set up over 1,000 listings over the past five years, and our streamlined process gives you a listing that's distinguished from all the other competition in this digital jungle. 🌴",
          "Let the Google Profile Managers use his brain and braun to make setting up your Google Profile Managers profile easy!"
        ],
        bottomLinkText: "Google Business Profile Setup Service",
        bottomLinkUrl: "/setup"
      }
    ]
  }
}