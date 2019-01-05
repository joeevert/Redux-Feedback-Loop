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
      <Paper className={classNames({[classes.paper]: true, ["scale-in-center"]: true})}>
        <Typography variant='h6'>2 of 4</Typography>
        <Typography variant='h5'>How well are you understanding the content?</Typography>
        <form onSubmit={this.handleClick}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                name="feeling"
                value={this.state.understanding}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="Totally lost!"
                  control={<Radio color="primary" required/>}
                  label="Totally lost!"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Could use some help."
                  control={<Radio color="primary" required/>}
                  label="Could Use some help."
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Okay"
                  control={<Radio color="primary" required/>}
                  label="Okay"
                  labelPlacement="end"              
                />
                <FormControlLabel
                  value="I'm getting it."
                  control={<Radio color="primary" required/>}
                  label="I'm getting it."
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="I got this!"
                  control={<Radio color="primary" required/>}
                  label="I got this!"
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

export default connect(mapStateToProps)(withStyles(styles)(DidYouUnderstand));
