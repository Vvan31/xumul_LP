import React from 'react';
import BlogV3 from '../../components/blog/BlogV3';
import FeatureV1 from '../../components/feature/FeatureV1';
import WhyChooseUsV3 from '../../components/whyChoose/WhyChooseUsV4';
import ServicesV1 from '../../components/services/ServicesV1';
import ServiceV4 from '../../components/showCase/ShowCaseV1';
import AboutV3 from '../../components/about/AboutV3';
import AboutV1 from '../../components/about/AboutV1';
import ProjectV2 from '../../components/project/ProjectV2';
import PriceV1 from '../../components/price/PriceV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import TeamV1 from '../../components/team/TeamV2';
import ContactV1 from '../../components/contact/ContactV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV3 from '../../components/header/HeaderV3';

const Home3 = () => {
    return (
        <>
            {/* menu */}
            <HeaderV3 />
            {/* Hero section  */}
            <BlogV3 /> 

            {/* About our company */}
            <AboutV3 />

             {/* Our secret - Build robust tailor made systems */}
             <ServiceV4 />
             
            {/* Unlock your businesss full potential */}
            <WhyChooseUsV3 />

            {/* Stand out. Win the market */}
            <AboutV1 /> 

            {/* Services we offer */}
            <ServicesV1 />
           
            <ContactV1 />
            <FooterV1 />
        </>
    );
};

export default Home3;