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

const NavBar = () => {


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
                    </ListItem >
                </List>              

          </Toolbar>
        </AppBar>

    )
}

export default NavBar;