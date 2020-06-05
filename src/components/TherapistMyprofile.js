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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: '#FFAD90',
    color:'white',
    marginTop: 10,
    marginLeft: 750,
    padding: 10,
  },
  link:{
    textDecoration: 'none',
  },
  list:{
    listStyle:"none",
  }
}));


export default function TherapistMyprofile (){
      const classes = useStyles();
      const myprofile = useSelector(state => state.myprofile.myprofile); 

      return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
                <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                              <TableCell component="th" scope="row">
                              </TableCell>
                              
                              <TableCell align="left"  className={classes.list}>
                                <List component="nav" className={classes.root1} aria-label="mailbox folders">
                                  <ListItem >
                                   Name
                                  </ListItem>
                                  <Divider />
                                  <ListItem  divider>
                                    Workplace
                                  </ListItem>
                                  <ListItem >
                                   Location
                                  </ListItem>
                                  <Divider light />
                                  <ListItem >
                                    Type
                                  </ListItem>
                                  <Divider light />
                                  <ListItem >
                                   Special
                                  </ListItem>
                                </List>
                              </TableCell>
                              <TableCell align="right" className={classes.list}>
                                  <List component="nav" className={classes.root1} aria-label="mailbox folders">
                                    <ListItem >
                                      {myprofile.name}
                                    </ListItem>
                                    <Divider />
                                    <ListItem  divider>
                                       {myprofile.Workplace}
                                    </ListItem>
                                    <ListItem >
                                     {myprofile.Location}
                                    </ListItem>
                                    <Divider light />
                                    <ListItem >
                                      {myprofile.Type}
                                    </ListItem>
                                    <Divider light />
                                    <ListItem >
                                      {myprofile.Special}
                                    </ListItem>
                                  </List>
                              </TableCell>
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
