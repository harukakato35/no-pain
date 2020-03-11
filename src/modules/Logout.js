const SET_LOGOUT_SUCCESS = 'SET_LOGOUT_SUCCESS';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';

const initialState = {
  isLogoutSuccess: false
};


export default function LogOut(state=initialState, action) {
  switch (action.type) {
    case SET_LOGOUT_SUCCESS:
      return { 
        ...state, 
        isLogoutSuccess: true
      };
    default:
      return state;
  }
}