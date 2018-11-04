import React, { Component } from 'react';
import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';

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

  // delete feedback from database
  // deleteFeedback = (id) => {
  //   console.log('row id to delete:', id);
  //   console.log('in deleteFeedback');
  //   axios({
  //       method: 'DELETE',
  //       url: `/feedback/${id}`
  //   })
  //   .then((response) => {
  //       this.getFeedback();
  //   })
  //   .catch((error) => {
  //       console.log('DELETE error:', error)
  //   })
  // }

  // DELETE from db - used sweetalert to confirm/cancel delete
  deleteFeedbackSwal = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, the feedback will be removed permanently!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      })
      .then((willDelete) => {
      if (willDelete) {
          swal('The feedback has been deleted!', {
          icon: 'success',
          });
      console.log('in deleteTask');
      axios({
          method: 'DELETE',
          url: `/feedback/${id}`
      })
      .then((response) => {
          console.log(response);
          this.getFeedback();
      })
      .catch((error) => {
          console.log(error);        
      })
      } // end if 
      else {
          swal('The feedback remains!');
      } // end else
     a});
  } // end deleteFeedbackSwal


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
                        <td><button onClick={() => this.deleteFeedbackSwal(submission.id)}>DELETE</button></td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Admin;
