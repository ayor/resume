import React from 'react';
import Navbar from '../NavBar/NavBar';
import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';
import img1 from '../assets/init.JPG';
import classes from './About.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Footer from '../Footer/Footer';
import portfolioImage from '../assets/portfolio.PNG';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, 
    bounceInRight, 
    bounceInDown, 

} from 'react-animations';

const styles = {
    fadeIn : {
        animation: 'x 1s',
        animationName : Radium.keyframes(fadeIn,'fadeIn')
    },
    bounceInDown : {
        animation: 'x 1s',
        animationName : Radium.keyframes(bounceInDown,'bounceInDown')
    },
    bounceInRight : {
        animation: 'x 2s',
        animationName : Radium.keyframes(bounceInRight,'bounceInRight')
    }
}

const aboutMe = props => {
    let sidebar = null
    if (props.globalState.showSideNav) {
        sidebar = <SideDrawer />
    }
    return (
        <StyleRoot>
        <div className={classes.About} style={styles.fadeIn}>
            {sidebar}
            <Navbar location='About Me' />
            <div className={classes.Body}>
                <img src={img1} alt='user' height='550' width='450' style={styles.bounceInDown} />
                <div className={classes.Content} style={styles.bounceInRight}>
                    <h2> Dosumu Ayomide </h2>
                    <p>
                        My name is Dosumu Ayomide Oluwaseun. I am a Software Developer based in Lagos, Nigeria who 
                        loves converting rigorous end - end business processes to easy,time saving, efficient and reusuable tools.
</p>
                        <p>In September 2018, i was opportuned to intern as a Graduate Trainee at Chevron Nigeria Limited at the Application Development team,
                         where i was opportuned to be mentored by a great group of Software Engineers, 
                         Led a group of highly talented interns and received a Recognition Award for Operational Excellence.
                         </p><p>
                        I currently work as an Applications and Supports analyst at Cheron's Nigeria's IT Planning team 
                        where i help  that replace pre-existing workflows with an easy-to-use applications that process, manage, 
                        store and visualize data for easier management and better decision making.
</p>
<p>
    My other non-tech activities include Foootball, having led the IT Team to a second 
    place finish in the Chevron Employee week.
                        
                        </p>
                        <p>I am very passionate about advancing my knowledge in
                             Tech and Software Developement, this has led me to be a part of the Andela Learning Community and also paticipate 
                             in the ongoing #BuildForSDG challenge. 
                </p>
                </div>

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

const mapDispatchToProps = dispatch => {
    return {
        onToggleSideDrawer: () => dispatch({ type: actionTypes.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(aboutMe);