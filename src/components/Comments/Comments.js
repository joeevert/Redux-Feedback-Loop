import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Comments extends Component {
  state = {
    comments: '',
  }

  // click handler for SUBMIT button - will proceed to complete (view #4)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, comments');
    this.props.dispatch( {type: 'ADD_COMMENTS', payload: this.state} );
    this.props.history.push('/5');
    this.sendFeedback();
  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, comments:', event.target.value);
    this.setState({
      ...this.state,
      comments: event.target.value
    });
  }

  // POST to db - called in handleClick
  sendFeedback = () => {
    // let feedback = [this.props.reduxState.feedbackReducer, this.state.comments];
    // console.log('POST is:', [this.props.reduxState.feedbackReducer, this.state.comments]);
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.feedbackReducer
    })
    .then((response) => {
      console.log('sending feedback to db', response.data);
    })
    .catch((error) => {
      console.log('error sending feedback', error);
    })
  }

  render() {
    return (
      <div>
          <h1>Any comments you want to leave?</h1>
          <form onSubmit={this.handleClick}>
            <input 
              type="text"
              name="comments"
              required
              onChange={this.handleChange} 
              value={this.state.comments}
            />
            <input type="submit" value="SUBMIT"/>
          </form>  
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(Comments);
