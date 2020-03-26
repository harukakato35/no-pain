import {useState} from 'react';
import Button from '@material-ui/core/Button';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'

function LoginButtonForTherapist(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
      Login
    </Button>
  );
}

function LogoutButtonForTherapist(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
      Logout
    </Button>
  );
}

export default function TherapistLogin (props){
    const login = useSelector(state => state.therapistlogin); //global stateを呼び出すため,Dev toolをみて決めてる
    const logout = useSelector(state => state.therapistlogout); 
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    console.log(props);
    
    const  hundleLoginClickT = () => {
      dispatch({ type: "SET_THERAPIST_LOGIN_SUCCESS" }); //dispatchを実行することでReducerが実行される
      dispatch(push('therapist/mypage'));
    };
    
   const  hundleLogoutClickT = () => {
      dispatch({ type: "SET_THERAPIST_LOGOUT_SUCCESS" });
      dispatch(push('/logoutpage'));
    };
    

    const Btn = () => {
    if(login.isTherapistLoginSuccess){
      return (<LogoutButtonForTherapist onClick={hundleLogoutClickT}/>);
    }else{
      return (<LoginButtonForTherapist onClick={hundleLoginClickT} />);
    }
    };
    
  return (
    <div>
      <Btn />
    </div>
    );
};
