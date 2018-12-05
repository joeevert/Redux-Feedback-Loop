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
  // state = {
  //   comments: '',
  // }

  // click handler for SUBMIT button
  handleClick = (event) => {
    event.preventDefault();
    // this.props.dispatch( {type: 'ADD_COMMENTS', payload: this.state} );
    this.sendFeedback();
    this.props.history.push('/5');

  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, comments:', event.target.value);
    this.props.dispatch( {type: 'ADD_COMMENTS', payload: {comments: event.target.value} } );
    // this.setState({
    //   ...this.state,
    //   comments: event.target.value
    // });
  }

  // POST
  sendFeedback = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.feedbackReducer
    })
    .then((response) => {
      console.log('sending feedback to db', response.data);
      this.props.dispatch( { type: 'RESET_STATE' } );
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
            variant="outlined"
            multiline
            rowsMax="5"
            // value={this.state.comments}
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
