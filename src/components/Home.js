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
import Box from '@material-ui/core/Box';


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
  imagep: {
  position: 'absolute',
  top: 99,
  right: 0,
  margin: 0,
  color: 'white',
  background: '#A9A9A9',
  fontSize: 32,
  lineHeight: 1,
  padding: 5,
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
  box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'absolute',
    top: 1000,
    width: 400,
    height: 265,
  },
  boxp1: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 50,
    fontSize: 20,
  },
  boxp2: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 600,
    fontSize: 20,
    whiteSpace: 'nowrap',
  },
  boxp3: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 1100,
    fontSize: 20,
    whiteSpace: 'nowrap',
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
             <p className={classes.imagep}>
                Having trouble finding the best treatment for your pain?<br></br>
                We're here to help you.
              </p>
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
          <Box component="span" m={1} className={classes.box}>
            <p className={classes.boxp1}>
              Knee problems
            </p>
            <p className={classes.boxp2}>
              Back problems
            </p>
            <p className={classes.boxp3}>
              Shoulder problems
            </p>
         </Box>
      </Grid> 

    </div>
 </React.Fragment>
  );
}
