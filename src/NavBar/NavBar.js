import React from 'react';
import Classes from './NavBar.module.css';
import Hamburger from './HamburgerMenu/Hambburger';
import userLogo from '../assets/ay.JPEG';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const navbar = props => (
    <nav className={Classes.NavBar} >
        <div className={classes.Bar}>
            <div className={classes.Links}>    
            <ul>
                <li><NavLink to='/' exact activeClassName={classes.Active}> Home </NavLink></li>
                <li><NavLink to='/about' activeClassName={classes.Active}> About Me </NavLink></li>
                <li><NavLink to='/portfolio' activeClassName={classes.Active}> Portfolio </NavLink></li>
                {/* <li><NavLink to='/community' activeClassName={classes.Active}> Community </NavLink></li> */}
            </ul>
            </div>
            <img src={userLogo} height='50' alt='user' />
        </div>
        <div id={classes.SideDrawer} >
            <Hamburger />
            <p>{props.location}</p>
            <img src={userLogo} height='50' alt='user' />
        </div>

    </nav>
)

export default navbar;