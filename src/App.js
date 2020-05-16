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
import SearchResult from './components/SearchResult';
import Consultation from './components/Consultation';
import PastConsultation from './components/PastConsultation';
import ConsultationComplete from './components/ConsultationComplete';
import Appointment from './components/Appointment';
import ApptComplete from './components/ApptComplete';
import TherapistMyPage from './components/TherapistMyPage';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import AdviceComplete from './components/AdviceComplete';
import TherapistProfile from './components/TherapistProfile';
import TherapistMyprofile from './components/TherapistMyprofile';
import ProfileComplete from './components/ProfileComplete';
import Review from './components/Review';
import PastReviews from './components/PastReviews';
import ReviewComplete from './components/ReviewComplete';
import KneeDoctors from './components/KneeDoctors';
import BackDoctors from './components/BackDoctors';
import ShoulderDoctors from './components/ShoulderDoctors';
import TherapistDetail from './components/TherapistDetail';
import EditMyProfile from './components/EditMyProfile';
import EditComplete from './components/EditComplete';
import NoResult from './components/NoResult';
import UpcomingAppt from './components/UpcomingAppt';
import PastAppt from './components/PastAppt';
import WaitingAdvice from './components/WaitingAdvice';

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
              <Route exact path="/past/consultation" component={PastConsultation}/>
            </Switch>
            <Switch>
              <Route exact path="/waiting/advice" component={WaitingAdvice}/>
            </Switch>
            <Switch>
              <Route exact path="/consultation/complete" component={ConsultationComplete}/>
            </Switch>
            <Switch>
              <Route exact path="/appointment" component={Appointment}/>
            </Switch>
            <Switch>
              <Route exact path="/upcoming/appointment" component={UpcomingAppt}/>
            </Switch>
            <Switch>
              <Route exact path="/past/appointment" component={PastAppt}/>
            </Switch>
            <Switch>
              <Route exact path="/appointment/complete" component={ApptComplete}/>
            </Switch>
            <Switch>
              <Route exact path="/review" component={Review}/>
            </Switch>
            <Switch>
              <Route exact path="/past/reviews" component={PastReviews}/>
            </Switch>
            <Switch>
              <Route exact path="/kneedoctors" component={KneeDoctors}/>
            </Switch>
            <Switch>
              <Route exact path="/backdoctors" component={BackDoctors}/>
            </Switch>
            <Switch>
              <Route exact path="/shoulderdoctors" component={ShoulderDoctors}/>
            </Switch>
            <Switch>
              <Route exact path="/review/complete" component={ReviewComplete}/>
            </Switch>
            <Switch>
              <Route exact path="/search" component={Search}/>
            </Switch>
            <Switch>
              <Route exact path="/search/result" component={SearchResult}/>
            </Switch>
            <Switch>
              <Route exact path="/no/result" component={NoResult}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/login" component={SignIn}/>
            </Switch> 
            <Switch>
              <Route exact path="/therapist/mypage" component={TherapistMyPage}/>
            </Switch>
            <Switch>
              <Route exact path="/questionlist" component={QuestionList}/>
            </Switch>
            <Switch>
              <Route exact path="/question/detail/:id" component={QuestionDetail}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/detail/:id" component={TherapistDetail}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/Signup" component={SignUp}/>
            </Switch>
             <Switch>
              <Route exact path="/therapist/profile" component={TherapistProfile}/>
            </Switch>    
             <Switch>
              <Route exact path="/therapist/myprofile" component={TherapistMyprofile}/>
            </Switch>  
             <Switch>
              <Route exact path="/edit/profile" component={EditMyProfile}/>
            </Switch>  
             <Switch>
              <Route exact path="/edit/complete" component={EditComplete}/>
            </Switch> 
             <Switch>
              <Route exact path="/profile/complete" component={ProfileComplete}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/advice" component={QuestionDetail}/>
            </Switch>
            <Switch>
              <Route exact path="/therapist/advice/complete" component={AdviceComplete}/>
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