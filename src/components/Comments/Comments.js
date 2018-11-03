import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <input placeholder="answer"/><br />
            <button>SUBMIT</button>
        </div>
    );
  }
}

export default Comments;
