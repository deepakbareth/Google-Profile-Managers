import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { softwareDevelopmentData } from '../Data/SoftwareDevelopmentData';

function SoftwareDevelopmentPage() {
  return (
    <>
      <Banner data={softwareDevelopmentData.banner} />
      <AlternatingContentSection data={softwareDevelopmentData.contentBlocks} />
    </>
  );
}

export default SoftwareDevelopmentPage;