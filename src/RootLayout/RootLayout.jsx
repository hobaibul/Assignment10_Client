import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
           
        </div>
    );
};

export default RootLayout;