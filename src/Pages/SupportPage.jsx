import Banner from "../Components/ReusableComp/Banner";
import ServiceHero from "../Components/ReusableComp/ServiceHero/ServiceHero";
import ServiceOverview from "../Components/ReusableComp/ServiceOverview/ServiceOverview";
import { SupportData } from "../Data/SupportData";

function SupportPage() {
  return (
    <>
      <Banner data={SupportData.banner}/>
      <ServiceHero data={SupportData.hero}/>
      <ServiceOverview data={SupportData.overview}/>
     
    </>
  );
}

export default SupportPage;