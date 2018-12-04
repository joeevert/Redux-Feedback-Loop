import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../muiStyles';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class DidYouUnderstand extends Component {

  state = {
    understanding: '',
  }

  // click handler for NEXT button - will proceed to support (view #3)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, understanding');
    let newUnderstanding = this.state
    this.props.dispatch( {type: 'ADD_UNDERSTANDING', payload: newUnderstanding} );
    this.props.history.push('/3');
  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, understanding:', event.target.value);
    this.setState({
      ...this.state,
      understanding: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6'>2 of 4</Typography>
        <Typography variant='h5'>How well are you understanding the content?</Typography>
        <form onSubmit={this.handleClick}>
          <TextField
            className={classes.input}
            type="number"
            name="understanding"
            required 
            onChange={this.handleChange}
            value={this.state.understanding}
          /><br />
          {/* <input type="submit" value="NEXT"/> */}
          <Button type="submit">
            NEXT
            <Icon fontSize='small'>arrow_forward</Icon>
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(DidYouUnderstand));
