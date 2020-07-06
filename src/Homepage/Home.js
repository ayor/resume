import React from 'react';
import NavBar from '../NavBar/NavBar';
import myImg from '../assets/biggerScreen1.PNG'
import classes from './Home.module.css';
import BackDrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import { connect } from "react-redux";
import * as actionTypes from '../store/actions';

const home = props => {
    let sidebar = null;

    if (props.globalState.showSideNav) {
        sidebar = ([<BackDrop />,
        <SideDrawer />])
    }
    return (
        <div className={classes.Home}>
            {sidebar}
            <NavBar location='Home' />
            <div className={classes.Body}>
                <img src={myImg} alt='Owner' />
                <main className={classes.Content}>
                    <h2>Dosumu Ayomide</h2>
                    <div>
                        <p>
                            My name is Dosumu Ayomide Oluwaseun. I am a Software Developer based in Lagos, Nigeria
                             who loves converting rigorous end - 
                            end business processes to easy,time saving, efficient and reusuable tools.</p>
                            <div>
                            <button >Say Hi</button>
                                </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
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