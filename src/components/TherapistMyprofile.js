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
  link:{
    textDecoration: 'none',
  }
}));


 function TherapistMyprofile (){
        const classes = useStyles();
      const myprofile = useSelector(state => state.myprofile.myprofile); 
      return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={7}>
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Question Lists</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">相談日時</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">{myprofile.name}</TableCell>
                           <TableCell align="right">{myprofile.Workplace}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Link to="/edit/profile" className={classes.link}><Button renderAs="button"variant="contained" className={classes.button}>Edit</Button></Link>
        </Grid>
        </Grid>

      </div>
          
          );
     
     
 }
 export default TherapistMyprofile;