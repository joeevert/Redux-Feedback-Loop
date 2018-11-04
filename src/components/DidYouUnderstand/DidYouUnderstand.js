import React, { Component } from 'react';
import { connect } from 'react-redux';

class DidYouUnderstand extends Component {

  state = {
    understanding: '',
  }

  // click handler for NEXT button - will proceed to support (view #3)
  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick, understanding');
    this.props.dispatch( {type: 'ADD_UNDERSTANDING', payload: this.state} );
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
    return (
      <div>
        <h4>2 of 4 pages</h4>
        <h3>How well are you understanding the content?</h3>
        <form onSubmit={this.handleClick}>
          <input 
            type="number"
            name="understanding"
            required 
            onChange={this.handleChange}
            value={this.state.understanding}
          />
          <input type="submit" value="NEXT"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(DidYouUnderstand);
