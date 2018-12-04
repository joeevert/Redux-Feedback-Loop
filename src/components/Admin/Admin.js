import React, { Component } from 'react';
import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// });

class Admin extends Component {

  state = {
      feedback: [],
    };
  
  // request to database for feedback submissions
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then((response) => {
      console.log('GET response:', response.data);
      this.setState({
        feedback: response.data
      })
    })
    .catch((error) => {
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
    });
  } // end deleteFeedbackSwal

  render() {
    return (
      <div>
        <h3>Feedback Results</h3>
        <Table>
          <TableHead>    
            <TableRow>
              <CustomTableCell>Feeling</CustomTableCell>
              <CustomTableCell>Comprehension</CustomTableCell>
              <CustomTableCell>Support</CustomTableCell>
              <CustomTableCell>Comments</CustomTableCell>
              <CustomTableCell>Delete</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.feedback.map( (submission, index) => 
            <TableRow key={index}>
              <CustomTableCell>{submission.feeling}</CustomTableCell>
              <CustomTableCell>{submission.understanding}</CustomTableCell>
              <CustomTableCell>{submission.support}</CustomTableCell>
              <CustomTableCell>{submission.comments}</CustomTableCell>
              <CustomTableCell>
                <IconButton variant="contained" color="secondary" 
                  onClick={() => this.deleteFeedbackSwal(submission.id)}>
                  <Icon>delete_sweep</Icon>
                  </IconButton>
              </CustomTableCell>
            </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

// export default withStyles(styles)(Admin);
export default Admin;

