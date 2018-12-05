import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../muiStyles';

// mui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class HowAreYouFeeling extends Component {

  state = {
    feeling: '',
  }

  // click handler for NEXT button - will proceed to understand (view #2)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, feeling');
    let newFeeling = this.state
    this.props.dispatch( {type: 'ADD_FEELING', payload: newFeeling} );
    this.props.history.push('/2');
  }

  // change handler for input
  handleChange = (event) => {
    console.log('in handleChange, feeling:', event.target.value);
    this.setState({
      ...this.state,
      feeling: event.target.value
    });
}

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6'>1 of 4</Typography>
        <Typography variant='h5'>How are you feeling?</Typography>
        <form onSubmit={this.handleClick}>
          <TextField
            className={classes.input}
            type="number"
            name="feeling"
            required
            onChange={this.handleChange} 
            value={this.state.feeling}
            variant="outlined"
          /><br />
          {/* <TextField type="submit" value="NEXT" /> */}
          <Button variant="outlined" type="submit">
            NEXT
            <Icon fontSize='small'>arrow_forward</Icon>
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(HowAreYouFeeling));
