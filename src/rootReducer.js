import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import Login from './modules/Login';
import Logout from './modules/Logout';
import Mypage from './modules/Mypage';
import TherapistMypage from './modules/TherapistMypage';
import Consultation from './modules/Consultation';
import TherapistLogin from './modules/TherapistLogin';
import TherapistLogout from './modules/TherapistLogout';
import QuestionDetail from './modules/QuestionDetail';
import Appointment from './modules/Appointment';
import Search from './modules/Search';



export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    //左側の名前はなんでも良い、右側はimportしたものの名前
    login: Login,
    logout: Logout,
    therapistlogout:TherapistLogout,
    therapistlogin: TherapistLogin,
    mypage: Mypage,
    therapistmypage: TherapistMypage,
    inquiry: QuestionDetail,
    title: Consultation,
    appointments: Appointment,
    search: Search
});

//history:履歴管理に必要なもの
//connected-react-router:reduxとつなげられる
//..>..>..>みたいなアプリ上での遷移に対応できる

    // title: Consultation,
    // inquiry: Consultation