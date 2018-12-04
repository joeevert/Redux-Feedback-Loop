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

class Supported extends Component {

  state = {
    support: '',
  }

  // click handler for NEXT button - will proceed to comments (view #4)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, support', this.state);
    let newSupport = this.state
    this.props.dispatch( {type: 'ADD_SUPPORT', payload: newSupport} );
    this.props.history.push('/4');
  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, support:', event.target.value);
    this.setState({
      ...this.state,
      support: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6'>3 of 4</Typography>
        <Typography variant='h5'>How well are you being supported?</Typography>
        <form onSubmit={this.handleClick}>
          <TextField 
            className={classes.input}
            type="number"
            name="support"
            required
            onChange={this.handleChange} 
            value={this.state.support}
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

export default connect(mapStateToProps)(withStyles(styles)(Supported));
