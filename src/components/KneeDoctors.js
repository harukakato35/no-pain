import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addAnswer } from '../modules/QuestionDetail';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TypoGraphy from '@material-ui/core/Typography'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
  },
  button:{
    backgroundColor:"#FF99CC",
    color:"white",
  },
});

export default function QuestionDetail() {

    const classes = useStyles();
    const search = useSelector(state => state.search.search);
    const inquiry =  useSelector(state => state.inquiry.inquiry);
    const profile =  useSelector(state => state.profile.profile);
    // const router =  useSelector(state => state.router.location.pathname);
    // const therapist = profile.filter(x => x.id === Number(router.substr(router.length -1,1)));
    const login = useSelector(state => state.login);
    
  return (
      profile.map((profile)=>(
        <React.Fragment >
          <div className={classes.root}>
              <Grid container spacing={5}>
                 <Grid item xs={6}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} gutterBottom>
                      Name:<br></br>
                       {profile.name}
                      </Typography>
                      <Typography variant="body2" component="p">
                      Workplace:<br></br>
                        {profile.Workplace}
                      </Typography>
                      <Typography variant="body2" component="p">
                      Location:<br></br>
                        {profile.Location}
                      </Typography>  
                    </CardContent>
                    {login.isLoginSuccess==false? 
                    <Link to="/login" className={classes.link}>
                      <Button renderAs="button"variant="contained" className={classes.button}>
                       Sign in and message to this therapist!
                       </Button>
                    </Link>
                    :
                    <Link to="/chat" className={classes.link}>
                      <Button renderAs="button"variant="contained" className={classes.button}>
                       You can chat with this therapist!
                       </Button>
                    </Link>
                    }
                  </Card>
                </Grid>
            </Grid>
          </div>
        </React.Fragment>
        ))
    );
}
// const profile = useSelector(state => state.profile.profile[0]); [0]をつけたら表示されるようになったけど
//これじゃあいつも同じ人しか表示されなくなる
//  (str.substr(str.length-１,１)) substr:分割　.length:文字列の長さ 
//therapist/detail/o <-この最後の文字を取るために↑をやる
//Number('123'); 戻り値が123（数字として帰ってくる)
//Number(router.substr(router.length -1,1))); これが数字として帰ってくる