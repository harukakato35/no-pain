const SET_THERAPIST_LOGOUT_SUCCESS = 'SET_THERAPIST_LOGOUT_SUCCESS';
const SET_THERAPIST_LOGIN_SUCCESS = 'SET_THERAPIST_LOGIN_SUCCESS';

const initialState = {
  isTherapistLogoutSuccess: false
};


export default function LogOut(state=initialState, action) {
  switch (action.type) {
    case SET_THERAPIST_LOGOUT_SUCCESS:
      return { 
        ...state, 
        isTherapistLogoutSuccess: true
      };
    default:
      return state;
  }
}