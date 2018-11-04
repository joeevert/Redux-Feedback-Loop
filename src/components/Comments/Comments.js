import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
      this.props.dispatch( { type: 'RESET_STATE' } );
      console.log('sending feedback to db', response.data);
    })
    .catch((error) => {
      console.log('error sending feedback', error);
    })
  }

  render() {
    return (
      <div>
          <h4>4 of 4 pages</h4>
          <h3>Any comments you want to leave?</h3>
          <form onSubmit={this.handleClick}>
            <TextField 
              type="text"
              name="comments"
              required
              onChange={this.handleChange} 
              value={this.state.comments}
            /><br />
            {/* <input type="submit" value="SUBMIT"/> */}
            <Button type="submit">
              SUBMIT
              <Icon>done_all</Icon>
            </Button>
          </form>  
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(Comments);
