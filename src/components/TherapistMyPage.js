import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: '#FFAD90',
    color:'white',
  },
}));


export default function TherapistMyPage(props) {
    function ButtonForChat(props){
      return (
        <Button onClick={props.onClick} variant="contained" className={classes.button} >
          Chat with this Patient
        </Button>
      );
    }
    const classes = useStyles();
    const title = useSelector(state => state.title.inquiryTitles);
    const dispatch = useDispatch();
    const appointment = useSelector(state => state.appointments.appointment);
    const review = useSelector(state => state.review.review);
    
    const  Message = () => {
      dispatch({ type: "ADD_MESSAGE" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/chat'));
    };

    const appointments = useSelector(state => state.appointments.appointments);
    const listItems = appointments.map((appointment)=>

    <li key={appointment.id}>
      {appointment.time}
    </li>
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Question Lists</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">相談日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
        </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
               <Link to="/therapist/myprofile">
                  Edit/Show your profile
              </Link>
            </Paper>
            <Paper className={classes.paper}>
               <Link to="/therapist/profile">
                 Add your profile
              </Link>
            </Paper>            
          </Grid>
      </Grid>
      <Link to="/questionlist"><Button renderAs="button"variant="contained" className={classes.button}>Answer</Button></Link>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Your Answers</TableCell>
                        <TableCell align="right">タイトル</TableCell>
                        <TableCell align="right">Answered 日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
       　 </Grid>
      </Grid>
      <ButtonForChat onClick={Message}/>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Appointment lists</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">予約日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">{appointment}{listItems}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
          </Grid>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Your reviews</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">予約日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">{review}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                </Grid>
        </Grid>
    </div>
  );
}


