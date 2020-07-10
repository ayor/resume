import React from 'react';
import classes from './Projects.module.css';
import Radium, { StyleRoot } from 'radium';
import {
    fadeIn,
    zoomIn

} from 'react-animations';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}

const project = props => {

    let desc = props.Description.split('.');
    return (
        <StyleRoot>
        <div style={styles.zoomIn}>
            <div className={classes.ProjectInfo}>
                <div>
                    {desc.map((el, ind) => <p key={ind}>{el}</p>)}

                    <p ><a style={{
                        color: 'gray'
                    }}
                        href={props.link}>Project Link</a></p>
                </div>
                <div className={classes.ProjectImages}>
                    {props.imgSrc ? (<img src={props.imgSrc} height='150' alt='project' />) : null}
                    {props.imgSrc2 ? (<img src={props.imgSrc2} height='150' alt='project' />) : null}
                    {props.imgSrc1 ? (<img src={props.imgSrc1} height='150' alt='project' />) : null}
                </div>
            </div>
            
            <p><a 
            style={{               
                color: 'gray'
            }}
            href='https://github.com/ayor' > Check Github </a></p>
        </div>
        </StyleRoot>
    )
};

export default project;
