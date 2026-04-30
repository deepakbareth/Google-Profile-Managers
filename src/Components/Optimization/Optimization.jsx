import { optimizationData } from "../../Data/optimizationData";
import Banner from "../ReusableComp/Banner";
import OtherServices from "../ReusableComp/OtherServices/OtherServices";
import ServiceFaqs from "../ReusableComp/ServiceFaqs/ServiceFaqs";
import ServiceHero from "../ReusableComp/ServiceHero/ServiceHero";
import ServiceHowItWorks from "../ReusableComp/ServiceHowItWorks/ServiceHowItWorks";
import ServiceOverview from "../ReusableComp/ServiceOverview/ServiceOverview";
import TestimonialsSection from "../ReusableComp/TestimonialsSection/TestimonialsSection";

function Optimization() {


    return (
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

}

export default Optimization;