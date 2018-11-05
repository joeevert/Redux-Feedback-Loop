import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Complete extends Component {

  // click handler for Leave New Feedback button - will proceed to 'how are you feeling?' (view #1)
  handleClick = () => {
    console.log('in handleClick, Leave New Feedback');
    this.props.history.push('/');
  }

  render() {
    return (
        <div>
            <h3>Thank You!</h3>
            <Button variant="contained" onClick={this.handleClick}>Leave New Feedback</Button>
        </div>
    );
  }
}

export default Complete;
