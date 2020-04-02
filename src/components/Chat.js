import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { addMessage } from '../modules/Chat';
import Paper from '@material-ui/core/Paper';
import { addChat } from '../modules/Message';

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

export default function QuestionDetail(props) {
    const chatP = useSelector(state => state.chatP);
    const chatT = useSelector(state => state.chatT);
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    const handleAdd1 = (e) => {
        e.preventDefault();
        dispatch(addChat(document.getElementById("Message").value));
    };

    const handleAdd2 = (e) => {
        e.preventDefault();
        dispatch(addMessage(document.getElementById("Chat").value));
    };
    
    const listItems = chatT.message.map((message)=>{
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

    const listItems1 = chatT.message.map((message)=>{
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
    
    const messageA = () =>{
            if(login.isLoginSuccess){
            　if(login.isPatient==true){
                return(
                    <div>
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
                      <Button variant="contained" onClick={handleAdd1} color="primary">
                        Send
                      </Button>
                      </Grid>
                      </div>
);
                 } else {
        return(
            <div>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        required
                        id="Chat"
                        name="Chat"
                        label="Chat"
        
                        fullWidth
                        autoComplete="lname"
                        multiline
                        rows="4"
                        variant="outlined"
                      />
                      <Button variant="contained" onClick={handleAdd2} color="primary">
                        Send
                      </Button>
                      </Grid>
                        </div>
                      );

                       }
                 }
          };

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
                  {messageA}
                    {listItems}
                    {listItems1}
            </React.Fragment>
    );
}