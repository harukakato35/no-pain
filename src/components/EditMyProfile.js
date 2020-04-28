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
  top: {
    position:'fixed',
    left:18,
    top: 150,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float1: {
    position:'fixed',
    left:0,
    top:250,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float2: {
    position:'fixed',
    left:0,
    top:350,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float3: {
    position:'fixed',
    left:0,
    top:450,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    float4: {
    position:'fixed',
    left:0,
    top:550,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <input
          value={form.name}
          name="name"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Workplace:
        <input
          value={form.workplace}
          name="workplace"
          type="workplace"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Location:
        <input
          value={form.location}
          name="location"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Type:
        <input
          value={form.type}
          name="type"
          onChange={updateField}
        />
      </label>
      <br /><br />
      <label>
        Speciality:
        <input
          value={form.speciality}
          name="speciality"
          onChange={updateField}
        />
      </label>
      <br />
    <Link to="/edit/complete" className={classes.link}><Button renderAs="button"variant="contained" className={classes.button}>Edit</Button></Link>
    </form>
  );
}

//localで管理してるからあくまで値は変わらない。editできるように見せてるだけ
