import Banner from "../Components/ReusableComp/Banner";
import OtherServices from "../Components/ReusableComp/OtherServices/OtherServices";
import ServiceFaqs from "../Components/ReusableComp/ServiceFaqs/ServiceFaqs";
import ServiceHero from "../Components/ReusableComp/ServiceHero/ServiceHero";
import ServiceHowItWorks from "../Components/ReusableComp/ServiceHowItWorks/ServiceHowItWorks";
import ServiceOverview from "../Components/ReusableComp/ServiceOverview/ServiceOverview";
import TestimonialsSection from "../Components/ReusableComp/TestimonialsSection/TestimonialsSection";
import { SupportData } from "../Data/SupportData";

function SupportPage() {
  return (
    <>
      <Banner data={SupportData.banner}/>
      <ServiceHero data={SupportData.hero}/>
      <ServiceOverview data={SupportData.overview}/>
      <ServiceHowItWorks  data={SupportData.howItWorks}/>
      <TestimonialsSection data={SupportData.testimonials}/>
      <ServiceFaqs data={SupportData.faqs}/>
      <OtherServices data={SupportData.otherServices}/>
     
    </>
  );
}

export default SupportPage;