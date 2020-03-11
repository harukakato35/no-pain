import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import Login from './modules/Login';
import Logout from './modules/Logout';




export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    //左側の名前はなんでも良い、右側はimportしたものの名前
    login: Login,
    logout: Logout
});

//history:履歴管理に必要なもの
//connected-react-router:reduxとつなげられる
//..>..>..>みたいなアプリ上での遷移に対応できる

