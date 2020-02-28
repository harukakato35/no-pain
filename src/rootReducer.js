import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';




export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    //左側の名前はなんでも良い、右側はimportしたものの名前

});