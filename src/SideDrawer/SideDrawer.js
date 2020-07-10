import React from 'react';
import classes from './SideDrawer.module.css';
import SideNav from '../NavBar/SideNav/SideNav';
import Footer from '../Footer/Footer';
import Radium, { StyleRoot } from 'radium';
import { bounceInLeft } from 'react-animations';

const sideDrawer = props => {

    const styles = {        
        bounceInLeft: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
        }
    }

     

    return (
        <StyleRoot>
        <div style={styles.bounceInLeft}>
            <div className={classes.SideDrawer}>
                <SideNav />
                <Footer />
            </div>
        </div>
        </StyleRoot>
    )
}

export default sideDrawer;