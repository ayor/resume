import React from 'react';
import classes from './SideDrawer.module.css';
import SideNav from '../NavBar/SideNav/SideNav';
import Footer from '../Footer/Footer';

const sideDrawer = props => (
    <div >        
        <div className={ classes.SideDrawer }>
            <SideNav />
            <Footer/>
        </div>
        
    </div>
)

export default sideDrawer;