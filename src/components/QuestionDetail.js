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
    const inquiry = useSelector(state => state.inquiry);
    const dispatch = useDispatch();
    const login = useSelector(state => state.therapistlogin);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addAnswer(document.getElementById("Answer").value));
    }
    
    const listItems = inquiry.answer.map((answer)=>

    <li key={answer.id}>
      {answer.content}
    </li>
    );
    
  return (
    <React.Fragment >
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {inquiry.title}
        </Typography>
        <Typography variant="body2" component="p">
          {inquiry.inquiry}
        </Typography>
      </CardContent>
    </Card>
    {listItems}
    
    {login.isTherapistLoginSuccess?
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="Answer"
                name="Answer"
                label="Answer"

                fullWidth
                autoComplete="lname"
                multiline
                rows="4"
                variant="outlined"
                
              />
          <Button variant="contained" onClick= {handleAdd} color="primary">
            Answer
          </Button>
            </Grid>
             :
            <React.Fragment />
             }  
    </React.Fragment>
  );
}