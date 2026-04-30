

import { optimizationData } from "../Data/optimizationData";
import Banner from "../Components/ReusableComp/Banner";
import OtherServices from "../Components/ReusableComp/OtherServices/OtherServices";
import ServiceFaqs from "../Components/ReusableComp/ServiceFaqs/ServiceFaqs";
import ServiceHero from "../Components/ReusableComp/ServiceHero/ServiceHero";
import ServiceHowItWorks from "../Components/ReusableComp/ServiceHowItWorks/ServiceHowItWorks";
import ServiceOverview from "../Components/ReusableComp/ServiceOverview/ServiceOverview";
import TestimonialsSection from "../Components/ReusableComp/TestimonialsSection/TestimonialsSection";

function OptimizationPage(){

    
return  (
    <>
 
    
        <>
            <Banner data={optimizationData.banner} />
            <ServiceHero data={optimizationData.hero}/>
            <ServiceOverview data={optimizationData.overview}/>
            <ServiceHowItWorks data={optimizationData.howItWorks}/>
            <TestimonialsSection data={optimizationData.testimonials}/>
            <ServiceFaqs data={optimizationData.faqs}/>
            <OtherServices data={optimizationData.otherServices}/>
        </>
    )
    </>
)

}

export default OptimizationPage;