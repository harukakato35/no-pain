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
import { addInquiry } from '../modules/QuestionDetail';
import { push } from 'connected-react-router'
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
    height:350,
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

export default function Consultation(props) {
   const dispatch = useDispatch(); 
   const classes = useStyles();
  // const [inquiry, setInquiry] = useState("");
  // const [title, setTitle] = useState("");
   
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addInquiry(document.getElementById("Title").value,document.getElementById("Inquiry").value));
        dispatch(push('/consultation/complete'));
    }
    
   return (
    <form>
      <React.Fragment>
         <Grid container spacing={3}>
           <Grid item xs={7}>
             <TableContainer component={Paper} className={classes.plus1}>
              <Typography variant="h6" gutterBottom className={classes.p}>
                Tell us what's bothering you...
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
                    id="Inquiry"
                    name="Inquiry"
                    label="Inquiry"
    
                    fullWidth
                    autoComplete="lname"
                    multiline
                    rows="4"
                    variant="outlined"
                    
                  />
                </Grid>
              </Grid>
              <br></br>
              <Button variant="contained" onClick= {handleAdd}  className={classes.button}>
                Next
              </Button>
            </TableContainer>
           </Grid>
         </Grid>
        </React.Fragment>
      </form>
    );
  }

//<Button>のなかに<Link>を入れない!
//e.preventDefault:prevent a browser reload/refresh
//reactはstateを更新することで動いているからreload/refreshしなくて良い
//addInquiryこれmodules/Consultation.jsになくない？？
