import React from 'react';
import classes from './Projects.module.css';


const project = props => {

    let desc = props.Description.split('.');
    return (
        <div>
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
            
            <button
                    style={{
                        margin: '2px 30px',
                        width: '80%',
                        backgroundColor: '#E6D9C8',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '30px'
                    }}> Check Github </button>
        </div>
    )
};

export default project;
