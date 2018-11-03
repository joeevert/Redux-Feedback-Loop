import React, { Component } from 'react';

class DidYouUnderstand extends Component {

  // click handler for NEXT button - will proceed to support (view #3)
  handleClick = () => {
    console.log('in handleClick');
    this.props.history.push('/v3support')
  }

  render() {
    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <input placeholder="answer"/><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

export default DidYouUnderstand;
