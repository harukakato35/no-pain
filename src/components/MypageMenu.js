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
  plus:{
    height:600,
  },
  plus1:{
    height:600,
  }
}));



export default function MyPageMenu(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
            <TableContainer component={Paper} className={classes.plus}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                       <TableCell align="left"><Link to="/mypage">Mypage Top</Link></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            <p>Your appointment</p>
                            <ul>
                              <li><Link to="/upcoming/appointment">Upcoming Appointment</Link></li>
                              <li><Link to="/past/appointment">Past Appointment</Link></li>
                              <li><Link to="/appointment">Make a new appt</Link></li>
                            </ul>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            <p>Your consultation</p>
                            <ul>
                              <li><Link to="/past/consultation">Past consultation</Link></li>
                              <li><Link to="/waiting/advice">Waiting for advice</Link></li>
                              <li><Link to="/consultation">New Consultation</Link></li>
                            </ul>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            <p>Your review</p>
                            <ul>
                              <li><Link to="/">Past reviews</Link></li>
                              <li><Link to="/review">Write a review</Link></li>
                            </ul>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
      </Grid>
    </div>
  );
}


