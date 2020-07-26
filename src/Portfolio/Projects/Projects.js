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
                <div style={{
                    width: "100%"
                }}>
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
            
            <div style={{
                                margin: '2px 10px',
                                backgroundColor: "#E6D9C8",
                                padding: "5px",
                                borderRadius: "30px",
                                textAlign : "Center"
                            }}><a 
            style={{               
                color: 'gray',
                textDecoration: "none",
                fontSize : "12px"
            }}
            href='https://github.com/ayor' > Check Github </a></div>
        </div>
        </StyleRoot>
    )
};

export default project;
