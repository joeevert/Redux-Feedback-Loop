import React, { Component } from 'react';

class HowAreYouFeeling extends Component {

  // click handler for NEXT button - will proceed to understand (view #2)
  handleClick = () => {
    console.log('in handleClick');
    this.props.history.push('/v2understand')
  }

  render() {
    return (
        <div>
            <h1>How are you feeling?</h1>
            <input placeholder="answer"/><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

export default HowAreYouFeeling;
