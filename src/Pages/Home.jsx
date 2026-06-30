
import Banner from "../Components/Home/MainBanner/Banner"
import Banner2 from "../Components/Home/Banner/Banner2"
import FeatureSection from "../Components/Home/FeatureSection/FeatureSection"
import TrustSignals from "../Components/Home/TrustSignals/TrustSignals"
import BeforeAfterResults from "../Components/Home/BeforeAfterResults/BeforeAfterResults"
import PricingSection from "../Components/Home/PricingSection/PricingSection"
import FaqSection from "../Components/Home/FaqSection/FaqSection"
import ServicesSection from "../Components/Home/ServicesSection/ServicesSection"
import TestimonialsSection from "../Components/Home/TestimonialsSection/TestimonialsSection"
import FreeAuditForm from "../Components/Home/FreeAuditForm/FreeAuditForm"
import Footer from "../Components/Layout/Footer"

import Navbar from "../Components/Layout/Navbar"
import Navbar2 from "../Components/Layout/Navbar2"

function Home() {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Navbar2 /> */}
            <Banner />
            {/* <Banner2 /> */}
            <FeatureSection />
            <TrustSignals />
            <BeforeAfterResults />
            <PricingSection />
            <FaqSection />
            <ServicesSection />
            <TestimonialsSection />
            {/* <FreeAuditForm /> */}

            {/* <Footer /> */}
        </>
    )
}
export default Home