import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AlternatingContentSection from '../Components/ReusableComp/AlternatingContentSection/AlternatingContentSection';
import { seoData } from '../Data/SeoData';

function SeoPage() {
  return (
    <>
      <Banner data={seoData.banner} />
      <AlternatingContentSection data={seoData.contentBlocks} />
    </>
  );
}

export default SeoPage;