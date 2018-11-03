import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import DidYouUnderstand from '../DidYouUnderstand/DidYouUnderstand';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Complete from '../Complete/Complete';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="App">
              <nav>
                <ul>
                  <li><Link to="/feeling">feeling</Link></li>
                  <li><Link to="/understand">understand</Link></li>
                  <li><Link to="/support">support</Link></li>
                  <li><Link to="/comments">comments</Link></li>
                  <li><Link to="/complete">complete</Link></li>
                </ul>
              </nav>
              <Route path="/feeling" component= {HowAreYouFeeling} />
              <Route path="/understand" component= {DidYouUnderstand} />
              <Route path="/support" component= {Supported} />
              <Route path="/comments" component= {Comments} />
              <Route path="/complete" component= {Complete} />
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
