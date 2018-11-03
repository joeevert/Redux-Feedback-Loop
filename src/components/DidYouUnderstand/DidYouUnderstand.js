import React, { Component } from 'react';

class DidYouUnderstand extends Component {
  render() {
    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <input placeholder="answer"/><br />
            <button>NEXT</button>
        </div>
    );
  }
}

export default DidYouUnderstand;
