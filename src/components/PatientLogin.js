import {useState} from 'react';
import Button from '@material-ui/core/Button';
import React from 'react'
import MyPage from './MyPage';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'

function LoginButton(props){
  return (
    <Button onClick={props.onClick} >
      Patient Login
    </Button>
  );
}

function LogoutButton(props){
  return (
    <Button onClick={props.onClick}>
      Logout
    </Button>
  );
}

export default function PatientLogin (props){
    const login = useSelector(state => state.login); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();　//Login.jsのreducerを使うため
    console.log(props);
    
    const  hundleLoginClick = () => {
      dispatch({ type: "SET_LOGIN_SUCCESS",isPatient:true }); //dispatchを実行することでReducerが実行される
      dispatch(push('/mypage'));
    };
    
   const  hundleLogoutClick = () => {
      dispatch({ type: "SET_LOGOUT_SUCCESS" });
      dispatch(push('/logoutpage'));
    };
    

    const Btn = () => {
    if(login.isLoginSuccess){
    　if(login.isPatient==true){
      return (<LogoutButton onClick={hundleLogoutClick}/>);
    }else{
      return (<React.Fragment/>)
     }
    }else{
      return (<LoginButton onClick={hundleLoginClick} />);
    }
    };

    
  return (
      <Btn />
    );
};


//history APIを用いたルーティングを行いたい場合はBrowserRouterを使う
//SPA(シングルページ)出ないウェブサイトの場合「戻る」を押せば戻れるが、SPAでは
//そうは行かないからReact Routerが助けている
//historyAPI:ユーザーのアプリ上の動きを記録
//LogoutButtonの引数としてpropsが渡されているため、LogoutButtonが呼び出された
//時に<LogoutButton onClick={hundleLogoutClick}/>　{hundleLogoutClick.onClick}
//のようになる
//propsがないと<LogoutButton onClick={hundleLogoutClick}/>ここで使おうとしても
//上のfunctionで定義されているものが使えない。
//dispatch(push('/mypage')); これはglobal state使ってるか:画面遷移がこれでできてる

