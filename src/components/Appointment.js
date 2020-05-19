import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { addAppt } from '../modules/Appointment';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

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
  plus1:{
    margin: 10,
    padding: 30,
    height:200,
  },
  p:{
    fontSize: 20,
    color:"#FF773E",
  },
  button:{
    backgroundColor:"#FFAD90",
    color: "white",
    paddingLeft: 30,
    paddingRight: 30,
  }
}));

export default function Appointment(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-03-18T21:11:54'));
　const dispatch = useDispatch(); 
　const classes = useStyles();
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addAppt(document.getElementById("date-picker-dialog").value,document.getElementById("time-picker").value));
        dispatch(push('/appointment/complete'));
  }

  return (
   <div className={classes.root}>
     <Grid container spacing={3}>
       <Grid item xs={7}>
         <TableContainer component={Paper} className={classes.plus1}>
            <p className={classes.p}> Tell us when you're convenient!</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="yyyy/MM/dd/HH:mm"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
            </MuiPickersUtilsProvider>
            <br></br>
            <br></br>
            <Button className={classes.button} variant="contained" onClick= {handleAdd} >
              Next
            </Button>
           </TableContainer>
          </Grid>
        </Grid>
    </div>
  );
}
