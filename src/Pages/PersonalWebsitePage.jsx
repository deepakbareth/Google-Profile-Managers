import ContactUs from "../Components/Contect-Us/ContactUs";
import AlternatingContentSection from "../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection";
import Banner from "../Components/ReusableComp/Banner";
import {personalWebsiteData} from '../Data/PersonalWebsiteData'

function PersonalWebsitePage() {
    return (
        <>
        <Banner data={personalWebsiteData.banner}/>
            <AlternatingContentSection data={personalWebsiteData.contentBlocks}/>
        </>
    );
}

export default PersonalWebsitePage;