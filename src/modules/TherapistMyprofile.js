const ADD_MY_PROFILE = 'ADD_MY_PROFILE';

export function addMyProfile(name,Workplace,Location,Type,Special) {
  return { type:ADD_MY_PROFILE,name:name,Workplace:Workplace,Location:Location,Type:Type,Special:Special};
}

const initialState = {
    myprofile: {name:'H', Workplace:"LL", Location: "ggg", Type:"ff", Special:"gg"},
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD_MY_PROFILE:
      return { 
        ...state, 
         myprofile:[{name:action.name , Workplace:action.Workplace, Location:action.Location,Type:action.Type,Special:action.Special}],
      };
    default:
      return state;
  }    
}