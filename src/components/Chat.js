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
import { addMessage } from '../modules/Message';
import Paper from '@material-ui/core/Paper';
import { addChat } from '../modules/Message';
import Box from '@material-ui/core/Box';


export default function QuestionDetail(props) {
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
      post: {
        marginBottom: 12,
      },
      line:{
        listStyle: "none",
      },
});
    const chat = useSelector(state => state.chat);
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    const handleAdd1 = (e) => {
        e.preventDefault();
        dispatch(addMessage(document.getElementById("Message").value));
    };

    const handleAdd2 = (e) => {
        e.preventDefault();
        dispatch(addChat(document.getElementById("Message").value));
    };
    
    const ListItems =() =>{
      return(
        login.isLoginSuccess?
        chat.message.map((message)=>(
        message.isPatient == login.isPatient?
          <div style={{ width: '100%' }}>
            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
              <Box p={1} bgcolor="#FFBEDA">
                <li key={message.id} className={classes.line}>
                  {message.message}
                </li>
              </Box>
            </Box>
          </div>
          :  
          <div style={{ width: '100%' }}>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
              <Box p={1} bgcolor="#D0B0FF" >
                 <li key={message.id}  className={classes.line}>
                  {message.message}
                </li>
              </Box>
            </Box>
         </div>
        )):
        <React.Fragment />
      );
     }
    
    const Message = () =>{
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
                                    id="Message"
                                    name="Message"
                                    label="Message"
                    
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
                  {chat.message==null?
                    <React.Fragment />:<ListItems/>}
                 {login.isLoginSuccess==null || login.isPatient==null?
                   <React.Fragment/>:<Message />} 
            </React.Fragment>
    );
}
//{login.isLoginSuccess==null || login.isPatient==null?
//ログインしているかつ患者の場合の処理の場合

// //        message.isPatient == login.isPatient?
//               <li key={message.id} className={classes.style1}>
//                 {message.content}
//               </li>: <-これはelseという意味
//                  {chat.message==null?
//                    <React.Fragment />:<ListItems/>} <- messageがなければただリストを表示する
