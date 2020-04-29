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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form:{
  width: "15%",
  },
  link:{
  textDecoration: 'none',
  }
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
    <form onSubmit={printValues}>
      <label>
        Name:
         <br /><br />
        <input
          className={classes.form}
          value={form.name}
          name="name"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Workplace:
         <br /><br />
        <input
          className={classes.form}
          value={form.workplace}
          name="workplace"
          type="workplace"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Location:
         <br /><br />
        <input
          className={classes.form}
          value={form.location}
          name="location"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Type:
        <br /><br />
        <input
          className={classes.form}
          value={form.type}
          name="type"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Speciality:
         <br /><br />
        <input
          className={classes.form}
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
