const SET_THERAPIST_LOGIN_PENDING = 'SET_THERAPIST_LOGIN_PENDING';
const SET_THERAPIST_LOGIN_SUCCESS = 'SET_THERAPIST_LOGIN_SUCCESS';
const SET_THERAPIST_LOGIN_ERROR = 'SET_THERAPIST_LOGIN_ERROR';
const SET_THERAPIST_LOGOUT_SUCCESS = 'SET_THERAPIST_LOGOUT_SUCCESS';

const initialState = { 
  isTherapistLoginSuccess: false,
  isTherapistLoginPending: false,
  TherapistLoginError: null
}

//ここから下がreducer 
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET_THERAPIST_LOGIN_PENDING:
      return { 
        ...state,
        isTherapistLoginPending: true
      };

    case SET_THERAPIST_LOGIN_SUCCESS:
      return { 
        ...state, 
      　isTherapistLoginPending: false,
        isTherapistLoginSuccess: true
      };
      
    case SET_THERAPIST_LOGOUT_SUCCESS:
      return { 
        ...state, 
        isTherapistLogoutSuccess: true,
        isTherapistLoginSuccess: false
      };
      
    case SET_THERAPIST_LOGIN_ERROR:
      return { 
        ...state, 
      　isTherapistLoginPending: false,
        TherapistLoginError: true
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
