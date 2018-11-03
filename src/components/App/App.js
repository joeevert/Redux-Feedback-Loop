import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import DidYouUnderstand from '../DidYouUnderstand/DidYouUnderstand';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Complete from '../Complete/Complete';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="App">
              {/* <nav>
                <ul>
                  <li><Link to="/feeling">feeling</Link></li>
                  <li><Link to="/understand">understand</Link></li>
                  <li><Link to="/support">support</Link></li>
                  <li><Link to="/comments">comments</Link></li>
                  <li><Link to="/complete">complete</Link></li>
                </ul>
              </nav> */}
              <Route path="/v1feeling" component= {HowAreYouFeeling} />
              <Route path="/v2understand" component= {DidYouUnderstand} />
              <Route path="/v3support" component= {Supported} />
              <Route path="/v4comments" component= {Comments} />
              <Route path="/v5complete" component= {Complete} />
          </div>
      </Router>
      </div>
    );
  }
}

export default connect()(App);
