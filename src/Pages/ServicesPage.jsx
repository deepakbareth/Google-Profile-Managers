import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { ServicesData } from '../Data/ServicesData';
import ServiceHero from '../Components/ServiceHero/ServiceHero';
import ServicesIntro from '../Components/ReusableComp/ServicesIntroHP/ServicesIntroHP';
import OtherServices from '../Components/ReusableComp/OtherServices/OtherServices';
import saraImg from "../assets/TestimonialImages/sara.png";
import avaImg from "../assets/TestimonialImages/ava.png";
import TestimonialsSection from '../Components/ReusableComp/TestimonialsSection/TestimonialsSection';


const testimonialsData = {
  title: "What Customers Say About Google Profile Managers Services",
  items: [
    {
      image: saraImg, // Make sure to import this image at the top of your file
      quote: "We're always looking for ways to gain an advantage in a competitive industry like overhead garage doors. Google Profile Managers has made it simple for us to achieve excellent results from our profiles without having to perform any of the effort ourselves.",
      author: "Sara Vella, National Overhead Door Co"
    },
    {
      image: avaImg, // Make sure to import this image at the top of your file
      quote: "We used to spend hours trying to stay up with Google and all of the new prospects. My team can now devote their time to caring for all of the new patients they bring to the practise each week, thanks to Google Profile Managers.",
      author: "Dr. Ava Shamban, Ava MD, Skin Five"
    }
  ]
}



function ServicesPage() {
  return (
    <>
      <Banner data={ServicesData.banner} />
      <ServiceHero data={ServicesData.hero} />


      <ServicesIntro data={ServicesData.services} />
      <OtherServices data={ServicesData.otherServices} />

      <TestimonialsSection data={testimonialsData} />
      {/* the the other services bottum links  */}
    </>
  );
}

export default ServicesPage;