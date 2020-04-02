import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Search from './Search';
import ph from './picture/ph.png';
import knee from './picture/knee.jpeg';
import shoulder from './picture/shoulder.png';
import back from './picture/back.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: 1000,
    height:500,
    position: 'relative',
    left: 130,
    backgroundImage: `url(${ph})`,
    cover: 'no-repeat',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1500,
  },
  p: {
    position: 'absolute',
    top: 5,
    right:5,
    color: '#93FFAB',
    fontSize:35
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor:'#FFEEFF',
    position: 'absolute',
    top: 620,
    width: 800
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'absolute',
    top: 680,
    width: 400,
    height: 265,
    backgroundImage: `url(${knee})`,
  },
  paper4: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'absolute',
    top: 680,
    width: 400,
    height: 265,
    backgroundImage: `url(${back})`,
  },
  paper5: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'absolute',
    top: 680,
    width: 400,
    height: 265,
    backgroundImage: `url(${shoulder})`,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} >
              <img className={classes.image}/>
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={8}>
        <Paper className={classes.paper2}>Find a therapist for your pain</Paper>
      </Grid>
      <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper3}></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper4}></Paper>
          </Grid> 
          <Grid item xs={4}>
            <Paper className={classes.paper5}></Paper>
          </Grid> 
      </Grid> 

    </div>
 </React.Fragment>
  );
}
