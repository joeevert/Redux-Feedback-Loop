import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from '../muiStyles';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6'>4 of 4</Typography>
        <Typography variant='h5'>Any comments you want to leave?</Typography>
        <form onSubmit={this.handleClick}>
          <TextField 
            className={classes.input}
            type="text"
            name="comments"
            required
            onChange={this.handleChange} 
            value={this.state.comments}
          /><br />
          <Button type="submit">
            SUBMIT
            <Icon fontSize='small'>done_all</Icon>
          </Button>
        </form>  
      </Paper>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(Comments));
