import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Saved from './pages/Saved';

class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Saved" component={Saved}/>
            </switch>
          </Router>
      </div>
    );
  }
}

export default App
