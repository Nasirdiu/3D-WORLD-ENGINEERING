import React from 'react';
import Banner from './Banner/Banner';
import CompeleateDesign from './CompeleateDesign/CompeleateDesign';
import DesignArchitect from './Design/DesignArchitect';
import OurTream from './OurTream/OurTream';
import Pricing from './Pricing/Pricing';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats/>
            <DesignArchitect/>
            <Pricing/>
            <CompeleateDesign/>
            <OurTream/>
        </div>
    );
};

export default Home;