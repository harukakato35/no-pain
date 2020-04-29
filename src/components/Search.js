import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { searchResult} from '../modules/Search';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
 root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
  search: {
    backgroundColor: 'pink',
    color:'white',
  },
      }
     }
    )
  );

export default function Search() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const search = useSelector(state => state.search.search);
 　 const inquiry =  useSelector(state => state.inquiry.inquiry);

   
const handleAdd = (e,inquiry) => {
 　  e.preventDefault();
     const search = document.getElementById("Search").value;
     let result = [];
     inquiry.map((inquiry)=> {
       if(inquiry.title.indexOf(search) > -1){
             result.push(inquiry);
             dispatch(push('/search/result'));  
             dispatch(searchResult(result)); 
        }else{ 
            dispatch(push('/no/result')); 
        }
     });
};


   return(
     <React.Fragment>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="Search" label="Type here" variant="outlined" />
        </form>
        <Button variant="contained" onClick= {(e) => handleAdd(e,inquiry)}   className={classes.search}>
          Search 
        </Button>        
      </React.Fragment>
    );
  }
//検索キーワード入れる場所は作っておいて、取得出来るデータは固定
//global stateはJS関数の中で呼び出せない
//{handleAdd(inquiry)} 引数を渡せる
//if文の{}ないの変数は外で呼び出せない
//(inquiry.title.indexOf(search) > -1)   = -1 だった場合は値が一致していないってこと：これはindexOfの決まり