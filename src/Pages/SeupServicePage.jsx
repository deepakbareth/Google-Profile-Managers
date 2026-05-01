import Banner from "../Components/ReusableComp/Banner";
import OtherServices from "../Components/ReusableComp/OtherServices/OtherServices";
import ServiceFaqs from "../Components/ReusableComp/ServiceFaqs/ServiceFaqs";
import ServiceHero from "../Components/ReusableComp/ServiceHero/ServiceHero";
import ServiceHowItWorks from "../Components/ReusableComp/ServiceHowItWorks/ServiceHowItWorks";
import ServiceOverview from "../Components/ReusableComp/ServiceOverview/ServiceOverview";
import TestimonialCard from "../Components/ReusableComp/TestimonialsSection/TestimonialCard";
import TestimonialsSection from "../Components/ReusableComp/TestimonialsSection/TestimonialsSection";
import { SetupServiceData } from '../Data/SetupServiceData';

function SetupServicePage() {
  return (
    <>
      <Banner data={SetupServiceData.banner} />
      <ServiceHero data={SetupServiceData.hero}/>
      <ServiceOverview data={SetupServiceData.overview}/>
      <ServiceHowItWorks data={SetupServiceData.howItWorks}/>
      <TestimonialsSection  data={SetupServiceData.testimonials}/>
      <ServiceFaqs  data={SetupServiceData.faqs}/>
      <OtherServices  data={SetupServiceData.otherServices}/>
    </>
  );
}

export default SetupServicePage;