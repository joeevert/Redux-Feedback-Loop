import React, { Component } from 'react';
import { connect } from 'react-redux';

class DidYouUnderstand extends Component {

  state = {
    understanding: '',
  }

  // click handler for NEXT button - will proceed to support (view #3)
  handleClick = () => {
    console.log('in handleClick, understanding');
    this.props.dispatch( {type: 'ADD_UNDERSTANDING', payload: this.state} );
    this.props.history.push('/v3support');
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
            <h1>How well are you understanding the content?</h1>
            <input type="number" onChange={this.handleChange} value={this.state.understanding}/><br />
            <button onClick={this.handleClick}>NEXT</button>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapStateToProps)(DidYouUnderstand);
