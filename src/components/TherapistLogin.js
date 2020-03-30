import {useState} from 'react';
import Button from '@material-ui/core/Button';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'

function LoginButtonForTherapist(props){
  return (
    <Button onClick={props.onClick} variant="contained" color="secondary">
     Therapist Login
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
    const login = useSelector(state => state.login); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    console.log(props);
    
    const  hundleLoginClickT = () => {
      dispatch({ type: "SET_LOGIN_SUCCESS", isPatient:false }); //dispatchを実行することでReducerが実行される
      dispatch(push('therapist/mypage'));
    };
    
    const  hundleLogoutClickT = () => {
      dispatch({ type: "SET_LOGOUT_SUCCESS" });
      dispatch(push('/logoutpage'));
    };
    

    const Btn = () => {
    if(login.isLoginSuccess){
     if(login.isPatient==false){
      return (<LogoutButtonForTherapist onClick={hundleLogoutClickT}/>);
     }else{
     return (<React.Fragment/>)
     }
    }else{
      return (<LoginButtonForTherapist onClick={hundleLoginClickT} />);
    }
    };
    
  return (
      <Btn />
    );
};
// return (<React.Fragment/>)何か返さなきゃいけないからFragment入れた。
//returnの中は一つの要素しか持てない。