const ADD_MY_PROFILE = 'ADD_MY_PROFILE';

export function addMyProfile(myprofile) {
  return { type:ADD_MY_PROFILE, myprofile };
}

const initialState = {
    myprofile: {name:'H', Workplace:"LL", Location: "ggg", Type:"ff", Special:"gg"},
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_MY_PROFILE:
      return { 
        ...state, 
       myprofile:action.myprofile
      };
    default:
      return state;
  }    
}