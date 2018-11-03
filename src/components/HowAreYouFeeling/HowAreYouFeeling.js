import React, { Component } from 'react';
import { connect } from 'react-redux';

class HowAreYouFeeling extends Component {

  state = {
    feeling: '',
  }

  // click handler for NEXT button - will proceed to understand (view #2)
  handleClick = () => {
    console.log('in handleClick, feeling');
    this.props.dispatch( {type: 'ADD_FEELING', payload: this.state} );
    this.props.history.push('/v2understand');
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
            <h1>How are you feeling?</h1>
            <input 
              type="number"
              onChange={this.handleChange} 
              value={this.state.feeling}
            /><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(HowAreYouFeeling);
