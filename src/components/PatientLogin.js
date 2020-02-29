import React from "react"; 
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';



const PatientLogin = () => {

  return (
  <div>
      <div>
        <Button variant="contained" color="secondary">
          <Link to="/login">User Login</Link>
        </Button>  
       </div>
  </div>
  );
};

export default PatientLogin;

//Linkのtoが実行されたときに
//switchに飛んでどこに画面遷移するべきか判断している
//<Button>でボタンを表示させ、<Switch>でSignIn画面に移動
//Route:URLのパスに応じてcomponentの出し分けができる
//<Route exact path="/"...>exact:URLのパスと文字列が完全一致した場合のみ描写される
//history APIを用いたルーティングを行いたい場合はBrowserRouterを使う
//SPA(シングルページ)出ないウェブサイトの場合「戻る」を押せば戻れるが、SPAでは
//そうは行かないからReact Routerが助けている
//historyAPI:ユーザーのアプリ上の動きを記録