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

export default function Appointment(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-03-18T21:11:54'));
　const dispatch = useDispatch(); 
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addAppt(document.getElementById("date-picker-dialog").value,document.getElementById("time-picker").value));
        dispatch(push('/appointment/complete'));
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
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
        <Button variant="contained" onClick= {handleAdd} color="primary">
            Next
        </Button>
    </MuiPickersUtilsProvider>
  );
}
