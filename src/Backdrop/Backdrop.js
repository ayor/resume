import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const backdrop = (props) => (
    <div style={{
        width:'100%',
        height:'100%',
        zIndex:'100',
        top:'0',
        position:'fixed',
        backgroundColor:'white'
    }} 
    onClick={props.onToggleSideDrawer}>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onToggleSideDrawer : () => dispatch({type: actionTypes.TOGGLE_SIDEDRAWER})
    }
}

export default connect(null, mapDispatchToProps) (backdrop);