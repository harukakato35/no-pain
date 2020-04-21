import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import Login from './modules/Login';
import Mypage from './modules/Mypage';
import TherapistMypage from './modules/TherapistMypage';
import Consultation from './modules/Consultation';
import QuestionDetail from './modules/QuestionDetail';
import Appointment from './modules/Appointment';
import Search from './modules/Search';
import Message from './modules/Message';
import Chat from './modules/Chat';
import TherapistProfile from './modules/TherapistProfile';
import TherapistMyprofile from './modules/TherapistMyprofile';
import Review from './modules/Review';

export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    //左側の名前はなんでも良い、右側はimportしたものの名前
    login: Login,
    mypage: Mypage,
    therapistmypage: TherapistMypage,
    inquiry: QuestionDetail,
    title: Consultation,
    appointments: Appointment,
    search: Search,
    chat:Message,
    profile: TherapistProfile,
    myprofile:TherapistMyprofile,
    review:Review,
});

//history:履歴管理に必要なもの
//connected-react-router:reduxとつなげられる
//..>..>..>みたいなアプリ上での遷移に対応できる

    // title: Consultation,
    // inquiry: Consultation