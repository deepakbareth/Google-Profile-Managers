
import Banner from "../Components/Home/MainBanner/Banner"
import Banner2 from "../Components/Home/Banner/Banner2"
import FeatureSection from "../Components/Home/FeatureSection/FeatureSection"
import ServicesSection from "../Components/Home/ServicesSection/ServicesSection"
import TestimonialsSection from "../Components/Home/TestimonialsSection/TestimonialsSection"
import Footer from "../Components/Layout/Footer"

import Navbar from "../Components/Layout/Navbar"
import Navbar2 from "../Components/Layout/Navbar2"

function Home(){
    return(
        <>
        {/* <Navbar /> */}
        <Navbar2 />
        <Banner />
        {/* <Banner2 /> */}    
       <FeatureSection />
       <ServicesSection />
       <TestimonialsSection />
       <Footer />
        </>
    )
}
export default Home