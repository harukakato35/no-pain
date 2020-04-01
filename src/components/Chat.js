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
import { addMessage } from '../modules/Message';
import Paper from '@material-ui/core/Paper';

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



const style1 = {
    float: "left"
};

const style2 = {
    float: "right"
};

export default function QuestionDetail() {
    const message = useSelector(state => state.message);
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addMessage(document.getElementById("Message").value));
    }

    const listItems1 = message.message.map((message)=>{
    if(login.isLoginSuccess){
    　if(login.isPatient==true){
        if(message.id % 2 === 0) {
          return(
              <li key={message.id} style={style1}>
                {message.content}
              </li>);
        } else {
          return(
              <li key={message.id} style={style2}>
                {message.content}
              </li>);
                 }
              }
            }
      }
    );
    
    const listItems2 = message.message.map((message)=>{
    if(login.isLoginSuccess){
    　if(login.isPatient==false){
    if(message.id % 2 === 0) {
      return(
          <li key={message.id} style={style2}>
            {message.content}
          </li>);
    } else {
      return(
          <li key={message.id} style={style1}>
            {message.content}
          </li>);
             }
          }
        }
      }
    );

return(
    <React.Fragment >
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
    {listItems1}{listItems2}
    

            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="Message"
                name="Message"
                label="Message"

                fullWidth
                autoComplete="lname"
                multiline
                rows="4"
                variant="outlined"
                
              />
          <Button variant="contained" onClick= {handleAdd} color="primary">
            Message
          </Button>
            </Grid>



    </React.Fragment>
  );
}