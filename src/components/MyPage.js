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
}));



export default function MyPage(props) {
function ButtonForApp(props){
  return (
    <Button onClick={props.onClick} variant="contained" className={classes.button}>
      Make an appt
    </Button>
  );
}

function ButtonForChat(props){
  return (
    <Button onClick={props.onClick} variant="contained" className={classes.button}>
      Chat with this Therapist
    </Button>
  );
}

function ButtonForAdvice(props){
  return (
    <Button onClick={props.onClick} variant="contained" className={classes.button}>
      Ask for advice
    </Button>
  );
}

function ButtonForReview(props){
  return (
    <Button onClick={props.onClick} variant="contained" className={classes.button}>
      Review this therapist
    </Button>
  );
}
    const classes = useStyles();
    const mypage = useSelector(state => state.mypage); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    const title = useSelector(state => state.title.inquiryTitle);
    const answer = useSelector(state => state.inquiry.answer &&  state.inquiry.answer[0].content)
    const appointment = useSelector(state => state.appointments.appointment);
    const chat = useSelector(state => state.message);

    
    const  Advice = () => {
      dispatch({ type: "ASK_FOR_ADVICE" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/consultation'));
    };
    

    const  Appointment = () => {
      dispatch({ type: "MAKE_APPOINTMENT" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/appointment'));
    };
    
    const  Message = () => {
      dispatch({ type: "ADD_PATIENT_MESSAGE" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/chat'));
    };
    
    const  Review = () => {
      dispatch({ type: "WRITE_A_REVIEW" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/review'));
    };
    

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">タイトル</TableCell>
                        <TableCell align="right">相談日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right">{title}</TableCell>
                          <TableCell align="right">{title}</TableCell>
                        </TableRow>
                    
                    </TableBody>
                  </Table>
                </TableContainer>
              <ButtonForAdvice onClick={Advice}/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>回答内容</TableCell>
                        <TableCell align="right">タイトル</TableCell>
                        <TableCell align="right">回答日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right">{answer}</TableCell>
                          <TableCell align="right"></TableCell>
                          <ButtonForApp onClick={Appointment}/>
                          <ButtonForChat onClick={Message}/>
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
                        <TableCell>Your appointment</TableCell>
                        <TableCell align="right">タイトル</TableCell>
                        <TableCell align="right">相談日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            1
                          </TableCell>
                          <TableCell align="right">{appointment}</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                    
                    </TableBody>
                  </Table>
                </TableContainer>
            <ButtonForReview onClick={Review}/>
        </Grid>
      </Grid>
    </div>
  );
}


