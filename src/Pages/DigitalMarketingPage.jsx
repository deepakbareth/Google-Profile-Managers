import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { digitalMarketingData } from '../Data/DigitalMarketingData';

function DigitalMarketingPage() {
  return (
    <>
      <Banner data={digitalMarketingData.banner} />
      <AlternatingContentSection data={digitalMarketingData.contentBlocks} />
    </>
  );
}

export default DigitalMarketingPage;