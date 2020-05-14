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
import MypageMenu from './MypageMenu';
import { ListItem, ListItemText } from "@material-ui/core";

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
  },
  h3:{
    borderBottom:"3px solid orange"
  }
}));



export default function MyPage(props) {

    const classes = useStyles();
    const appointments = useSelector(state => state.appointments.appointments);

    const listItems3 = appointments.map((appointments)=>
      <li key={appointments.id}>
       {appointments.time}
      </li>
    );

  return (
    <div className={classes.root}>
   <Grid container spacing={3}>
   <Grid  item xs={2}> <MypageMenu/></Grid>
         <Grid item xs={8}>
            <TableContainer component={Paper} className={classes.plus1}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                      <br></br>
                        <ListItem className={classes.h3}>
                          <ListItem>Your past appointment</ListItem>
                        </ListItem>
                           <br></br>
                        {listItems3}
                        
                      </TableRow>
                    </TableHead>
                  </Table>
            </TableContainer>
      
        </Grid>
      </Grid>
    </div>
  );
}


