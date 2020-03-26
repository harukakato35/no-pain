import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import PatientLogin from './PatientLogin'
import TherapistLogin from './TherapistLogin'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Mypage from './MyPage';
// import TherapistMypage from './TherapistMypage';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
    const login = useSelector(state => state.login);

    return (
    <AppBar color="primary" position="static">
        <Toolbar>

                <List component="nav">
                    <ListItem component="div">
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                 <Link to="/">No pain</Link>
                       </TypoGraphy>
                        </ListItemText>
        
        
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <PatientLogin />
                       </TypoGraphy>
                        </ListItemText>
        
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <TherapistLogin />
                       </TypoGraphy>
                        </ListItemText>
                        {login.isLoginSuccess?
                         <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <Link to="/mypage">Mypage</Link>
                            </TypoGraphy>
                            </ListItemText> 
                            :
                            <React.Fragment />
                           }                    

                    </ListItem >
                </List>              

          </Toolbar>
        </AppBar>

    )
}

export default NavBar;