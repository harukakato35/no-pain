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
});

export default function SearchResult(){

  const classes = useStyles();
  const profile = useSelector(state => state.profile.profile);
  
  return (
  
      profile.map((profile)=>(
      <ul>
        <Link to={`/therapist/detail/${profile.id}`}>
          <li>{profile.name}</li>
        </Link> 
      </ul>
        ))
  );
 
}

//ここは今表示されてる
