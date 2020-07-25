import React from 'react';
import img1 from '../assets/init11.png';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
// import portfolioImage from '../assets/portfolio.PNG';
import Radium, { StyleRoot } from 'radium';
import {
    fadeIn,
    bounceInRight,
    bounceInDown,

} from 'react-animations';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    bounceInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    bounceInRight: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
    }
}

const aboutMe = props => {
  
    return (
        <StyleRoot>
            <section className="container-fluid 
            bg-light h-100" style={styles.fadeIn}>
              <div className="row">
                  <div className="col text-center my-3 ">
                      <h2 className="text-capitalize text-dark my-5 font-italic" >Some interesting facts about me</h2>
                       <div className="row d-flex flex-row-reverse ">
                           <div className="col col-12 col-md-6 col-lg-6 ">
                            <img src={img1} className="img-fluid rounded" alt=""/> 
                           </div>
                           <div className="col col-12 col-md-6 col-lg-6 text-dark font-weight-bold text-left text-monospace lead p-4">
                           <p>
                        My name is Dosumu Ayomide Oluwaseun. I am a Software Developer based in Lagos, Nigeria who 
                        loves converting rigorous end - end business processes to easy,time saving, efficient and reusuable tools.
                        In September 2018, i was opportuned to intern as a Graduate Trainee at Chevron Nigeria Limited at the Application Development team,
                         where i was opportuned to be mentored by a great group of Software Engineers, 
                         Led a group of highly talented interns and received a Recognition Award for Operational Excellence.
    
                </p>
                <p>
                I currently work as an Applications and Supports analyst at Chevron's Nigeria's IT Planning team 
                        where i help  that replace pre-existing workflows with an easy-to-use applications that process, manage, 
                        store and visualize data for easier management and better decision making. My other non-tech activities include Football, having led the IT Team to a second 
                        place finish in the Chevron Employee week. I am very passionate about advancing my knowledge in
                             Tech and Software Developement, this has led me to be a part of the Andela Learning Community and also paticipate 
                             in the just concluded #BuildForSDG challenge where myself and a group of skilled innovators who finished in the top 10% of 300 teams. 
                </p>
                           </div>
                           

                       </div>
                       
                  </div>
              </div>

            </section>
           
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