import React from 'react';
import NavBar from '../NavBar/NavBar';
import myImg from '../assets/biggerScreen1.PNG'
import classes from './Home.module.css';
import Footer from '../Footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import { connect } from "react-redux";
import Radium, { StyleRoot } from 'radium';
import { fadeIn, 
    bounceInRight, 
    bounceInDown, 
    slideInLeft 
} from 'react-animations';
import * as actionTypes from '../store/actions';

const home = props => {
    let sidebar = null;
    const styles = {
        fadeIn: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        },
        bounceInRight: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
        },
        bounceInDown: {
            animation: 'x 2s',
            animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
        },
        
        slideInLeft: {
            animation: 'x 2s',
            animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
        }
    }
    

    if (props.globalState.showSideNav) {        
        sidebar = <SideDrawer />
    }
    return (
        <StyleRoot>
            <div className={classes.Home} style={styles.fadeIn}>
                {sidebar}
                <NavBar location='Home' />
                <div className={classes.Body} >
                    <img src={myImg} alt='Owner' style={styles.bounceInDown}/>
                    <main className={classes.Content} style={styles.bounceInRight}>
                        <h2>Dosumu Ayomide</h2>
                        <div>
                            <p>
                                My name is Dosumu Ayomide Oluwaseun. I am a Software Developer based in Lagos, Nigeria
                                who loves converting rigorous end -
                            end business processes to easy,time saving, efficient and reusuable tools.</p>
                            <div style={{
                                margin: '2px 10px',
                                backgroundColor: "#E6D9C8",
                                padding: "5px",
                                borderRadius: "30px"
                            }}>
                                <a style={{
                                    color:"gray",
                                    fontWeight : "bolder",
                                    fontSize : "15px",
                                    textDecoration: "none"
                                }} 
                                href="mailto:dosumuayomide@gmail.com">Say Hi</a>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer />
            </div>
        </StyleRoot>

    )
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