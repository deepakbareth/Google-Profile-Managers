import React from 'react';
import SuccessStoriesIntro from './SuccessStoriesIntro';

import mascotImg from '../../assets/globle/mascotImg.png';
import ServicesIntro from '../ReusableComp/ServicesIntroHP/ServicesIntroHP';

const successStoriesData = {
    image: mascotImg,
    heading: "Want to see what it’s like to work with the Master of Local Search?",
    subHeading: "Take a look inside the jungle with these success stories from real customers who are currently dominating the competition thanks to Google Profile Managers.",
    paragraph: "We’ve selected a few examples that demonstrate the type of results you could see when working with Google Profile Managers."
};

const info = {
    Heading: "Success Studies From Real Google Profile Managers Customers",
    paragraphs: [
        "Here are a few examples from popular industries that showcase the results of working with Google Profile Managers."

    ]
}

function SuccessStories() {
    return (
        <>
            <SuccessStoriesIntro data={successStoriesData} />
            <ServicesIntro data={info} />

        </>
    );
}

export default SuccessStories;