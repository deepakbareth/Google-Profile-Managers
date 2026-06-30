
import Banner from "../Components/Home/MainBanner/Banner"

import FeatureSection from "../Components/Home/FeatureSection/FeatureSection"
import TrustSignals from "../Components/Home/TrustSignals/TrustSignals"
import BeforeAfterResults from "../Components/Home/BeforeAfterResults/BeforeAfterResults"
import PricingSection from "../Components/Home/PricingSection/PricingSection"
import FaqSection from "../Components/Home/FaqSection/FaqSection"
import ServicesSection from "../Components/Home/ServicesSection/ServicesSection"
import TestimonialsSection from "../Components/Home/TestimonialsSection/TestimonialsSection"
import FreeAuditForm from "../Components/Home/FreeAuditForm/FreeAuditForm"


function Home() {
    return (
        <>
            <Banner />

            <FeatureSection />
            <TrustSignals />
            <BeforeAfterResults />
            <PricingSection />
            <FaqSection />
            <ServicesSection />
            <TestimonialsSection />
            <FreeAuditForm />


        </>
    )
}
export default Home