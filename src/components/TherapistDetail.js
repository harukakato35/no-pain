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
});

export default function QuestionDetail() {
    const profile = useSelector(state => state.profile.profile);
    const classes = useStyles();
    
  return (
      profile.map((profile)=>(
        <React.Fragment >
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                Name:<br></br>
                 {profile.name}
                </Typography>
                <Typography variant="body2" component="p">
                workplace:<br></br>
                  {profile.Workplace}
                </Typography>
              </CardContent>
            </Card>
        </React.Fragment>
        ))
    );
}
// const profile = useSelector(state => state.profile.profile[0]); [0]をつけたら表示されるようになったけど
//これじゃあいつも同じ人しか表示されなくなる
