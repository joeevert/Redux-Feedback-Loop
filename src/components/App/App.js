import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import DidYouUnderstand from '../DidYouUnderstand/DidYouUnderstand';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Complete from '../Complete/Complete';
import Admin from '../Admin/Admin';
// import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="App">
            <Route exact path="/" component= {HowAreYouFeeling} />
            <Route path="/2" component= {DidYouUnderstand} />
            <Route path="/3" component= {Supported} />
            <Route path="/4" component= {Comments} />
            <Route path="/5" component= {Complete} />
            <Route path="/admin" component= {Admin} />
          </div>
      </Router>
      </div>
    );
  }
}

export default connect()(App);
