import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { erpCrmData } from '../Data/erpCrmData';

function ErpCrmPage() {
  return (
    <>
      <Banner data={erpCrmData.banner} />
      <AlternatingContentSection data={erpCrmData.contentBlocks} />
    </>
  );
}

export default ErpCrmPage;