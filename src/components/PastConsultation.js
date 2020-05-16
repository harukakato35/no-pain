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
  list:{
    listStyle: "none",
  },
}));



export default function MyPage(props) {

    const classes = useStyles();
    const inquiry = useSelector(state => state.inquiry);
    const answer = useSelector(state => state.inquiry.answer)
    const dispatch = useDispatch(); 
    
    function ButtonForChat(props){
      return (
        <Button onClick={props.onClick} variant="contained" className={classes.button}>
          Chat 
        </Button>
      );
    }
    const listItems2 = inquiry.inquiry.map((inquiry)=>
      <li key={inquiry.id}>
       {inquiry.title}
      </li>
    );  
    const  Message = () => {
      dispatch({ type: "ADD_PATIENT_MESSAGE" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/chat'));
    };
    
    const listItems4 = answer.map((answer)=>
      <li key={answer.id}>
       {answer.answer}
      </li>
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid  item xs={2}> <MypageMenu/></Grid>
           <Grid item xs={8}>
              <ListItem className={classes.h3}>
                <ListItem>Your past consultation</ListItem>
              </ListItem>
              <TableContainer component={Paper} className={classes.plus1}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Your question</TableCell>
                         <TableCell align="center">Answer from therapists</TableCell>
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    <TableRow className={classes.list}>
                      <TableCell align="left" >{listItems2}</TableCell>
                      <TableCell align="center" >{listItems4}</TableCell>
                       <ul className={classes.list}>
                        <li>
                          <ButtonForChat onClick={Message} />
                        </li>
                       </ul>
                       <ul className={classes.list}>
                        <li>
                          <ButtonForChat onClick={Message}/>
                        </li>
                      </ul>
                    </TableRow>
                  </TableBody>
                 </Table>
              </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}



