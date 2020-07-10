import React from 'react';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import LinkedIn from '../assets/linkedIn.png';
import github from '../assets/github.png';
import classes from './Footer.module.css';
import Radium, { StyleRoot } from 'radium';
import { fadeInUp } from 'react-animations';

const styles = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

const footer = props => (
    <StyleRoot>
        <div className={classes.Footer} style={styles.fadeInUp}>
            <div>
                <a href='https://twitter.com/ayor_' target='blank' title='twitter'> <img src={twitter} height='30' alt='user-socials' /></a>
                <a href='https://www.facebook.com/harwhy' target='blank'> <img src={facebook} height='30' alt='user-socials' /></a>
                <a href='https://linkedin.com/in/ayo-mide' target='blank' title='linkedIn'> <img src={LinkedIn} height='30' alt='user-socials' /></a>
                <a href='https://github.com/ayor' title='github' target='blank'> <img src={github} height='30' alt='user-socials' /></a>
            </div>
        </div>
    </StyleRoot>
)
export default footer;