import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { ServicesData } from '../Data/ServicesData';
import ServiceHero from '../Components/ReusableComp/ServiceHero/ServiceHero';
import ServicesIntro from '../Components/ReusableComp/ServicesIntroHP/ServicesIntroHP';
import OtherServices from '../Components/ReusableComp/OtherServices/OtherServices';

function ServicesPage() {
  return (
    <>
      <Banner data={ServicesData.banner} />
      <ServiceHero data={ServicesData.hero} />
      <ServicesIntro data={ServicesData.services} />
      <OtherServices data={ServicesData.otherServices} />
      {/* the the other services bottum links  */}
    </>
  );
}

export default ServicesPage;