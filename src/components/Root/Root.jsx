import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

/**
 * 1. use: usersPromise > suspense > promise > use (userPromise)
 * 2. [ less used so far] > useState + useEffect { () =>{}, []}
 * 3. load data before router component is rendered
 * 4. set loader in the route defination: load data before router component is rendered
 */ 