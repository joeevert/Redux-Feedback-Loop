import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

  state = {
      feedback: [],
    };
  
  // request to database for feedback submissions
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('response',response.data);
      this.setState({
        feedback: response.data
      });
    }).catch((error) => {
      console.log('error:',error);
    })
  }

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
        <div>
            <h3>Feedback Results</h3>
            <table>
                <thead>    
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.feedback.map( (submission,index) => 
                    <tr key={index}>
                        <td>{submission.feeling}</td>
                        <td>{submission.understanding}</td>
                        <td>{submission.support}</td>
                        <td>{submission.comments}</td>
                        <td><button>DELETE</button></td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Admin;
