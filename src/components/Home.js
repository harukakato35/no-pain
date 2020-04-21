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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';


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
    cover: 'no-repeat'
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
  boxp3: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 1100,
    fontSize: 20,
    whiteSpace: 'nowrap',
  },
  search: {
    backgroundColor: '#9370DB',
    color:'white',
  },
 media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    height: 325,
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
                <img className={classes.image}/>
                <p className={classes.imagep}>
                  Having trouble finding the best treatment for your pain?<br></br>
                  We're here to help you.
                </p>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
      <Grid item xs={10}>
        <Paper className={classes.paper2}>Find a therapist for your pain</Paper>
      </Grid>
          <Grid item xs={4}>
             <Card className={classes.card}>
              <Link to="/kneedoctors">
                <CardHeader
                  title="Knee problems"
                />
                <CardMedia
                  className={classes.media}
                  image={knee}
                  title="Paella dish"
                />
                </Link>
              </Card>
            </Grid>

          <Grid item xs={4}>
             <Card className={classes.card}>
               <Link to="/backdoctors">
                <CardHeader
                  title="Back problems"
                />
                <CardMedia
                  className={classes.media}
                  image={back}
                />
                </Link>
              </Card>
            </Grid> 
            <Grid item xs={4}>
             <Card className={classes.card}>
              <Link to="/shoulderdoctors">
                <CardHeader
                  title="Shoulder problems"
                />
                <CardMedia
                  className={classes.media}
                  image={shoulder}
                />
               </Link>
              </Card>
            </Grid> 
            <Grid item xs={10}>
              <Paper className={classes.paper2}>Find a similar symptoms with other people!</Paper>
            </Grid>
             <Grid item xs={12}>
              <Search className={classes.search}/>
            </Grid> 
      </Grid> 
    </div>
 </React.Fragment>
  );
}

  // paper3: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   position: 'absolute',
  //   top: 680,
  //   width: 400,
  //   height: 265,
  //   backgroundImage: `url(${knee})`,
  // }, absoluteとか使うと浮かせてることになる
  