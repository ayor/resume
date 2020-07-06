import React from 'react';
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import LinkedIn from '../assets/linkedIn.png'
import github from '../assets/github.png'
import classes from './Footer.module.css'

const footer = props => (
    <div className={classes.Footer} >
        <div>
            <a href='https://twitter.com/ayor_' target='blank' title='twitter'> <img src={twitter} height='30' alt='user-socials' /></a>
            <a href='https://facebook.com/Dosumu Ayomide' target='blank'> <img src={facebook} height='30' alt='user-socials' /></a>
            <a href='https://twitter.com/ayor_' target='blank' title='linkedIn'> <img src={LinkedIn} height='30' alt='user-socials' /></a>
            <a href='https://github.com/ayor' title='github' target='blank'> <img src={github} height='30' alt='user-socials' /></a>
        </div>
    </div>
)
export default footer;