import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LogoutPage from './components/LogoutPage';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Chat from './components/Chat';
import Search from './components/Search';
import Consultation from './components/Consultation';
import ConsultationComplete from './components/ConsultationComplete';
import TherapistChat from './components/TherapistChat';
import Appointment from './components/Appointment';
import TherapistApp from './components/TherapistApp';
import Advice from './components/Advice';
import TherapistMyPage from './components/TherapistMyPage';



const App = () => {
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
            <NavBar/>
            <Switch>
              <Route exact path="/login" component={SignIn}/>
            </Switch> 
            <Switch>
              <Route exact path="/logoutpage" component={LogoutPage}/>
            </Switch> 
            <Switch>
              <Route exact path="/Signup" component={SignUp}/>
            </Switch> 
            <Switch>
              <Route exact path="/mypage" component={MyPage}/>
            </Switch> 
            <Switch>
              <Route exact path="/chat" component={Chat}/>
            </Switch>
            <Switch>
              <Route exact path="/consultation" component={Consultation}/>
            </Switch>
            <Switch>
              <Route exact path="/consultation/complete" component={ConsultationComplete}/>
            </Switch>
            <Switch>
              <Route exact path="/appointment" component={Appointment}/>
            </Switch>
            <Switch>
              <Route exact path="/search" component={Search}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/login" component={SignIn}/>
            </Switch>  
            <Switch>
              <Route exact path="/therapist/Signup" component={SignUp}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/mypage" component={TherapistMyPage}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/chat" component={TherapistChat}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/advice" component={Advice}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/appointment" component={TherapistApp}/>
            </Switch>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch> 
        </ConnectedRouter>
      </React.Fragment>
    )
  
}
export default App;

//configureStoreから持って来て渡している <connectedRouter history={history}>
//switchはApp.jsにあったほうが管理しやすい
//App.jsに<NavBar/>を記述することで全てのページにheaderが表示される
//Linkのtoが実行されたときに
//switchに飛んでどこに画面遷移するべきか判断している
//<Button>でボタンを表示させ、<Switch>でSignIn画面に移動
//Route:URLのパスに応じてcomponentの出し分けができる
//<Route exact path="/"...>exact:URLのパスと文字列が完全一致した場合のみ描写される