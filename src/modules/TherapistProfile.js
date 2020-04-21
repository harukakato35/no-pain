const ADD_PROFILE = 'ADD_PROFILE';

export function addProfile(profile) {
  return { type:ADD_PROFILE, profile };
}

const initialState = {
    profile:[
    {id:0,name:'H', Workplace:"LL", Location: "ggg", Type:"ff", Special:"gg"},
    ]
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_PROFILE:
      return { 
        ...state, 
       profile:
       [...state.profile,
        {id: 1,
         name:action.profile,
         Workplace:action.profile,
         Location: action.profile,
         Type:action.profile,
         Special:action.profile,   
       }],
      };
    default:
      return state;
  }    
}