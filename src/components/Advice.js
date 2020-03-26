import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import React, { useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInquiry } from '../modules/Consultation';
import { push } from 'connected-react-router'


export default function Advice(props) {
   const dispatch = useDispatch(); 
  // const [inquiry, setInquiry] = useState("");
  // const [title, setTitle] = useState("");
   
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addInquiry(document.getElementById("Title").value,document.getElementById("Content").value));
        dispatch(push('advice/complete'));
    }
    
   return (
      <form>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Whad do you want to ask?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Title"
                name="Title"
                label="Title"
                
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="Content"
                name="Content"
                label="Content"

                fullWidth
                autoComplete="lname"
                multiline
                rows="4"
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Send notification"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="I don't need the notification"
              />
            </Grid>
          </Grid>
          <Button variant="contained" onClick= {handleAdd} color="primary">
            Next
          </Button>
        </React.Fragment>
      </form>
    );
  }

//<Button>のなかに<Link>を入れない!
//e.preventDefault:prevent a browser reload/refresh
//reactはstateを更新することで動いているからreload/refreshしなくて良い
