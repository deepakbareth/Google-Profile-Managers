import React from 'react';

// import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection';
import { mobileAppData } from '../Data/MobileAppData';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';

function MobileAppPage() {
  return (
    <>
    
      <Banner data={mobileAppData.banner} />

      <AlternatingContentSection data={mobileAppData.contentBlocks} />
    </>
  );
}

export default MobileAppPage;