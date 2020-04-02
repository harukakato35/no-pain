import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#FFAD90',
    color:'white',
  },
}));
export default function Search() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const search = () => {
      dispatch({ type: "SEARCH_RESULT" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/search/result'));
    };
    
   return(
      <Button onClick={search} variant="contained" className={classes.button}>
        Search 
      </Button>
    );
  }
//検索キーワード入れる場所は作っておいて、取得出来るデータは固定