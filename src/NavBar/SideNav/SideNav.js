import React from 'react';
import classes from './SideNav.module.css';
import logo from '../../assets/ay.JPEG';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const sideNav = props => {
    
    return(
    <nav className={classes.SideNav}>
        <div className={classes.Logo}>
            <img src={logo}  height='50' alt="Ay's Logo" />
            <i style={{
                margin:'20px 10px'
            }}
            onClick={props.onToggleSideDrawer}
             className='fa fa-times'></i>
        </div>
        <div>
            <ul onClick={props.onToggleSideDrawer}>
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/about' >About Me</NavLink></li>
                <li><NavLink to='/portfolio' >Portfolio</NavLink></li>
                {/* <li><NavLink to='/' >Community</NavLink></li> */}
            </ul>
        </div>

    </nav>
)};

const mapActionsToProps = dispatch => {
    return {
        onToggleSideDrawer : () => dispatch({type: actionTypes.TOGGLE_SIDEDRAWER})
    }
}
export default connect(null,mapActionsToProps)(sideNav);