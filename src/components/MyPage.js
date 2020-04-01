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
}));

function ButtonForAdvice(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
      Ask for advice
    </Button>
  );
}

function ButtonForApp(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
      Make an appt
    </Button>
  );
}

function ButtonForChat(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
      Chat with this Therapist
    </Button>
  );
}
export default function MyPage(props) {
  const classes = useStyles();
    const mypage = useSelector(state => state.mypage); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    const title = useSelector(state => state.title.inquiryTitle);
    const answer = useSelector(state => state.inquiry.answer &&  state.inquiry.answer[0].content)
    const appointment = useSelector(state => state.appointment);
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
                          <ButtonForApp  onClick={Appointment}/>
                          <ButtonForChat  onClick={Message}/>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
        </Grid>
      </Grid>
      <ButtonForAdvice onClick={Advice}/>
    </div>
  );
}


