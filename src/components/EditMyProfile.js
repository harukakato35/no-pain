import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addMyProfile } from '../modules/TherapistMyprofile';
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button';
import { useState } from "react";
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form1:{
  padding: 10,
  width: "60%",
  },
  form2:{
  padding: 30,
  width: "57%",
  },
  link:{
  textDecoration: 'none',
  },
  label:{
    marginLeft: 30,
    marginTop: 20,
  },
  button:{
      backgroundColor: "#FF99CC",
      color: "white",
      marginTop: 10,
      marginLeft: 800,
      padding: 15,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setValues] = useState({
    name: 'HK',
    workplace: 'NY',
    location:"NY",
    type:"physicaltherapy",
    speciality:"I have 20 years experience"
  });
 
  const printValues = e => {
    e.preventDefault();
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };


    
 return (
    <form onSubmit={printValues}  className={classes.label}>
      <label >
        Name
         <br /><br />
        <input
          className={classes.form1}
          value={form.name}
          name="name"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Workplace
         <br /><br />
        <input
          className={classes.form1}
          value={form.workplace}
          name="workplace"
          type="workplace"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Location
         <br /><br />
        <input
          className={classes.form1}
          value={form.location}
          name="location"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Type
        <br /><br />
        <input
          className={classes.form1}
          value={form.type}
          name="type"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Speciality
         <br /><br />
        <input
          className={classes.form2}
          value={form.speciality}
          name="speciality"
          onChange={updateField}
        />
      </label>
     <br /><br />
    <Link to="/edit/complete" className={classes.link}><Button renderAs="button"variant="contained" className={classes.button}>Edit</Button></Link>
    </form>

  );
}

//localで管理してるからあくまで値は変わらない。editできるように見せてるだけ
//onChange={updateField} ->既存の内容を変えられる
//e.preventDefault(); ->preventDefault() method cancels the event if it is cancelable, meaning that the 
//default action that belongs to the event will not occur
  // const updateField = e => {
  //   setValues({
  //     ...form,
  //     [e.target.name]: e.target.value <- name: 'HK', に相当してる
  //   });
  // };
          // value={form.speciality}->ここで記入したものが入る　->e.target.value
          // name="speciality"
