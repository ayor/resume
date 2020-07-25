import React, { Component } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavBar from '../NavBar/NavBar';
import classes from './Portfolio.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Projects from "./Projects/Projects";
import { connect } from 'react-redux';
import Radium, { StyleRoot } from 'radium';
import {
    fadeIn,
    zoomIn

} from 'react-animations';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class Portfolio extends Component {

    state = {
        projectDetailisOpened: false
    }

    toggleProjectHandler = (pathname) => {
        //check the current pathname 
        if (this.props.location.pathname === pathname) {
            this.setState({ projectDetailisOpened: !this.state.projectDetailisOpened });
            this.props.history.push('/portfolio');
        } else {
            this.props.history.push(pathname);
        }

    }

    render() {
        let sidebar = null;
        if (this.props.globalState.showSideNav) {
            sidebar = <SideDrawer />;
        }
        
        return (
            <StyleRoot>
                <div className={classes.Portfolio_content} style={styles.fadeIn}>
                    <div className={classes.Portfolio} >
                        {this.props.globalState.projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <div onClick={() => this.toggleProjectHandler(project.pathname)}
                                        className={classes.ProjectLink}
                                        >
                                        <span>{project.name}</span>
                                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                    < Route path={project.pathname}
                                        render={() => (<Projects
                                            Description={project.Description}
                                            imgSrc={project.imgSrc}
                                            imgSrc2={project.imgSrc2}
                                            imgSrc1={project.imgSrc1}
                                            link={project.projectLink} />)} />
                                </div>)
                        })}

                    </div>
                    <Footer />
                </div>
            </StyleRoot>)
    }
};

const mapStateToProps = state => {
    return {
        globalState: state
    }
}

const mapActionsToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapActionsToProps)(Portfolio);

