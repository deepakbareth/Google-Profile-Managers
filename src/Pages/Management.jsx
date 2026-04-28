import Banner from "../Components/Management/Banner";
import HowItWorksSection from "../Components/Management/HowItWorksSection/HowItWorksSection";
import ManagementFaqs from "../Components/Management/ManagementFaqs/ManagementFaqs";
import ManagementHero from "../Components/Management/ManagementHero/ManagementHero";
import OtherServices from "../Components/Management/OtherServices/OtherServices";
import ServiceOverview from "../Components/Management/ServiceOverview/ServiceOverview";
import TestimonialsSection from "../Components/Management/TestimonialsSection/TestimonialsSection";

function Management(){

    
return  (
    <>
    <Banner/>
<ManagementHero/>
<ServiceOverview/>
<HowItWorksSection/>
<TestimonialsSection/>
<ManagementFaqs/>
<OtherServices/>
    </>
)

}

export default Management;