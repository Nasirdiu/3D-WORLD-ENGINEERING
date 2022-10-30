import React from 'react';
import Patner from '../Patner/Patner';
import Banner from './Banner/Banner';
import CompeleateDesign from './CompeleateDesign/CompeleateDesign';
import DesignArchitect from './Design/DesignArchitect';
import Offer from './Offer/Offer';
import OurTream from './OurTream/OurTream';
import Pricing from './Pricing/Pricing';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats/> 
            <DesignArchitect/>
            <Offer/>
            <Pricing/>
            <CompeleateDesign/>
            <OurTream/>
            <Patner/>
        </div>
    );
};

export default Home;