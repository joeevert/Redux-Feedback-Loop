import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from '../muiStyles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Complete extends Component {

  // click handler for Leave New Feedback button - will proceed to 'how are you feeling?' (view #1)
  handleClick = () => {
    console.log('in handleClick, Leave New Feedback');
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>Thank You!</Typography>
        <Button className={classes.button} onClick={this.handleClick}>Leave New Feedback</Button>
      </Paper>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(Complete));
