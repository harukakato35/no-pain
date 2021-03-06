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
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { ListItem, ListItemText } from "@material-ui/core";

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
  h3:{
    borderBottom:"3px solid orange"
  },
});

export default function QuestionDetail() {
    const inquiry = useSelector(state => state.inquiry);
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const router =  useSelector(state => state.router.location.pathname);
    const patient = inquiry.inquiry.filter(x => x.id === Number(router.substr(router.length -1,1)));

    // console.log(router.length -1);
  
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addAnswer(document.getElementById("Answer").value));
    }
    
    const listItems = inquiry.answer.map((answer)=>
        <li key={answer.id}>
          {answer.answer}
        </li>
    );
    

  return (
    <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
               <Grid item xs={8}>
                <TableContainer component={Paper} className={classes.plus1}>
                  <ListItem className={classes.h3}>
                    <ListItem>You can check what kind of treatment this person chose</ListItem>
                  </ListItem>
                  {patient.map((patient)=>(
                        <Card className={classes.root}>
                          <CardContent>
                            <Typography className={classes.title} gutterBottom>
                            Title:<br></br>
                             {patient.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                            Inquiry:<br></br>
                              {patient.inquiry}
                            </Typography>
                          </CardContent>
                        </Card>
                         ))}             
                </TableContainer>
          　　　</Grid>
     　　　　 </Grid>
    　　　</div>
                {listItems}
                {login.isPatient==false?
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
// const patient = inquiry.inquiry.filter(x => x.id === Number(router.substr(router.length -1,1)));
//x は戻り値
//配列の全ての要素の中から条件に一致する要素で、新たな配列を生成したいとき
//Number():文字列を数値に変換する
//const router =  useSelector(state => state.router.location.pathname); この値をトルコトンイよってquestion/detail/番号が取れる
//substring() method returns the part of the string between the start and end indexes, or to the end of the string.
//substr(router.length -1,1))); これが何を拾ったかは、console.log()でconsoleで確かめればわかる(デバッグ)
//console.log(router.length -1);の結果は17だった。question/detail/1
//(router.substr(router.length -1,1<-　これが17桁のうち最後の一番目を表示するって意味。
