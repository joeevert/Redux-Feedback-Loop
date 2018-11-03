import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

  state = {
    support: '',
  }

  // click handler for NEXT button - will proceed to comments (view #4)
  handleClick = () => {
    console.log('in handleClick, support', this.state);
    this.props.dispatch( {type: 'ADD_SUPPORT', payload: this.state} );
    this.props.history.push('/v4comments');
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
    return (
        <div>
            <h1>How well are you being supported?</h1>
            <input 
              type="number" 
              onChange={this.handleChange} 
              value={this.state.support}
            /><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(Supported);
