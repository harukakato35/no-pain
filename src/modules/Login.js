const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_LOGOUT_SUCCESS = 'SET_LOGOUT_SUCCESS';

const initialState = { 
  isLoginSuccess: false,
  isPatient: null,
  isLoginPending: false,
  loginError: null
}

//ここから下がreducer 
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return { 
        ...state,
        isLoginPending: true
      };

    case SET_LOGIN_SUCCESS:
      return { 
        ...state, 
      　isLoginPending: false,
      　isPatient: action.isPatient,
        isLoginSuccess: true
      };
      
    case SET_LOGOUT_SUCCESS:
      return { 
        ...state, 
        isPatient: null,
        isLoginSuccess: false
      };
      
    case SET_LOGIN_ERROR:
      return { 
        ...state, 
      　isLoginPending: false,
        loginError: true
      };

    default:
      return state;
  }
}

//isLoginPending: trueはpendingとして待ってるって意味
//isLoginPending: falseはもう待ってないですよってこと
//Ducksがなぜ良いのか？:Ducksはreducers, action types, actionsを一つの
//ファイルにまとめるもの。ちょっとの修正をそれぞれのファイルを開いてすることを
//→省ける。
//この記事は良い:https://medium.com/swlh/the-good-the-bad-of-react-redux-and-why-ducks-might-be-the-solution-1567d5bdc698
//isPatient: null,:nullにするのは誤判別がへるのと、ログイン前だからこういう処理
//ログインごはisPatient: true/falseでよい
//引数であり、actionは何かが入ってくるってこと
