import Banner from "../Components/ReusableComp/Banner";
import ServiceHero from "../Components/ReusableComp/ServiceHero/ServiceHero";
import ServiceHowItWorks from "../Components/ReusableComp/ServiceHowItWorks/ServiceHowItWorks";
import ServiceOverview from "../Components/ReusableComp/ServiceOverview/ServiceOverview";
import { SetupServiceData } from '../Data/SetupServiceData';

function SetupServicePage() {
  return (
    <>
      <Banner data={SetupServiceData.banner} />
      <ServiceHero data={SetupServiceData.hero}/>
      <ServiceOverview data={SetupServiceData.overview}/>
      <ServiceHowItWorks data={SetupServiceData.howItWorks}/>
    </>
  );
}

export default SetupServicePage;