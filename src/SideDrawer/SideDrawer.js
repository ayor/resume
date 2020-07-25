import React from 'react';
import classes from './SideDrawer.module.css';
import SideNav from '../NavBar/SideNav/SideNav';

import Radium, { StyleRoot } from 'radium';
import { bounceInLeft } from 'react-animations';

const sideDrawer = props => {

    const styles = {        
        bounceInLeft: {
            animation: 'x 2s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
        }
    }

    return (
        <StyleRoot>
        <div style={styles.bounceInLeft}>
            <div className={classes.SideDrawer}>
                <SideNav />
            </div>
        </div>
        </StyleRoot>
    )
}

export default sideDrawer;