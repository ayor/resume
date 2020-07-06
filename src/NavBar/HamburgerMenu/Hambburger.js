import React from 'react';
import Classes from './Hamburger.module.css';
import { connect } from 'react-redux';
import { TOGGLE_SIDEDRAWER } from '../../store/actions';
const hamburger = props => (
    <div 
    className={Classes.Hamburger}
    onClick = { props.onClickHamburger }>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

const mapActionsToProps = dispatch => {
    return {
        onClickHamburger: () => dispatch({ type: TOGGLE_SIDEDRAWER })
    }
}
export default connect(null,mapActionsToProps)(hamburger);