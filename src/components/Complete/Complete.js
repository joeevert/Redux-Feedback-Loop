import React, { Component } from 'react';

class Complete extends Component {

  // click handler for Leave New Feedback button - will proceed to 'how are you feeling?' (view #1)
  handleClick = () => {
    console.log('in handleClick, Leave New Feedback');
    this.props.history.push('/v1feeling');
  }

  render() {
    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={this.handleClick}>Leave New Feedback</button>
        </div>
    );
  }
}

export default Complete;
