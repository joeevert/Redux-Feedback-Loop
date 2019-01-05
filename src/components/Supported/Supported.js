import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../muiStyles';
import classNames from 'classnames';

// Material-UI
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
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
      <Paper className={classNames({[classes.paper]: true, ["scale-in-center"]: true})}>
        <Typography variant='h6'>3 of 4</Typography>
        <Typography variant='h5'>How well are you being supported?</Typography>
        <form onSubmit={this.handleClick}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                name="feeling"
                value={this.state.support}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="Not at all!"
                  control={<Radio color="primary" required/>}
                  label="Not at all."
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Not enough."
                  control={<Radio color="primary" required/>}
                  label="Not enough."
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Okay."
                  control={<Radio color="primary" required/>}
                  label="Okay."
                  labelPlacement="end"              
                />
                <FormControlLabel
                  value="Good."
                  control={<Radio color="primary" required/>}
                  label="Good."
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Great!"
                  control={<Radio color="primary" required/>}
                  label="Great!"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </div>
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

export default connect(mapStateToProps)(withStyles(styles)(Supported));
