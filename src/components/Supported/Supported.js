import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

  state = {
    support: '',
  }

  // click handler for NEXT button - will proceed to comments (view #4)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, support', this.state);
    this.props.dispatch( {type: 'ADD_SUPPORT', payload: this.state} );
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
    return (
        <div>
          <h4>3 of 4 pages</h4>
          <h3>How well are you being supported?</h3>
          <form onSubmit={this.handleClick}>
            <input 
              type="number"
              name="support"
              required
              onChange={this.handleChange} 
              value={this.state.support}
            />
            <input type="submit" value="NEXT"/>
          </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(Supported);
