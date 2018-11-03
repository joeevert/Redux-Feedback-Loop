import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  }

  // click handler for SUBMIT button - will proceed to complete (view #4)
  handleClick = () => {
    console.log('in handleClick, comments');
    this.props.dispatch( {type: 'ADD_COMMENTS', payload: this.state} );
    this.props.history.push('/v5complete');
  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, comments:', event.target.value);
    this.setState({
      ...this.state,
      comments: event.target.value
    });
  }

  render() {
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <input type="text" onChange={this.handleChange} value={this.state.comments}/><br />
            <button onClick={this.handleClick}>SUBMIT</button>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(Comments);
