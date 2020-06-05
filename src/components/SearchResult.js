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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TherapistMypageMenu from './TherapistMypageMenu';
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
});

export default function SearchResult(){
  const classes = useStyles();
  const search = useSelector(state => state.search.search);
  const inquiry =  useSelector(state => state.inquiry.inquiry);
  
  const listItems = inquiry.map((inquiry)=>
      <Link to={`/question/detail/${inquiry.id}`}>
       <li> {inquiry.title}</li>
      </Link> 
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
           <Grid item xs={8}>
              <TableContainer component={Paper} className={classes.plus1}>
                  <Table className={classes.table} aria-label="simple table">
                <TableHead>
                      <TableRow>
                        <TableCell>Check how others went through their recovery</TableCell>
                      </TableRow>
                    </TableHead>
                  <TableBody>
                    <TableRow className={classes.list}>
                      <TableCell align="left" >{listItems}</TableCell>
                    </TableRow>
                  </TableBody>
                 </Table>
              </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

// export default function SearchResult(){
//     const inquiries =  useSelector(state => state.inquiry);
//     const result = inquiries.filter( function(value){
//       return value === 'back';
//     })


//   return(
//     <div>
//       {result}
//     </div>
//   );
// }