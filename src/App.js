import React from 'react';
import Layout from './Layout';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';


const App = () => (
  <Router>
    <Switch>
      <Layout /> 
    </Switch>
  </Router>

)

export default App;
