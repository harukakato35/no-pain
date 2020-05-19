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
  },
  table: {
    minWidth: 650,
  },
  list:{
    listStyle: "none",
  },
  button: {
    backgroundColor: '#FFAD90',
    color:'white',
    listStyle: "none",
  },
}));

export default function MyPage(props) {
    const classes = useStyles();
    const appointments = useSelector(state => state.appointments.appointments);
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch(); 
    
    function ButtonForApp(props){
      return (
        <Button onClick={props.onClick} variant="contained" className={classes.button}>
          Make an appt
        </Button>
      );
    }

function ButtonForReview(props){
  return (
    <Button onClick={props.onClick} variant="contained" className={classes.button}>
      Review 
    </Button>
  );
}

    const  Appointment = () => {
      dispatch(push('/appointment'));
    };  

    const  Review = () => {
      dispatch({ type: "WRITE_A_REVIEW" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/review'));
    };
    
    const listItems3 = appointments.map((appointments)=>
      <li key={appointments.id}>
       {appointments.time} 
      </li>
    );
    
    const listItems2 = profile.map((profile)=>(
      <ul>
        <Link to={`/therapist/detail/${profile.id}`} className={classes.list}>
          <li>
            {profile.name}
          </li>
        </Link> 
      </ul>
        ));
        
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid  item xs={2}> <MypageMenu/></Grid>
           <Grid item xs={8}>
              <TableContainer component={Paper} className={classes.plus1}>
                  <ListItem className={classes.h3}>
                    <ListItem>Your past appointment</ListItem>
                  </ListItem>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Appointment time</TableCell>
                         <TableCell align="center">Therapist Name</TableCell>
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    <TableRow className={classes.list}>
                      <TableCell align="left" >{listItems3}</TableCell>
                      <TableCell align="center" >{listItems2}</TableCell>
                    <TableCell align="right" >
                       <ul className={classes.list}>
                        <li>
                          <ButtonForApp onClick={Appointment} />
                        </li>
                       </ul>
                       <ul className={classes.list}>
                        <li>
                          <ButtonForApp onClick={Appointment}/>
                        </li>
                      </ul>
                    </TableCell>
                    <TableCell align="right" >
                       <ul className={classes.list}>
                        <li>
                           <ButtonForReview onClick={Review}/>
                        </li>
                       </ul>
                       <ul className={classes.list}>
                        <li>
                          <ButtonForReview onClick={Review}/>
                        </li>
                      </ul>
                    </TableCell>
                    </TableRow>
                  </TableBody>
                 </Table>
              </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}


