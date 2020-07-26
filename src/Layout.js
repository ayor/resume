import React from 'react';
import Home from './Homepage/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import SideDrawer from "./SideDrawer/SideDrawer";
import { Route } from 'react-router-dom';

const layout = (props) => {


    let sidebar = props.globalState.showSideNav ? <SideDrawer /> : null

    return (
        <div>
            {sidebar}
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
        </div>
    )
};

const mapsStateToProps = state => {
    return {
        globalState: state
    }
}

export default connect(mapsStateToProps)(layout);