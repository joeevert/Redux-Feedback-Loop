import React, { Component } from 'react';

class Supported extends Component {

  // click handler for NEXT button - will proceed to comments (view #4)
  handleClick = () => {
    console.log('in handleClick');
    this.props.history.push('/v4comments')
  }

  render() {
    return (
        <div>
            <h1>How well are you being supported?</h1>
            <input placeholder="answer"/><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

export default Supported;
