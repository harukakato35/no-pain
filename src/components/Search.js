import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'

export default function Search() {

    const dispatch = useDispatch();
    
    const search = () => {
      dispatch({ type: "SEARCH_RESULT" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/search/result'));
    };
    
   return(
      <Button onClick={search} variant="contained" color="secondary">
        Search 
      </Button>
    );
  }
//検索キーワード入れる場所は作っておいて、取得出来るデータは固定