import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { searchResult} from '../modules/Search';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
      },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color:"white",
    backgroundColor: "#AAFFFF",
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              id="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              noValidate autoComplete="off"
            />
          <Button variant="contained" onClick= {(e) => handleAdd(e,inquiry)}   className={classes.search}>
              Search 
          </Button>  
         </div>
      </React.Fragment>
    );
  }
//検索キーワード入れる場所は作っておいて、取得出来るデータは固定
//global stateはJS関数の中で呼び出せない
//{handleAdd(inquiry)} 引数を渡せる
//if文の{}ないの変数は外で呼び出せない
//(inquiry.title.indexOf(search) > -1)   = -1 だった場合は値が一致していないってこと：これはindexOfの決まり