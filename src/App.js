import React from 'react';
import Home from './Homepage/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => (
  <Router>
    <Switch>
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>

)

export default App;
