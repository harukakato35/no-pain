import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography'
import PatientLogin from './PatientLogin'
import TherapistLogin from './TherapistLogin'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor:'#DDFFFF',
  },
  typography: {
    color:'	#0000EE',
    fontSize: 20,
    textDecoration: 'none',
  },
  mypage: {
    color:'	#0000EE',
    fontSize: 17,
    textDecoration: 'none',
  },
}));

const NavBar = () => {
    const login = useSelector(state => state.login);
    const classes = useStyles();
    return (
     <React.Fragment >
    <AppBar  className={classes.bar}  position="static">
        <Toolbar>
                <List component="nav">
                    <ListItem component="div">
                        <ListItemText inset>
                            <TypoGraphy variant="title">
                                 <Link to="/"　className={classes.typography}>Home</Link>
                            </TypoGraphy>
                        </ListItemText>
                        <ListItemText inset>
                            <TypoGraphy  variant="title">
                                <PatientLogin />
                       </TypoGraphy>
                        </ListItemText>
                        <ListItemText inset>
                            <TypoGraphy variant="title">
                                <TherapistLogin />
                            </TypoGraphy>
                        </ListItemText>
                        {login.isPatient==true?
                         <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <Link to="/mypage" 　className={classes.mypage}>Mypage</Link>
                            </TypoGraphy>
                        　</ListItemText> 
                        :
                         <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <Link to="/therapist/mypage" 　className={classes.mypage}>Mypage</Link>
                            </TypoGraphy>
                        </ListItemText> 
                           }   
                    </ListItem >
                </List>              
          </Toolbar>
        </AppBar>
  </React.Fragment >
    );
}

export default NavBar;