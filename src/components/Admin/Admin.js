import React, { Component } from 'react';
import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';

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
      console.log('GET response:', response.data);
      this.setState({
        feedback: response.data
      });
    }).catch((error) => {
      console.log('GET error:', error);
    })
  }

  componentDidMount() {
    this.getFeedback();
  }

  // submit = () => {
  //   console.log('delete button clicked');
  //   confirmAlert({
  //     title: 'Confirm to submit',
  //     message: 'Are you sure to do this.',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: () => alert('Click Yes')
  //       },
  //       {
  //         label: 'No',
  //         onClick: () => alert('Click No')
  //       }
  //     ]
  //   })
  // };

  // delete feedback from database
  deleteFeedback = (id) => {
    console.log('row id to delete:', id);
    console.log('in deleteFeedback');
    axios({
        method: 'DELETE',
        url: `/feedback/${id}`
    })
    .then((response) => {
        this.getFeedback();
    })
    .catch((error) => {
        console.log('DELETE error:', error)
    })
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
                  {this.state.feedback.map( (submission, index) => 
                    <tr key={index}>
                        <td>{submission.feeling}</td>
                        <td>{submission.understanding}</td>
                        <td>{submission.support}</td>
                        <td>{submission.comments}</td>
                        <td><button onClick={() => this.deleteFeedback(submission.id)}>DELETE</button></td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Admin;
