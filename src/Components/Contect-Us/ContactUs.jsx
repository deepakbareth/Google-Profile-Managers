import Banner from "../ReusableComp/Banner";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactSection";

const bannerData = {
    titlePrefix: "Google Business Profile",
    titleHighlight: "Contact Us  Today",
    subtitle: "Have a question or ready to get started? Reach out to our team of experts and let's take your digital presence to the next level."
};


function ContactUs() {
    return (
        <>
            <Banner data={bannerData} />
            <ContactSection/>
        </>
    );
}

export default ContactUs;