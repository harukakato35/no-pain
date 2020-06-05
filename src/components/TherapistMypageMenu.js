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
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TypoGraphy from '@material-ui/core/Typography'
import PatientLogin from './PatientLogin'
import TherapistLogin from './TherapistLogin'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 80,
    backgroundColor:'#DDFFFF',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    paddingLeft: 10,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  p:{
    paddingLeft: 10,
  }
}));



export default function ClippedDrawer() {
  const classes = useStyles();
  const login = useSelector(state => state.login);
  return (
    <div className={classes.root}>
      <CssBaseline />
          <AppBar  className={classes.appBar}  position="fixed">
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
                              
                              {login.isLoginSuccess==true? 
                               <ListItemText inset>
                                  <TypoGraphy color="inherit" variant="title">
                                      <Link to={login.isPatient==true?"/mypage":"/therapist/mypage"}　className={classes.mypage}>Mypage</Link>
                                  </TypoGraphy>
                              </ListItemText> 
                              :
                              <React.Fragment/>
                              }
                          </ListItem >
                      </List>              
                </Toolbar>
              </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
                <div className={classes.drawerContainer}>
                  <Link to="/therapist/mypage"><br></br><br></br>Mypage Top</Link>
                  <List>
                  <p className={classes.p}>Edit your profile</p>
                      <ListItem button>
                        <ListItemIcon>
                          <ul>
                             <li><Link to="/therapist/myprofile">Show/Edit profile</Link></li>
                             <li><Link to="/therapist/profile">New profile</Link></li>
                         </ul>                
                        </ListItemIcon>
                      </ListItem>
                  </List>
                  <Divider />
                  <List>
                  <p className={classes.p}>Your appointment</p>
                      <ListItem button>
                        <ListItemIcon>
                          <ul>
                             <li><Link to="/therapist/upcoming/appointment">Upcoming Appointment</Link></li>
                             <li><Link to="/therapist/past/appointment">Past Appointment</Link></li>
                         </ul>                
                        </ListItemIcon>
                      </ListItem>
                  </List>
                  <Divider />
                  <List>
                   <p className={classes.p}>Advice</p>
                      <ListItem button>
                        <ListItemIcon>
                          <ul>
                           <li><Link to="/therapist/advice">Give advice</Link></li>
                           <li><Link to="/therapist/answered/questions">Answered</Link></li>
                         </ul>                
                        </ListItemIcon>
                        <ListItemText/>
                      </ListItem>
                  </List>
                 <Divider />
                </div>
             </Drawer>
           <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}