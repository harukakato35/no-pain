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
import TherapistMypageMenu from './TherapistMypageMenu';
import { ListItem, ListItemText } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { addAnswer } from '../modules/QuestionDetail';
import TextField from '@material-ui/core/TextField';

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
  plus:{
    height:600,
  },
  plus1:{
    height:600,
  },
  h3:{
    borderBottom:"3px solid orange"
  },
  table: {
    minWidth: 650,
  },
  list:{
    listStyle: "none",
  },
  button:{
      backgroundColor: "#FF99CC",
      color: "white",
      marginTop: 10,
  },
      line:{
        listStyle: "none",
      },
}));



export default function MyPage(props) {

    const classes = useStyles();
    const inquiry = useSelector(state => state.inquiry);
    const router =  useSelector(state => state.router.location.pathname);      
    const patient = inquiry.inquiry.filter(x => x.id === Number(router.substr(router.length -1,1)));
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addAnswer(document.getElementById("Answer").value));
        dispatch(push('/advice/complete'));
    }    

    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid  item xs={2}> 
          <TherapistMypageMenu/>
        </Grid>
           <Grid item xs={8}>
              <TableContainer component={Paper} className={classes.plus1}>
              <ListItem className={classes.h3}>
                <ListItem>Give Advice</ListItem>
              </ListItem>
                  <Table className={classes.table} aria-label="simple table">
                <TableHead>
                      <TableRow>
                          {patient.map((patient)=>(
                                <Card className={classes.root}>
                                  <CardContent>
                                    <Typography className={classes.title} gutterBottom>
                                    Title:<br></br>
                                     {patient.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    Inquiry:<br></br>
                                      {patient.inquiry}
                                    </Typography>
                                  </CardContent>
                                </Card>
                         ))}
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    <TableRow className={classes.list}>
                      <TableCell align="left" >
                          <TextField
                            required
                            id="Answer"
                            name="Answer"
                            label="Answer"
            
                            fullWidth
                            autoComplete="lname"
                            multiline
                            rows="4"
                            variant="outlined"
                          />
                          <Button variant="contained" onClick= {handleAdd}  className={classes.button}>
                            Answer
                          </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                 </Table>
              </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}


