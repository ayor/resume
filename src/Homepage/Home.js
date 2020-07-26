import React from 'react';
// import myImg from '../assets/biggerScreen1.PNG';
import myImg from '../assets/portfolio.jpg';
import myImg1 from '../assets/init.JPG';
//import myImg2 from '../assets/init1.JPG';
import myImg2 from '../assets/init12.jpg';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import {
    fadeIn,
    bounceInRight,
    bounceInDown,
    slideInLeft,
    fadeInDownBig
} from 'react-animations';
import * as actionTypes from '../store/actions';

const home = props => {

    const styles = {
        fadeIn: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        },
        bounceInRight: {
            animation: 'x 4s',
            animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
        },
        bounceInDown: {
            animation: 'x 2s',
            animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
        },
        slideInLeft: {
            animation: 'x 2s',
            animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
        },
        fadeInDownBig: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
        }
    }

    return (
        <StyleRoot>
            <section className="bg-dark h-100 container-fluid" style={styles.fadeIn}>
                <div className="row">
                    <div className="col text-center my-5 align-content-center">
                        <h1 className="text-warning" style={styles.fadeInDownBig}>
                            <span className="text-white font-weight-bold"> Hi there, </span>
                            <span className="font-italic">welcome to <span className="text-monospace text-light font-weight-bold"><u>Ayo's</u></span> Portfolio</span> </h1>

                        <div className="row" >
                            <div className="col col-12 my-3 col-md-6 col-lg-4">
                                <div className="card">
                                    <NavLink to='/about'>
                                        <div className="card-body" >
                                            <img src={myImg2} className="card-img-bottom" alt="" />
                                            <div style={
                                                styles.bounceInRight
                                            }><div className="card-title" >
                                                    <h4 className="text-dark my-2"><u>Get to know me</u></h4>
                                                </div>
                                                <div className="card-subtitle">
                                                    <p className="font-weight-bold text-dark">I am a Software Developer based in Lagos, Nigeria who loves converting rigorous end - end business processes to easy, time saving, efficient and reusuable tools.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col col-12 my-3 col-md-6 col-lg-4">
                                <div className="card">
                                <NavLink to='/portfolio'>
                                    <div className="card-body">
                                        <img src={myImg} className="card-img-bottom" alt="" />
                                        <div style={
                                            styles.bounceInRight
                                        }>
                                            <div className="card-title">
                                                <h4 className="text-dark my-2"><u>Amazing Projects</u></h4>
                                            </div>
                                            <div className="card-subtitle">
                                                <p className="font-weight-bold text-dark">Take a deep dive into amazing projects i have built so far</p>
                                            </div>
                                        </div>
                                    </div>
                                    </NavLink>
                                </div>

                            </div>
                            <div className="col col-12 my-3 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={myImg1} className="card-img-bottom" alt="" />
                                        <div style={
                                            styles.bounceInRight
                                        }>
                                            <div className="card-title">
                                                <h4 className="text-dark my-2"><u>None tech stuff</u></h4>
                                            </div>
                                            <div className="card-subtitle">
                                                <p className="font-weight-bold text-dark">Get to know Ayo</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row mt-5 pt-5 " style={styles.slideInLeft}>
                            <div className="col col-12">
                                <ul className="list-unstyled d-flex flex-row px-1 justify-content-center ">
                                    <li className="list-item mx-2"><a href='https://twitter.com/ayor_' target='blank' title='twitter' className="btn btn-outline-light"><i className="fa fa-twitter fa-2x text-info"></i></a></li>
                                    <li className="list-item mx-2">  <a href='https://www.facebook.com/harwhy' target='blank' className="btn btn-outline-light"><i className="fa fa-facebook fa-2x text-primary"></i></a></li>
                                    <li className="list-item mx-2">  <a href='https://linkedin.com/in/ayo-mide' target='blank' title='linkedIn' className="btn btn-outline-light"><i className="fa fa-linkedin fa-2x text-primary"></i></a></li>
                                    <li className="list-item mx-2"> <a href='https://github.com/ayor' title='github' target='blank' className="btn btn-outline-light"><i className="fa fa-github fa-2x text-success"></i></a></li>
                                    <li className="list-item mx-2">   <a href="mailto:dosumuayomide@gmail.com" className="btn btn-outline-light">  <i className="fa fa-envelope fa-2x text-danger"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StyleRoot>
    );
}

const mapStateToProps = state => {
    return {
        globalState: state
    }
}

const mapActionsToProps = dispatch => {
    return {
        onToggleSideBar: () => dispatch({ type: actionTypes.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(home);