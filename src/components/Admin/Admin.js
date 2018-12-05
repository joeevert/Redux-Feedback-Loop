import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const CustomTableCell = withStyles({
  head: {
    backgroundColor: '#485167',
    color: '#fff'
  },
  body: {
    fontSize: '18px',
  },
})(TableCell);

const styles = ({
  table: {
    maxWidth: '700px',
    margin: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#eee',
    },
  },
  title: {
    margin: '25px'
  }
});

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
      console.log('in deleteFeedback');
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
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title} variant='h4'>Feedback Results</Typography>
        <Table className={classes.table}>
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
            <TableRow key={index} className={classes.row}>
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
export default withStyles(styles)(Admin);

