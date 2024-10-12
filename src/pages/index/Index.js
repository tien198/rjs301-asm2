import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Outlet } from 'react-router-dom';

function Index(props) {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Index;