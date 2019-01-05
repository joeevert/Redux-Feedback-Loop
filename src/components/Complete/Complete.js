import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from '../muiStyles';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Complete extends Component {

  // loops back to view #1
  handleClick = () => {
    console.log('in handleClick, Leave New Feedback');
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classNames({[classes.paper]: true, ["scale-in-center"]: true})}>
        <Typography variant='h5'>Thank You!</Typography>
        <Button
          variant="outlined" 
          className={classes.button} 
          onClick={this.handleClick}
        >
          Leave New Feedback
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(Complete));
