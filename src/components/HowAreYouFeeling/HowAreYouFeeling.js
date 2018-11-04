import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class HowAreYouFeeling extends Component {

  state = {
    feeling: '',
  }

  // click handler for NEXT button - will proceed to understand (view #2)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, feeling');
    this.props.dispatch( {type: 'ADD_FEELING', payload: this.state} );
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
    return (
      <div>
        <h4>1 of 4 pages</h4>
        <h3>How are you feeling?</h3>
        <form onSubmit={this.handleClick}>
          <TextField 
            type="number"
            name="feeling"
            required
            onChange={this.handleChange} 
            value={this.state.feeling}
          /><br />
          {/* <TextField type="submit" value="NEXT" /> */}
          <Button type="submit">
            NEXT
            <Icon>arrow_forward</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(HowAreYouFeeling);
