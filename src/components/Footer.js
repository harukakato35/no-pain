import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from './Home';
import { ListItem, ListItemText } from "@material-ui/core";
import TypoGraphy from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer:{
      height: 200,
      backgroundColor:"#DDFFFF",
      marginTop:100,
      
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}  className={classes.footer}>
        <Grid item xs={12}>
            <ListItemText inset>
                <TypoGraphy  variant="title">
                    Contact 
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy  variant="title">
                    Blog
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy  variant="title">
                    Site policy 
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy  variant="title">
                    Privacy policy 
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy  variant="title">
                    Site map
                </TypoGraphy>
            </ListItemText>
         </Grid>
       </Grid>
    </div>
  );
}