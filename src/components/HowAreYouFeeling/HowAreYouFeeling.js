import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../muiStyles';
import classNames from 'classnames';

// mui
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
      <Paper className={classNames({[classes.paper]: true, ["scale-in-center"]: true})}>
        <Typography variant='h6'>1 of 4</Typography>
        <Typography variant='h5'>How are you feeling?</Typography>
        <form onSubmit={this.handleClick}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                name="feeling"
                value={this.state.feeling}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="Very stressed!"
                  control={<Radio color="primary" required/>}
                  label="Very Stressed!"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Stressed."
                  control={<Radio color="primary" required/>}
                  label="Stressed."
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

HowAreYouFeeling.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(withStyles(styles)(HowAreYouFeeling));
