import {useState} from 'react';
import Button from '@material-ui/core/Button';
import React from 'react'
import MyPage from './MyPage';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'

function LoginButtonForTherapist(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">Login</Button>
  );
}

function LogoutButtonForTherapist(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">Logout</Button>
  );
}

export default function TherapistLogin (props){
    const login = useSelector(state => state.login); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    console.log(props);
    
    const  hundleLoginClickT = () => {
      dispatch({ type: "SET_LOGIN_SUCCESS" }); //dispatchを実行することでReducerが実行される
      dispatch(push('/therapist/mypage'));
    };
    
   const  hundleLogoutClickT = () => {
      dispatch({ type: "SET_LOGOUT_SUCCESS" });
    };
    

    const Btn = () => {
    if(login.isLoginSuccess){
      return (<LoginButtonForTherapist onClick={hundleLogoutClickT}/>);
    }else{
      return (<LogoutButtonForTherapist onClick={hundleLoginClickT} />);
    }
    };
    
  return (
    <div>
      <Btn />
    </div>
    );
};
