import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Slide from '../../Components/Slide/Slide';
import AllGroups from '../AllGroups/AllGroups';

const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <AllGroups></AllGroups>
            
        </div>
    );
};

export default Home;